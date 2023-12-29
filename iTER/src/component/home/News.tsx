import React, { useState, useEffect } from 'react';
import { styled } from '../../../stitches.config';
import { NewsProps } from '../../types/News';

const News: React.FC<{ newsData: NewsProps[] }> = (props) => {
  const { newsData } = props;
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Slider style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}>
        {newsData.map((banner, index) => (
          <React.Fragment key={index}>
            <Banner>
              <img src={banner.imageUrl} alt={banner.title} width={340} height={180} />
            </Banner>
            <TextBox>
              <div>{banner.title}</div>
              <div>{banner.content}</div>
            </TextBox>
          </React.Fragment>
        ))}
      </Slider>
      <Indicators>
        {newsData.map((_, index) => (
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

const TextBox = styled('div', {
  position: 'absolute',
  bottom: '22px',
  left: '21px',
  zIndex: '1',
  bodyText: 1,
  color: '$White',
});
