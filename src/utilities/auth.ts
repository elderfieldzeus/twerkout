import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export interface FormReturnProps {
    status: boolean;
    message?: string;
}

export async function signup(email: string, password: string): Promise<FormReturnProps> {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        return {status: true};
    }
    catch(e: unknown) {
        const error = e as {code: string, message: string};
        let message;
        switch(error.code) {
            case 'auth/invalid-email': message = 'Invalid Email.'; break;
            case 'auth/weak-password': message = 'Weak Password.'; break;
            case 'auth/email-already-in-use': message = 'Email already in use.'; break;
            default: message = 'Unknown Error.'; console.log(error.code);
        }
        return {status: false, message};
    }
}

export async function signinEmail(email: string, password: string): Promise<FormReturnProps> {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        return {status: true};
    }
    catch(e) {
        const error = e as {code: string, message: string}
        let message;
        switch(error.code) {
            case 'auth/invalid-email': message = 'Invalid Email.'; break;
            case 'auth/invalid-credential': message = 'Invalid Credential.'; break;
            case 'auth/too-many-requests': message = 'Too many requests.'; break;
            default: message = 'Unknown Error.'; console.log(error.code);
        }
        return {status: false, message};
    }

}

export async function signout() {
    signOut(auth).catch((error) => {
        console.log(error);
    });
}

export async function signinGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential ? credential.accessToken : null;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
}