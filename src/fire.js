import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBFAl_FvtoB2p0LJKWKtcuIdr6mQ-nL7hU",
  authDomain: "my999store-71651.firebaseapp.com",
  databaseURL: "https://my999store-71651.firebaseio.com",
  projectId: "my999store-71651",
  storageBucket: "",
  messagingSenderId: "692563741692",
  appId: "1:692563741692:web:f3eb396bdd3a1cc2"
};

// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.FacebookAuthProvider();
//const preObject=document.getElementById('object')
const dbRefObject=firebase.database().ref().child('products')
//console.log("before loading value")
//dbRefObject.on('value',snap=>console.log(snap.val()))

export default fire;
export {provider,dbRefObject}