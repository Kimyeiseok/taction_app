import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// const firebaseConfig = {
//   apiKey: "AIzaSyBPFvNnB9uhty_GDvHShAmGRRnGUlijLLE",
//   authDomain: "taction-authbywallet.firebaseapp.com",
//   projectId: "taction-authbywallet",
//   storageBucket: "taction-authbywallet.appspot.com",
//   messagingSenderId: "266310890685",
//   appId: "1:266310890685:web:db275ca6cc6d746f58b3d4"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAdpLNR5eX3xZuDLr3pTgJCuxAiQBwceLI",
    authDomain: "taction-app.firebaseapp.com",
    projectId: "taction-app",
    storageBucket: "taction-app.appspot.com",
    messagingSenderId: "987023424300",
    appId: "1:987023424300:web:7ac90d45f359919fed4a89"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth();
const currentUser = auth.currentUser
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export {
	db,
	auth,
	currentUser,
	googleAuthProvider,
	facebookAuthProvider,
	twitterAuthProvider,
	githubAuthProvider,
};
