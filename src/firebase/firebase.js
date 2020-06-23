import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyjtPskLsiqlI2Turiwy4kKbyKO42fzZo",
  appId: "1:274356929437:web:2f3aa472e9b3be76fea574",
  authDomain: "udemy-expense-app.firebaseapp.com",
  databaseURL: "https://udemy-expense-app.firebaseio.com",
  messagingSenderId: "274356929437",
  projectId: "udemy-expense-app",
  storageBucket: "udemy-expense-app.appspot.com",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
