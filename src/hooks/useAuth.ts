import { useState, useEffect } from 'react';
import { firebase } from '@nativescript/firebase-core';
import type { User } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        firebase.firestore()
          .collection('users')
          .doc(firebaseUser.uid)
          .get()
          .then((doc) => {
            setUser(doc.data() as User);
          });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}