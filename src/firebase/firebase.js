import * as firebase from "firebase";
// import moment from "moment";

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

const db = firebase.database();

db.ref("expenses")
  .on("value", (snapshot) => {
    const expenses = [];
    snapshot.forEach((child) => {
      expenses.push({
        id: child.key,
        ...child.val(),
      });
    });

    console.log(expenses);
  })
  .catch((e) => {
    console.log("an error occurred", e);
  });

//child_removed
db.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child_changed
db.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
