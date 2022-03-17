import { useState, useEffect, createContext } from "react";

import { auth, firebase } from "../config/Firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // con google
  const proveedorGoogle = new firebase.auth.GoogleAuthProvider();
  const signInGoogle = async () => {
    //para loguearte abre una ventanita. signInWithPopup(proveedor)
    const rptaGoogle = await auth.signInWithPopup(proveedorGoogle);
  };

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      // console.log(currentUser);
      // setLoading(false)
    });

    return unsuscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    signInGoogle,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
