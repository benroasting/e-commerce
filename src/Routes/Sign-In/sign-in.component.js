
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../Components/sign-up/sign-up-form.component';

import { auth, signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google Pop-Up</button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn