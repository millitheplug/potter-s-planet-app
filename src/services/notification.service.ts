import { LocalNotifications } from '@nativescript/local-notifications';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-messaging';

export class NotificationService {
  static async scheduleDailyNotification() {
    await LocalNotifications.schedule([{
      id: 1,
      title: 'Daily Bible Time!',
      body: "It's time for your daily verse and devotional!",
      scheduled: true,
      interval: 'day',
      hour: 6,
      minute: 0
    }]);
  }

  static async setupPushNotifications() {
    const messaging = firebase.messaging();
    const token = await messaging.getToken();
    
    // Store token in Firestore for the current user
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      await firebase.firestore()
        .collection('users')
        .doc(currentUser.uid)
        .update({
          pushToken: token
        });
    }
  }
}