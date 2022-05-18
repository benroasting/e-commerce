import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUyqXhHnvJDd1KDkdc3LVIig2_Tc88NIU",
    authDomain: "e-commerce-db-eda9f.firebaseapp.com",
    projectId: "e-commerce-db-eda9f",
    storageBucket: "e-commerce-db-eda9f.appspot.com",
    messagingSenderId: "868710486388",
    appId: "1:868710486388:web:803647e379822e9591dc21"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc (db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    //if user data dooesn't exist
    //create / set the document with the data from the useAuth in collection
    if(!userSnapshot.exists()){
        const  { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation, });
        } catch (error) {
            console.log('erro creating user', error.message)
        }
    }

    //if user data exists
    //return useDocRef
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
}