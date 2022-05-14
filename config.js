import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB3Gi7V6CLnYVd6mY5UmuQKPC_LGw0IhZc",
  authDomain: "team-voting-app-72561.firebaseapp.com",
  projectId: "team-voting-app-72561",
  storageBucket: "team-voting-app-72561.appspot.com",
  messagingSenderId: "142073573394",
  appId: "1:142073573394:web:32b95528dd82d18f93a8cb",
  measurementId: "G-499B3F50P9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();