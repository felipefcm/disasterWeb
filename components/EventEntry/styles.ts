
import styled from 'styled-components';

export const Container = styled.div`
	
	background: var(--platinum);
	
	margin: 8px;
	border-radius: 5px;
	padding: 10px;
`;

export const EntryHeader = styled.div`
	display: flex;
	justify-content: space-between;
	color: var(--darker);
`;

export const EntryHeaderDate = styled.div`
	h2 {
		font-size: 0.6rem;
	}
`;

export const EntryHeaderInfo = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const EntryHeaderStatus = styled.div<{ isOpen: boolean }>`
	background: ${(props) => props.isOpen ? '#008037' : '#fb3640'};
	color: var(--platinum);
	padding: 3px;
	border-radius: 8px;
	font-size: 0.6rem;
	margin-left: 5px;
`;

export const EntryBody = styled.div`
`;

export const Tags = styled.div`
	display: flex;
	margin-top: 10px;
	font-size: 0.7rem;
`;

export const Tag = styled.div`
	background: var(--celadon-blue);
	padding: 4px;
	border-radius: 5px;
	color: var(--platinum);
`;
