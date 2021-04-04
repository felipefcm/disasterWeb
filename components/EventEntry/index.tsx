
import React from 'react';
import { DateTime } from 'luxon';

import { Container, EntryBody, EntryHeader, EntryHeaderDate, EntryHeaderInfo, EntryHeaderStatus, Tag, Tags } from './styles';
import { Link } from '@styled-icons/boxicons-regular/Link';

import { Event } from '../../lib/eonet';

type Props = {
	ev: Event,
};

const EventEntry: React.FC<Props> = (props) => {

	const event = props.ev;
	const dateStr = DateTime.fromISO(event.date).toFormat('yyyy-MM-dd HH:mm (ZZZZ)');

	return (
		<Container>
			
			<EntryHeader>
				<EntryHeaderDate><h2>{dateStr}</h2></EntryHeaderDate>
				<EntryHeaderInfo>
					<Link size={24}/>
					<EntryHeaderStatus isOpen={event.status === 'open'}>
						<span>{event.status}</span>
					</EntryHeaderStatus>
				</EntryHeaderInfo>
			</EntryHeader>

			<EntryBody>
				{event.title}
			</EntryBody>

			<Tags>
				{
					event.categoryTitles.map(c => (
						<Tag key={c}>{c}</Tag>
					))
				}
			</Tags>

		</Container>
	);
};

export default EventEntry;
