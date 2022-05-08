import { css } from 'styled-components';

export const Flex = css`
	display: flex;
`;

export const FlexColumn = css`
	${Flex};
	flex-direction: column;
`;

export const FullHeight = css`
	height: 100vh;
`;

export const Fixed = css`
	position: fixed;
`;

export const FlexStart = css`
	justify-content: flex-start;
`;

export const FlexCenter = css`
	justify-content: center;
	align-items: center;
`;
