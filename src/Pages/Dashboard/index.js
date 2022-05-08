import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicationBar from '../../Components/ApplicationBar';
import { FirebaseContext } from '../../Firebase';
import { DashboardContainer } from './index.styled';

function Dashboard() {
	const firebaseContext = useContext(FirebaseContext);

	const { user } = firebaseContext;
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [user]);

	return (
		<DashboardContainer>
			<ApplicationBar />
		</DashboardContainer>
	);
}

export default Dashboard;
