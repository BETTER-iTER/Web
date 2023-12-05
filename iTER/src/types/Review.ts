export interface ReviewPreviewProps {
  id: number;
  imageUrl?: string;
  productName: string;
  nickname: string;
  profileImageUrl?: string;
  expert?: boolean;
}

export interface CategoryProps {
  name: string;
  imageUrl: string;
}

export interface CategoryReviewProps {
  hasNext: boolean;
  reviews: {
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
  }[];
}
