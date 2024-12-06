import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "./firebase";

export const createUserAccount = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signuserAccount = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
  return auth.signOut();
};
