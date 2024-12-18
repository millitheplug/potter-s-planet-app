import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-firestore';
import { ChatMessage } from '../types';

export class ChatService {
  static async sendMessage(groupId: string, message: ChatMessage): Promise<void> {
    await firebase.firestore()
      .collection('chatGroups')
      .doc(groupId)
      .collection('messages')
      .add(message);
  }

  static subscribeToMessages(groupId: string, callback: (messages: ChatMessage[]) => void) {
    return firebase.firestore()
      .collection('chatGroups')
      .doc(groupId)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        const messages = snapshot.docs.map(doc => doc.data() as ChatMessage);
        callback(messages);
      });
  }

  static async createGroup(name: string, members: string[]): Promise<string> {
    const groupRef = await firebase.firestore()
      .collection('chatGroups')
      .add({
        name,
        members,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    
    return groupRef.id;
  }
}