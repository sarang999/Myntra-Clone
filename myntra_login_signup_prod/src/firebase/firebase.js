import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
  authDomain: "myntraclone-32347.firebaseapp.com",
  projectId: "myntraclone-32347",
  storageBucket: "myntraclone-32347.appspot.com",
  messagingSenderId: "1007065249157",
  appId: process.env.REACT_APP_APPLI_ID,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase;



//   apiKey:process.env.REACT_APP_API_KEY,
//   appId: process.env.REACT_APP_APPLI_ID,