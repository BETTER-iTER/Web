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
  productName: string;
  reviewSpecData: string[];
  starPoint: number;
  shortReview: string;
  userInfo: {
    nickname: string;
    job: string;
    profileImage?: string;
  };
  scrapedCount: number;
  likedCount: number;
}

export interface CategoryProps {
  name: string;
  imageUrl: string;
}

export interface CategoryReviewProps {
  hasNext: boolean;
  reviews: ReviewProps[];
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
      imageUrl: string;
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
  };
  writerInfo: UserViewProps;
  relatedReviews: ReviewPreviewProps[];
}
