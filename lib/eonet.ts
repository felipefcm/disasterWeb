
import axios from 'axios';

const client = axios.create({
	baseURL: 'https://eonet.sci.gsfc.nasa.gov/api/v3',
});

export type Event = {
	id: string,
	title: string,
	date: string,
	status: EventStatus,
	categoryTitles: string[],
	closed: string | null,
	sources: string[],
};

export type EventCategory = {
	id: string,
	title: string,
	description: string,
};

export type EventStatus = 'open' | 'closed' | 'all';

export class EONET {

	static async getCategories(): Promise<EventCategory[]> {
		const { data } = await client.get('/categories');
		return data.categories.map(c => this.makeCategory(c));
	}

	static async getEvents(status: EventStatus = 'open', limit?: number, days?: number): Promise<Event[]> {
		
		const { data } = await client.get('/events', {
			params: {
				status,
				limit,
				days,
			},
		});

		return data.events.map(e => this.makeEvent(e));
	}

	static async getEventsByCategory(categoryId: string, status: EventStatus = 'open', limit?: number, days?: number): Promise<Event[]> {
		
		const { data } = await client.get(`/categories/${categoryId}`, {
			params: {
				status,
				limit,
				days,
			},
		});

		return data.events.map(e => this.makeEvent(e));
	}

	private static makeCategory(category: Record<string, any>) {
		
		const c: EventCategory = {
			id: category.id,
			title: category.title,
			description: category.description
		};

		return c;
	}

	private static makeEvent(event: Record<string, any>) {
		
		const e: Event = {
			id: event.id,
			title: event.title,
			date: event.geometry[0].date,
			status: event.closed ? 'closed' : 'open',
			categoryTitles: event.categories.map(c => c.title),
			closed: event.closed,
			sources: event.sources.map(s => s.url),
		};

		return e;
	}
};
