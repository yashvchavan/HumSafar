
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  import { getDatabase , set , ref , get , child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
  // import {getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-getAuth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDDsGh3F9ClTQBvyWUTde-7eUq28ugbVK0",
    authDomain: "humsafar-web-f707e.firebaseapp.com",
    databaseURL: "https://humsafar-web-f707e-default-rtdb.firebaseio.com",
    projectId: "humsafar-web-f707e",
    storageBucket: "humsafar-web-f707e.appspot.com",
    messagingSenderId: "7896450466",
    appId: "1:7896450466:web:c9e55399aeeeb26cbd5efb",
    measurementId: "G-T4XQ9F4SPB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();
  // const auth = getAuth(app);
  // auth.languageCode = 'en'
  // const provider = new GoogleAuthProvider();

  export async function writeUserData(username, newUser) {
    await set(ref(db, 'users/' + username), newUser);
  };

export async function readdata(enteredUser) {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `users/${enteredUser.username}`));

    if (snapshot.exists()) {
        return await snapshot.val();
    } else {
        return '';
    }
};

export async function writeUser(username, newUser) {
  await set(ref(db, `users/${username}/` + newUser.post), newUser);
};

// export async function readdata(enteredUser) {
//   const dbRef = ref(getDatabase());
//   const snapshot = await get(child(dbRef, `users/${enteredUser.post}`));

//   if (snapshot.exists()) {
//       return await snapshot.val();
//   } else {
//       return '';
//   }
// };


