import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUbiBN6WtvB7NPazay297XQ8Sj-L_dkFc",
  authDomain: "twerk-out.firebaseapp.com",
  projectId: "twerk-out",
  storageBucket: "twerk-out.appspot.com",
  messagingSenderId: "314384805440",
  appId: "1:314384805440:web:131de137ab61e7d283b9a5",
  measurementId: "G-RTDXPB4TVK",
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

//Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getFirestore(app);

//firebase deploy --only hosting:twerkout
