export interface UserViewProps {
  id: number;
  nickName: string;
  job: string;
  profileImage: string | undefined;
  expert: boolean;
}

export interface FlatUserProps {
  followerCount: number;
  followingCount: number;
  job: string;
  nickname: string;
  profileImage: string | undefined;
  reviewCount: number;
  scrapCount: number;
  expert?: boolean;
}
