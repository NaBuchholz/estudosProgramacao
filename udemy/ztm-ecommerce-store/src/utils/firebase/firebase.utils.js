import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDr7-FjNb_cVAr-6DqFxiuDijHAK6WGKtM',
	authDomain: 'starfall-jewelry-db.firebaseapp.com',
	projectId: 'starfall-jewelry-db',
	storageBucket: 'starfall-jewelry-db.appspot.com',
	messagingSenderId: '711491150074',
	appId: '1:711491150074:web:9d77ac33063e9de387a943',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	const snapShot = await getDoc(userDocRef);
	if (!snapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}
	return userDocRef;
};
