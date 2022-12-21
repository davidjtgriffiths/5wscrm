import { defineStore } from 'pinia'
import { collection, doc, setDoc, getDocs, query } from "firebase/firestore"
import { auth } from '../js/firebase.js'
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAuthStore = defineStore('auth', {
  // other options...
    state: () => {
        return {
            user: {}

        }
    },
    actions: {
     registerUser(credentials) {
        console.log('reg ', credentials)
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                // ..
            })
        },
        logoutUser() {
            signOut(auth).then(() => {
                // Sign-out successful.
                console.log('out')
              }).catch((error) => {
                // An error happened.
              });
        },
        signInUser(credentials) {
            signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('signed in ', user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        },
        init() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/firebase.User
                  this.user = user
                  const uid = user.uid;
                  console.log('user is ', user)
                  this.router.push('/home')
                  // ...
                } else {
                  // User is signed out
                  this.user = {}
                  this.router.replace('/')
                }
              });
        }

    }



})