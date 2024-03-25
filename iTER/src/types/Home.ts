import { NewsProps } from './News';
import { ReviewPreviewProps, CategoryProps } from './Review';

interface HomeProps {
  news: NewsProps[];
  categories: CategoryProps[];
  interestedCategoryReviews: Record<string, ReviewPreviewProps[]>;
  followingReviews: ReviewPreviewProps[];
  mostScrapedAndLikedReviews: ReviewPreviewProps[];
}

export default HomeProps;
