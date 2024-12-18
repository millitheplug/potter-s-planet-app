import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-firestore';
import { MemoryVerse, Devotional, ChurchEvent } from '../types';

export class ContentService {
  static async getDailyVerse(): Promise<MemoryVerse> {
    const today = new Date().toISOString().split('T')[0];
    const verseDoc = await firebase.firestore()
      .collection('verses')
      .where('date', '==', today)
      .limit(1)
      .get();
    
    return verseDoc.docs[0].data() as MemoryVerse;
  }

  static async getDailyDevotional(): Promise<Devotional> {
    const today = new Date().toISOString().split('T')[0];
    const devotionalDoc = await firebase.firestore()
      .collection('devotionals')
      .where('date', '==', today)
      .limit(1)
      .get();
    
    return devotionalDoc.docs[0].data() as Devotional;
  }

  static async getChurchEvents(): Promise<ChurchEvent[]> {
    const eventsSnapshot = await firebase.firestore()
      .collection('events')
      .orderBy('date', 'asc')
      .get();
    
    return eventsSnapshot.docs.map(doc => doc.data() as ChurchEvent);
  }
}