// // import firebase from "firebase";
// import firebase from 'firebase/app';
// import 'firebase/auth';    
// // import 'firebase/database'; // If using Firebase database
// // import 'firebase/storage';  // If using Firebase storage
// import 'firebase/firebase-firestore'

// // eslint-disable-next-line
// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBDTFxMLwonU4fjNSqO3bL2kM7A5yZ74i0",
//   authDomain: "louisle-mall.firebaseapp.com",
//   databaseURL: "https://louisle-mall.firebaseio.com",
//   projectId: "louisle-mall",
//   storageBucket: "louisle-mall.appspot.com",
//   messagingSenderId: "389515686786",
//   appId: "1:389515686786:web:024815bb4aa8c79873159b",
//   measurementId: "G-9J489N7FP5"
// });


// const db = 

// const auth = firebase.auth();

// export { db, auth };

// // config global firebse

// import firebase from "firebase";
// import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/auth';    
import 'firebase/database'; // If using Firebase database
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBDTFxMLwonU4fjNSqO3bL2kM7A5yZ74i0",
  authDomain: "louisle-mall.firebaseapp.com",
  databaseURL: "https://louisle-mall.firebaseio.com",
  projectId: "louisle-mall",
  storageBucket: "louisle-mall.appspot.com",
  messagingSenderId: "389515686786",
  appId: "1:389515686786:web:024815bb4aa8c79873159b",
  measurementId: "G-9J489N7FP5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };