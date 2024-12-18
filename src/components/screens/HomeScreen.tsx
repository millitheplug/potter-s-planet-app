import * as React from "react";
import { useState, useEffect } from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { ContentService } from "../../services/content.service";
import { NotificationService } from "../../services/notification.service";
import { DailyContent } from "../ui/DailyContent";
import { NavigationMenu } from "../ui/NavigationMenu";
import type { MemoryVerse, Devotional } from "../../types";

interface HomeScreenProps {
  navigation: FrameNavigationProp<any, "Home">;
  route: RouteProp<any, "Home">;
}

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [verse, setVerse] = useState<MemoryVerse | null>(null);
  const [devotional, setDevotional] = useState<Devotional | null>(null);

  useEffect(() => {
    setupContent();
    NotificationService.scheduleDailyNotification();
  }, []);

  const setupContent = async () => {
    try {
      const [verseData, devotionalData] = await Promise.all([
        ContentService.getDailyVerse(),
        ContentService.getDailyDevotional()
      ]);
      setVerse(verseData);
      setDevotional(devotionalData);
    } catch (error) {
      console.error("Error loading content:", error);
    }
  };

  return (
    <gridLayout rows="*, auto">
      <scrollView row="0" className="bg-blue-50">
        <stackLayout className="p-4">
          <DailyContent verse={verse} devotional={devotional} />
        </stackLayout>
      </scrollView>
      
      <NavigationMenu row="1" navigation={navigation} />
    </gridLayout>
  );
}