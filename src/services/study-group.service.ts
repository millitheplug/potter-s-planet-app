import { firebase } from '@nativescript/firebase-core';
import type { StudyGroup, User } from '../types';

export class StudyGroupService {
  static async createGroup(name: string, creatorId: string): Promise<string> {
    const groupRef = await firebase.firestore()
      .collection('studyGroups')
      .add({
        name,
        creatorId,
        members: [creatorId],
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    return groupRef.id;
  }

  static async joinGroup(groupId: string, userId: string): Promise<void> {
    await firebase.firestore()
      .collection('studyGroups')
      .doc(groupId)
      .update({
        members: firebase.firestore.FieldValue.arrayUnion(userId)
      });
  }

  static async getGroupMembers(groupId: string): Promise<User[]> {
    const group = await firebase.firestore()
      .collection('studyGroups')
      .doc(groupId)
      .get();
    
    const memberIds = group.data()?.members || [];
    const memberDocs = await Promise.all(
      memberIds.map(id => 
        firebase.firestore()
          .collection('users')
          .doc(id)
          .get()
      )
    );
    
    return memberDocs.map(doc => doc.data() as User);
  }
}