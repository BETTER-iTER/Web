import { NewsProps } from './News';
import { ReviewPreviewProps, CategoryProps } from './Review';

export interface HomeProps {
  news: NewsProps[];
  categories: CategoryProps[];
  categoryReviews: { [category: string]: ReviewPreviewProps[] };
  followingReviews: ReviewPreviewProps[];
  mostScrapedAndLikedReviews: ReviewPreviewProps[];
}
