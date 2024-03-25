export interface CommentProps {
  id: number;
  comment: string;
  createdAt: string;
  mine: boolean;
  reviewCommentUserInfo: {
    userId: number;
    nickname: string;
    profileImage: string | null;
    job: string;
  };
}
