import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCblEKgVL1jOAJoA-QmTn-g2vXsAZASlnM',
  authDomain: 'wesbos-catch-of-the-day-e2603.firebaseapp.com',
  databaseURL: 'https://wesbos-catch-of-the-day-e2603.firebaseio.com',
  projectId: 'wesbos-catch-of-the-day-e2603',
  storageBucket: 'wesbos-catch-of-the-day-e2603.appspot.com',
  messagingSenderId: '442712974684',
  appId: '1:442712974684:web:67ca5a26728aa00e0f8d99'
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

export default base;
