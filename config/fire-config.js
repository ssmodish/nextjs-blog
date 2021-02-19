// config/fire-config.js
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyCWcpgzxBHDF0G7W9Jy6dblqXs06kIMUok',
  authDomain: 'next-firebase-d9c49.firebaseapp.com',
  projectId: 'next-firebase-d9c49',
  storageBucket: 'next-firebase-d9c49.appspot.com',
  messagingSenderId: '99516067637',
  appId: '1:99516067637:web:a49c35f2c092d24f37667c',
}
try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const fire = firebase
export default fire
