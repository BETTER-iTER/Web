import { SetStateAction, useState } from 'react';
import { Swiper as Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { styled } from '../../../stitches.config';
interface imageProps {
  orderNum: number;
  imgUrl: string;
}
const ReviewImage = ({ list }: { list: imageProps[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSlideChange = (swiper: { activeIndex: SetStateAction<number> }) => {
    setCurrentIndex(swiper.activeIndex);
  };
  return (
    <Container>
      <ImageBox>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(swiper: { activeIndex: SetStateAction<number> }) =>
            handleSlideChange(swiper)
          }
          className="my-swiper-class"
        >
          {list.map((image, index) => (
            <SwiperSlide className="my-swiper-slide-class">
              <Image
                key={index}
                src={image.imgUrl}
                alt={image.orderNum.toString()}
                width={390}
                height={390}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageBox>
      <Indicators>
        {list.map((_, index) => (
          <Indicator key={index} active={index === currentIndex} />
        ))}
      </Indicators>
    </Container>
  );
};

export default ReviewImage;

const Container = styled('div', {
  display: 'flex',
  gap: '8px',
  overflow: 'hidden',
  width: '100%',
  height: '390px',
  position: 'relative',
});

const ImageBox = styled('div', {
  display: 'flex',
  width: '390px',
  height: '390px',
});

const Image = styled('img', {
  width: '390px',
  height: '390px',
  objectFit: 'cover',
});

const Indicators = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  position: 'absolute',
  left: '0',
  right: '0',
  bottom: '10px',
  height: '6px',
  zIndex: '1',
});

const Indicator = styled('div', {
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: '$Bar',
  variants: {
    active: {
      true: {
        backgroundColor: '#57606A',
      },
    },
  },
});
