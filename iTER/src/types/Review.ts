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
