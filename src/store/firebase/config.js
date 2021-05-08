import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyA37KOaajQootvaV7FzEhLXFtMB8kf9h_Q",
    authDomain: "tohacks2021-d4850.firebaseapp.com",
    projectId: "tohacks2021-d4850",
    storageBucket: "tohacks2021-d4850.appspot.com",
    messagingSenderId: "794786130742",
    appId: "1:794786130742:web:735df3b8fc5117517f6197",
    measurementId: "G-E8PE3TBJ3D",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.firestore();
// firebase.analytics();???

export const fbConfig = firebaseConfig;
export default firebase;
