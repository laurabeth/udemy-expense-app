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

//have changes to data register to console

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

// db.ref("expenses")
//   .push({
//     amount: 3500,
//     createdOn: moment()
//       .subtract(14, "days")
//       .format("ddd, MMM Do, YYYY"),
//     description: "Water bill",
//     note: "sewage included",
//   })
//   .then(() => {
//     console.log("push succeded");
//   })
//   .catch((e) => {
//     console.log("push failed", e);
//   });

// db.ref("expenses")
//   .push({
//     amount: 6000,
//     createdOn: moment()
//       .subtract(2, "days")
//       .format("ddd, MMM Do, YYYY"),
//     description: "Gas bill",
//     note: "wtf we have gas?",
//   })
//   .then(() => {
//     console.log("push succeded");
//   })
//   .catch((e) => {
//     console.log("push failed", e);
//   });

// db.ref("expenses")
//   .push({
//     amount: 169500,
//     createdOn: moment()
//       .add(23, "days")
//       .format("ddd, MMM Do, YYYY"),
//     description: "Mortgage payment",
//     note: "omg house!",
//   })
//   .then(() => {
//     console.log("push succeded");
//   })
//   .catch((e) => {
//     console.log("push failed", e);
//   });
