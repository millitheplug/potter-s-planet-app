import { useEffect } from 'react';
import { NotificationService } from '../services/notification.service';

export function useNotifications() {
  useEffect(() => {
    const setupNotifications = async () => {
      await NotificationService.scheduleDailyNotification();
      await NotificationService.setupPushNotifications();
    };

    setupNotifications();
  }, []);
}