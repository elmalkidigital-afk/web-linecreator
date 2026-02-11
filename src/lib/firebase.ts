import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBc_SBL7sXubcW-DxPJnTiTTP357MHeVsw",
  authDomain: "web-linecreator-5bb3a.firebaseapp.com",
  projectId: "web-linecreator-5bb3a",
  storageBucket: "web-linecreator-5bb3a.firebasestorage.app",
  messagingSenderId: "103255023802",
  appId: "1:103255023802:web:909e396415bdcb1d43a283",
};

export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
