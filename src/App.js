import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { auth, FirebaseContext, onAuthStateChanged } from './Firebase';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

const App = () => {
	const [appUser, setAppUser] = useState(null);
	useEffect(() => {
		onAuthStateChanged(auth, setAppUser);
	}, []);
	return (
		<Router>
			<FirebaseContext.Provider value={{ user: appUser }}>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Dashboard />} />
				</Routes>
			</FirebaseContext.Provider>
		</Router>
	);
};

export default App;
