import { useState, useEffect } from 'react';
import { styled } from '../../../stitches.config';

const banners = [
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

const News = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Slider style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}>
        {banners.map((banner, index) => (
          <Banner key={index}>
            <img src={banner.src} alt={banner.alt} width={340} height={180} />
          </Banner>
        ))}
      </Slider>
      <Indicators>
        {banners.map((_, index) => (
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

const Slider = styled('div', {
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
});

const Banner = styled('div', {
  width: '340px',
  height: '180px',
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
