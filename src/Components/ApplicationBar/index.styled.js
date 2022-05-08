import styled from 'styled-components';
import { Fixed, FlexColumn, FullHeight } from '../../global.styled';

export const ApplicationBarContainer = styled.div`
	${FlexColumn};
	${Fixed};
	${FullHeight};
	min-width: 20%;
	background-color: #ececec;
	position: relative;
`;
