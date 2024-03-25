import Star from '../../assets/icon/Star.svg';
import Starfill from '../../assets/icon/Starfill.svg';
import Starhalf from '../../assets/icon/Starhalf.svg';

const StarRatingShow = ({ rating }: { rating: number }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      let starImage = Star;
      if (i === Math.ceil(rating) && rating % 1 === 0.5) {
        starImage = Starhalf;
      } else if (i <= rating - 0.5 + 1) {
        starImage = Starfill;
      }
      stars.push(
        <img
          key={i}
          src={starImage}
          alt={`Star ${i}`}
          style={{
            width: '24px',
            height: '24px',
          }}
        />
      );
    }
    return stars;
  };

  return <>{renderStars()}</>;
};

export default StarRatingShow;
