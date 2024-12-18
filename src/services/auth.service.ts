import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';
import { User } from '../types';

export class AuthService {
  static async signUp(email: string, password: string, username: string): Promise<User> {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user: User = {
      id: userCredential.user.uid,
      email,
      username
    };
    
    // Store additional user data in Firestore
    await firebase.firestore()
      .collection('users')
      .doc(user.id)
      .set(user);
    
    return user;
  }

  static async signIn(email: string, password: string): Promise<User> {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const userDoc = await firebase.firestore()
      .collection('users')
      .doc(userCredential.user.uid)
      .get();
    
    return userDoc.data() as User;
  }

  static async signOut(): Promise<void> {
    await firebase.auth().signOut();
  }
}