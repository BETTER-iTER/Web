import { UserViewProps } from './User';

export interface ReviewPreviewProps {
  id: number;
  imageUrl?: string;
  productName: string;
  nickname?: string;
  writerName?: string;
  profileImageUrl?: string;
  expert?: boolean;
}

export interface ReviewProps {
  id: number;
  reviewImage: string;
  productName: string;
  reviewSpecData: string[];
  starPoint: number;
  shortReview: string;
  userInfo: {
    nickName: string;
    job: string;
    profileImage?: string;
    expert?: boolean;
  };
  scrapedCount: number;
  likedCount: number;
  keyword?: string; // 검색결과로 들어간 경우
}

export interface CategoryProps {
  name: string;
  imageUrl: string;
}

export interface CategoryReviewProps {
  hasNext: boolean;
  reviews: ReviewProps[];
  existed: boolean;
}

export interface ReviewDetailProps {
  reviewDetail: {
    reviewId: number;
    productName: string;
    reviewSpecData: string[];
    starPoint: number;
    goodPoint: string;
    badPoint: string;
    shortReview: string;
    manufacturer: string;
    storeName: number;
    boughtAt: string;
    createdAt: string;
    reviewImages: {
      imgUrl: string;
      orderNum: number;
    }[];
    scrapedCount: number;
    likedCount: number;
    commentCount: number;
    follow: boolean;
    mine: boolean;
    like: boolean;
    scrap: boolean;
    price: number;
    comparedProductName: string;
    shownCount: number;
  };
  writerInfo: UserViewProps;
  relatedReviews: ReviewPreviewProps[];
}

export interface MypageReviewProps {
  reviewCount: number;
  reviewList: {
    reviewId: number;
    title: string;
    thumbnailImage: string | null;
    writerId: number;
    writerJob: string;
    writerNickname: string;
    profileImage: string | null;
    likeCount: number;
    scrapCount: number;
    isLike: boolean;
    isScrap: boolean;
    expert?: boolean;
  }[];
}
