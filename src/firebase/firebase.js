import * as firebase from 'firebase';

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default }





// database.ref('expenses').once('value')
//   .then(snapshot => {
//     console.log(snapshot)
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)

//   })
//   .catch(e => {
//     console.log(e.message)
//   })








// database.ref('expenses').push({
//   description:'Rent',
//   note:'House rent',
//   amount:109500,
//   createdAt:98473947294
// })


// database.ref('expenses').push({
//   description: 'Book',
//   note: 'This is a book',
//   amount: 1000,
//   createdAt: 96473947294
// })

// database.ref('expenses').push({
//   description: 'bike',
//   note: 'This is a bike',
//   amount: 20000,
//   createdAt: 97473947294
// })





