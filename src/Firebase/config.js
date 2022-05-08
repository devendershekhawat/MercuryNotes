import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
	getAuth,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider,
	TwitterAuthProvider,
	signOut
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAf9FqAePmbwqOpr2S1jUiMorK8NiRrYAA',
	authDomain: 'mercurynotes-app.firebaseapp.com',
	projectId: 'mercurynotes-app',
	storageBucket: 'mercurynotes-app.appspot.com',
	messagingSenderId: '484729847018',
	appId: '1:484729847018:web:cd485c289c1d89ed472b93',
	measurementId: 'G-98GWPD51YH'
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export {
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	TwitterAuthProvider,
	signOut
};
