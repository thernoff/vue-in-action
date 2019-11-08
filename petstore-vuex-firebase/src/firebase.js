import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyCkpUprx5AzIpqwcbMmG9qpLNavTGNs_5g",
  authDomain: "petstore-1f5fe.firebaseapp.com",
  databaseURL: "https://petstore-1f5fe.firebaseio.com",
  projectId: "petstore-1f5fe",
  storageBucket: "petstore-1f5fe.appspot.com",
  messagingSenderId: "96217096591",
  appId: "1:96217096591:web:7a282ae7aa28984ec9ebfa"
});

export const db = app.database(); // экспорт базы данных в стиле ES6

export const productsRef = db.ref('products'); // экспорт списка товаров