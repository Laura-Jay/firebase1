
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration.  
//
// Usually, you need to fastidiously guard API keys (for example, by 
// setting the keys as environment variables); 
// however, API keys for Firebase services are ok to include in code or checked-in config files.
const firebaseConfig = {
    apiKey: "AIzaSyA1p7Xy9YFS01dvDWOv7ZvheP_2-KCJzNo",
    authDomain: "fir-test-ac1f4.firebaseapp.com",
    projectId: "fir-test-ac1f4",
    storageBucket: "fir-test-ac1f4.appspot.com",
    messagingSenderId: "977510315395",
    appId: "1:977510315395:web:564e0efd729119564ff2b6",
    measurementId: "G-N1V091CF8Q"
  };

// Initialize Firebase as a whole
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Other auth providers include github, twitter, apple.
//These must be enabled in your firebase console.
export const googleAuthProvider = new GoogleAuthProvider();
