import React, { useState, useEffect } from 'react';
import { styled } from '../../../stitches.config';
import { NewsProps } from '../../types/News';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const News: React.FC<{ newsData: NewsProps[] }> = (props) => {
  const { newsData } = props;
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);

  useEffect(() => {
    if (!newsData || newsData.length <= 1) return;

    const interval = setInterval(() => {
      if (swiperInstance) {
        const newIndex = (swiperInstance.activeIndex + 1) % newsData.length;
        swiperInstance.slideTo(newIndex);
        setCurrentBannerIndex(newIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [newsData, swiperInstance]);

  return (
    <Container>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper: React.SetStateAction<null>) => {
          setSwiperInstance(swiper);
        }}
        onSlideChange={(swiper: { activeIndex: React.SetStateAction<number> }) => {
          setCurrentBannerIndex(swiper.activeIndex);
        }}
      >
        {newsData?.map((banner, index) => (
          <SwiperSlide key={index}>
            <Banner
              onClick={() => {
                window.open(banner.newsUrl);
              }}
            >
              <TextBox>
                <div>{banner.title}</div>
                <div>{banner.content}</div>
              </TextBox>
              <img src={banner.imageUrl} alt={banner.title} width={340} height={180} />
            </Banner>
          </SwiperSlide>
        ))}
      </Swiper>
      <Indicators>
        {newsData?.map((_, index) => (
          <Indicator key={index} active={index === currentBannerIndex} />
        ))}
      </Indicators>
    </Container>
  );
};

export default News;

const Container = styled('div', {
  width: '340px',
  height: '180px',
  backgroundColor: '$Gray10',
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'relative',
  marginTop: '5px',
});

const Banner = styled('div', {
  width: '340px',
  height: '180px',
  '> img': {
    opacity: '0.5',
  },
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
  backgroundColor: '$Bar',
  variants: {
    active: {
      true: {
        backgroundColor: '#57606A',
      },
    },
  },
});

const TextBox = styled('div', {
  position: 'absolute',
  bottom: '22px',
  zIndex: '1',
  bodyText: 1,
  color: '$White',
  width: '320px',
  padding: '0 10px',
});
