import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { createContext, FC, ReactNode, useContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAURP-RgTuqM387V-JCmz17mzXCKZ76wDs",
  authDomain: "flourish-3ca73.firebaseapp.com",
  projectId: "flourish-3ca73",
  storageBucket: "flourish-3ca73.appspot.com",
  messagingSenderId: "36298722870",
  appId: "1:36298722870:web:949ec038dcb0120bc59297",
  measurementId: "G-Y1VWP0LZ1Y",
};

const app = initializeApp(firebaseConfig);
try {
  const analytics = getAnalytics(app);
} catch (error) {
  console.error(error);
}

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const firebaseContext = createContext({ auth, firestore, storage });
export const FirebaseProvider = (props: { children: ReactNode }) => {
  return (
    <firebaseContext.Provider value={{ auth, firestore, storage }}>
      {props.children}
    </firebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(firebaseContext);
export const useAuth = () => useFirebase().auth;
export const useFirestore = () => useFirebase().firestore;
export const useStorage = () => useFirebase().storage;
