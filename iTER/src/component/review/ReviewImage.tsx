import { useState } from 'react';
import { Swiper as Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { styled } from '../../../stitches.config';

const ReviewImage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };
  return (
    <Container>
      <ImageBox>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          className="my-swiper-class"
        >
          {dummy.map((image) => (
            <SwiperSlide className="my-swiper-slide-class">
              <Image key={image.alt} src={image.src} alt={image.alt} width={390} height={390} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageBox>
      <Indicators>
        {dummy.map((_, index) => (
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
  height: '100%',
  position: 'relative',
});

const ImageBox = styled('div', {
  display: 'flex',
  width: '100%',
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
  zIndex: '1',
});

const Indicator = styled('div', {
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: '#EAEEF2',
  variants: {
    active: {
      true: {
        backgroundColor: '#57606A',
      },
    },
  },
});

const dummy = [
  {
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
    alt: 'Banner 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
    alt: 'Banner 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=1770&q=80',
    alt: 'Banner 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80',
    alt: 'Banner 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Banner 5',
  },
];
