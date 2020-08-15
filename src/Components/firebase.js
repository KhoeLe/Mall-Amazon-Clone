import firebase from "firebase"

// eslint-disable-next-line
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDTFxMLwonU4fjNSqO3bL2kM7A5yZ74i0",
  authDomain: "louisle-mall.firebaseapp.com",
  databaseURL: "https://louisle-mall.firebaseio.com",
  projectId: "louisle-mall",
  storageBucket: "louisle-mall.appspot.com",
  messagingSenderId: "389515686786",
  appId: "1:389515686786:web:024815bb4aa8c79873159b",
  measurementId: "G-9J489N7FP5"
});



const auth = firebase.auth();

export { auth };

// config global firebse