import React, { useRef, useContext, useEffect } from 'react';
import { GoogleOutlined, TwitterOutlined } from '@ant-design/icons';

import {
	LoginContainer,
	LoginPanel,
	ProductDetails,
	LoginButton,
	MercuryIconContainer,
	LogoTextLeft,
	LogoTextRight,
	LogoTextContainer
} from './index.styled';

import MercuryIcon from '../../Images/mercury.svg';
import {
	auth,
	FirebaseContext,
	GoogleAuthProvider,
	signInWithPopup,
	TwitterAuthProvider
} from '../../Firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
	const { user } = useContext(FirebaseContext);
	const navigate = useNavigate();
	const googleAuthProvider = useRef(new GoogleAuthProvider());
	const twitterAuthProvider = useRef(new TwitterAuthProvider());

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user]);

	async function handleLogin(provider) {
		await signInWithPopup(auth, provider);
	}

	return (
		<LoginContainer>
			<LoginPanel>
				<MercuryIconContainer src={MercuryIcon} alt="logo" />
				<LogoTextContainer>
					<LogoTextLeft>Mercury</LogoTextLeft>
					<LogoTextRight>Notes</LogoTextRight>
				</LogoTextContainer>
				<LoginButton
					size="large"
					type="primary"
					shape="round"
					icon={<GoogleOutlined />}
					onClick={() => handleLogin(googleAuthProvider.current)}
				>
					Login with Google
				</LoginButton>
				<LoginButton
					size="large"
					type="primary"
					shape="round"
					icon={<TwitterOutlined />}
					onClick={() => handleLogin(twitterAuthProvider.current)}
				>
					Login with Twitter
				</LoginButton>
			</LoginPanel>
			<ProductDetails />
		</LoginContainer>
	);
}

export default Login;
