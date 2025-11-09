import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(user);

  //   create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   update user name and photo
  const updateUser = (userData) => {
    return updateProfile(auth.currentUser, userData);
  };
  // forgot password
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  //   log out user
  const logOut = () => {
    return signOut(auth);
  };

  // sign in or sign up with google
  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    loginUser,
    updateUser,
    forgotPassword,
    logOut,
    googleSignIn,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
