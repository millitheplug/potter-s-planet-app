import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-storage';
import type { User } from '../types';

export class ProfileService {
  static async updateProfile(userId: string, updates: Partial<User>): Promise<void> {
    await firebase.firestore()
      .collection('users')
      .doc(userId)
      .update(updates);
  }

  static async uploadAvatar(userId: string, imageBase64: string): Promise<string> {
    const ref = firebase.storage().ref(`avatars/${userId}.jpg`);
    await ref.putString(imageBase64, 'base64');
    return await ref.getDownloadURL();
  }

  static async getAchievements(userId: string): Promise<string[]> {
    const doc = await firebase.firestore()
      .collection('achievements')
      .doc(userId)
      .get();
    return doc.data()?.achievements || [];
  }

  static async addAchievement(userId: string, achievement: string): Promise<void> {
    await firebase.firestore()
      .collection('achievements')
      .doc(userId)
      .set({
        achievements: firebase.firestore.FieldValue.arrayUnion(achievement)
      }, { merge: true });
  }
}