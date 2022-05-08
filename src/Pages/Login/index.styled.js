import styled from 'styled-components';
import { Button } from 'antd';

import {
	FlexColumn,
	FullHeight,
	Fixed,
	Flex,
	FlexStart,
	FlexCenter
} from '../../global.styled';

export const LoginContainer = styled.div`
	${Flex};
	${FlexStart};
`;

export const LoginPanel = styled.div`
	${FlexColumn};
	${FlexCenter};
	${FullHeight};
	${Fixed};
	width: 30%;
	background: #ececec;
`;

export const ProductDetails = styled.div`
	height: 12000px;
	width: 60%;
`;

export const LoginButton = styled(Button)`
	width: 262px;
	margin-bottom: 10px;
`;

export const MercuryIconContainer = styled.img`
	width: 90px;
	margin-bottom: 20px;
`;

export const LogoTextContainer = styled.span`
	font-family: 'Roboto Flex', sans-serif;
	margin-bottom: 10px;
	display: block;
	font-size: 32px;
`;

export const LogoTextLeft = styled.span`
	font-weight: 600;
	color: #e34b4b;
`;

export const LogoTextRight = styled.span`
	font-weight: 100;
`;
