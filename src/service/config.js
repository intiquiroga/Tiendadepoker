
import { initializeApp, } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDkILYT2rzMd5RKCotcpi2UZRaHuNAdgWk",
  authDomain: "tiendapoker-e85ee.firebaseapp.com",
  projectId: "tiendapoker-e85ee",
  storageBucket: "tiendapoker-e85ee.appspot.com",
  messagingSenderId: "532786915011",
  appId: "1:532786915011:web:c55e00a471fdb2e905a476",
  measurementId: "G-G3KHKEC0RF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
