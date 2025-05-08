/*
 - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
 - Copyright (C) 2025 NishantkSingh0.github.io
 - Licensed under the GNU GPL v3.0 - see LICENSE file for details.
 */

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCqeHJXGSaJw_I1wJ99ui6upmcfm60mwJY",
   authDomain: "resume-builder-suggestions.firebaseapp.com",
   databaseURL: "https://resume-builder-suggestions-default-rtdb.firebaseio.com",
   projectId: "resume-builder-suggestions",
   storageBucket: "resume-builder-suggestions.firebasestorage.app",
   messagingSenderId: "474932232444",
   appId: "1:474932232444:web:e1414a0440a7a4fe9a1779",
   measurementId: "G-4G7CNFF463"
 };

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 
 export { db, doc, getDoc, updateDoc, setDoc };