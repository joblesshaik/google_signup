import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration

    const firebaseConfig = {
        apiKey: "AIzaSyDnxRxXBzKJzgRXBiPB-MLTDoFu0hvNwTU",
        authDomain: "clone-3d099.firebaseapp.com",
        projectId: "clone-3d099",
        storageBucket: "clone-3d099.appspot.com",
        messagingSenderId: "455883624078",
        appId: "1:455883624078:web:e99be7d79ba7828dc383df"
      };
      


const app = initializeApp(firebaseConfig);
export const Auntentication = getAuth(app);