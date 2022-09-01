import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDGKuhumJJ9rBKPI-XMtzPUmRYB7pM4ekA",
    authDomain: "movie-app-recap.firebaseapp.com",
    projectId: "movie-app-recap",
    storageBucket: "movie-app-recap.appspot.com",
    messagingSenderId: "684954998287",
    appId: "1:684954998287:web:c661f29182f478ad26b57a"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

