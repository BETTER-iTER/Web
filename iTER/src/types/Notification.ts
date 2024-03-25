export interface NotificationProps {
  id?: number;
  type: 'follow' | 'like' | 'comment' | 'notice';
  path: string;
  content?: string;
  follow?: boolean;
  user?: {
    id?: number;
    nickname: string;
    profileImage: string;
  };
  readAt: string | null;
  createdAt: string;
}
