import React, { useEffect, useState } from 'react';
import { auth, FirebaseContext, onAuthStateChanged } from './Firebase';

const App = () => {
	const [appUser, setAppUser] = useState(null);
	useEffect(() => {
		onAuthStateChanged(auth, setAppUser);
	}, []);
	return (
		<FirebaseContext.Provider
			value={{ user: appUser }}
		></FirebaseContext.Provider>
	);
};

export default App;
