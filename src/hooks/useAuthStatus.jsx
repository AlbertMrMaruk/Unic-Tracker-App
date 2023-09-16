import { useEffect, useState } from "react";
import {
  getAuth,
  initializeAuth,
  onAuthStateChanged,
  indexedDBLocalPersistence,
} from "firebase/auth";
import { Capacitor } from "@capacitor/core";
import app from "../firebase.config";

function whichAuth() {
  let auth;
  if (Capacitor.isNativePlatform()) {
    auth = initializeAuth(app, {
      persistence: indexedDBLocalPersistence,
    });
  } else {
    auth = getAuth();
  }
  return auth;
}

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = whichAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) setLoggedIn(true);
      setCheckingStatus(false);
    });
  });
  return { loggedIn, checkingStatus };
};

export const auth = whichAuth();
