import { defineStore } from 'pinia'
import { collection, doc, setDoc, getDocs, query } from "firebase/firestore"
import { auth } from '../js/firebase.js'
import { createUserWithEmailAndPassword } from "firebase/auth"

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAuthStore = defineStore('auth', {
  // other options...
    state: () => {
        return {
            
        }
    },
    actions: {
     registerUser(credentials) {

     }
    }



})