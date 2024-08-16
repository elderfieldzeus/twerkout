import { FirebaseError } from "firebase/app";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export interface FormReturnProps {
  status: boolean;
  message?: string;
}

export async function signup(
  email: string,
  password: string,
): Promise<FormReturnProps> {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log(user);
    return { status: true };
  } catch (error: FirebaseError | unknown) {
    let message = "UNKNOWN";
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/invalid-email":
          message = "Invalid Email.";
          break;
        case "auth/weak-password":
          message = "Weak Password.";
          break;
        case "auth/email-already-in-use":
          message = "Email already in use.";
          break;
        default:
          message = "Unknown Error.";
          console.log(error.code);
      }
    }
    return { status: false, message };
  }
}

export async function signinEmail(
  email: string,
  password: string,
): Promise<FormReturnProps> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log(user);
    return { status: true };
  } catch (error: FirebaseError | unknown) {
    let message = "UNKNOWN";
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/invalid-email":
          message = "Invalid Email.";
          break;
        case "auth/invalid-credential":
          message = "Invalid Credential.";
          break;
        case "auth/too-many-requests":
          message = "Too many requests.";
          break;
        default:
          message = "Unknown Error.";
          console.log(error.code);
      }
    }
    return { status: false, message };
  }
}

export async function signout() {
  signOut(auth).catch((error) => {
    console.log(error);
  });
}

export async function signinGoogle(): Promise<FormReturnProps> {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential ? credential.accessToken : null;
    console.log(token);
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    return { status: true };
  } catch (error: FirebaseError | unknown) {
    let message = "UNKNOWN";
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData?.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
      message = error.message;
    }
    //auth/operation-not-allowed
    return { status: false, message };
  }
}
