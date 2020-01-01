// Your web app's Firebase configuration

import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: 'portofole-template.firebaseapp.com',
  databaseURL: 'https://portofole-template.firebaseio.com',
  projectId: 'portofole-template',
  storageBucket: 'portofole-template.appspot.com',
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
