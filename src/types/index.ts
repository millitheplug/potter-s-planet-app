// Extend the existing types.ts file
export interface StudyGroup {
  id: string;
  name: string;
  creatorId: string;
  members: string[];
  createdAt: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Update User interface
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  achievements?: string[];
  studyGroups?: string[];
  lastActive?: number;
  points?: number;
}