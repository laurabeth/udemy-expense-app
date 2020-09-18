import { firebase, googleAuthProvider } from "../firebase/firebase";

export const authenticateAsync = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const deauthenticateAsync = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
