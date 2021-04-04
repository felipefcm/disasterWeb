
import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import useSWR from 'swr';

import { Container, EventList, FilterSelect, FilterToolbar, Header, Loading } from '../styles/main';
import EventEntry from '../components/EventEntry';

import { EONET, EventCategory, Event, EventStatus } from '../lib/eonet';

type Props = {
	categories?: EventCategory[],
	events?: Event[],
};

const MainPage: React.FC<Props> = (props) => {

	const [events, setEvents] = useState<Event[]>(props.events || []);

	const [categoryFilter, setCategoryFilter] = useState('all');
	const [statusFilter, setStatusFilter] = useState('all');

	const { data: newEvents } = useSWR(`/events/${categoryFilter}/${statusFilter}`, async () => {
		console.log(`Running client-side data request: ${categoryFilter}`);
		if(categoryFilter !== 'all')
			return EONET.getEventsByCategory(categoryFilter, statusFilter as EventStatus, 32);
		else
			return EONET.getEvents(statusFilter as EventStatus, 32);
	});

	useEffect(() => {
		console.log(`Effect was called`, newEvents);
		if(newEvents) setEvents(newEvents);
	}, [newEvents]);

	return (
		<Container>
			
			<Header>
				<h1>DisasterWeb</h1>
			</Header>

			<FilterToolbar>
				
				<FilterSelect onChange={(e) => setCategoryFilter(e.target.value)}>
					<option value="all">All</option>
					{
						(props.categories || []).map(c => (
							<option key={c.id} value={c.id}>
								{c.title}
							</option>
						))
					}
				</FilterSelect>
				
				<FilterSelect onChange={(e) => setStatusFilter(e.target.value)}>
					<option value="all">Any</option>
					<option value="open">Open</option>
					<option value="closed">Closed</option>
				</FilterSelect>

			</FilterToolbar>

			{
				!newEvents && <Loading>Loading...</Loading>
			}

			{
				newEvents && events.length === 0 && <Loading>No events found</Loading>
			}

			<EventList>
				{ events.map(e => (<EventEntry key={e.id} ev={e} />)) }
			</EventList>

		</Container>
	);
};

export default MainPage;

export const getStaticProps: GetStaticProps<Props> = async (props) => {

	let categories: EventCategory[];
	let events: Event[];

	await Promise.all([
		EONET.getCategories(),
		EONET.getEvents('all', 32),
	]).then(([cats, es]) => {
		categories = cats;
		events = es;
	});

	return {
		props: {
			categories,
			events,
		},
		revalidate: 30,
	};
};
