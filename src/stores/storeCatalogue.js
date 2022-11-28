import { defineStore } from 'pinia'
import { collection, doc, setDoc, getDocs } from "firebase/firestore"
import { db } from '../js/firebase.js'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCatalogueStore = defineStore('catalogue', {
  // other options...
    state: () => {
        return {
            catalogue: []
        }
    },
    actions: {
        async getCatalogue() {
            this.catalogue = []
            const querySnapshot = await getDocs(collection(db, "/catalogue/merchandising/option"));
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
              let merchandisingOption = {
                  id: doc.id,
                  field: doc.data()
                }
                this.catalogue.push(merchandisingOption)
            });
            // console.log(this.catalogue);
        }
    }



})