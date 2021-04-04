
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Header = styled.div`

	text-align: center;
	background: var(--platinum);
	font-size: 0.6rem;

	padding: 5px;
	color: var(--darker);

	box-shadow: 0px 1px 4px var(--darker);
	position: relative;

	h1 {
		font-weight: 300;
		letter-spacing: 0.15rem;
	}
`;

export const FilterToolbar = styled.div`

	display: flex;
	justify-content: space-evenly;

	background: var(--davys-grey);

	padding: 3px;
`;

export const FilterSelect = styled.select`

	background: var(--celadon-blue);
	color: var(--platinum);

	border: 0;
	outline: 0;

	padding: 4px 12px 4px 12px;
	font-size: 0.7rem;

	border-radius: 5px;
`;

export const Loading = styled.span`
	text-align: center;
	color: var(--platinum);
`;

export const EventList = styled.div`
	display: flex;
	flex-direction: column;
`;
