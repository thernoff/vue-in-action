//import { initializeApp } from 'firebase';
import firebase from 'firebase/app'
//import 'firebase/firestore'; // используется для Cloud Firestore
import 'firebase/database'; // используется для Real Time Database

export const db = firebase.initializeApp({
  apiKey: "AIzaSyCkpUprx5AzIpqwcbMmG9qpLNavTGNs_5g",
  authDomain: "petstore-1f5fe.firebaseapp.com",
  databaseURL: "https://petstore-1f5fe.firebaseio.com",
  projectId: "petstore-1f5fe",
  storageBucket: "petstore-1f5fe.appspot.com",
  messagingSenderId: "96217096591",
  appId: "1:96217096591:web:7a282ae7aa28984ec9ebfa"
}).database();

// экспорт списка товаров (его будем импортировать в компоненте Main.vue)
export const productsRef = db.ref('Products');