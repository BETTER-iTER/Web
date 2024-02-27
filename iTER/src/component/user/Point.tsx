import Heart from '../../assets/icon/MyPointHeart.svg';
import Scrap from '../../assets/icon/ScrapMyPoint.svg';
import { styled } from '../../../stitches.config';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PointLay = () => {
  const [pointData, setPointData] = useState(null);

  //마이포인트 조회
  const point = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.get(`https://dev.betteritem.store/mypage/point`, {
        headers: {
          Authorization: `${accessToken}`,
        },
      });

      console.log(response.data);
      setPointData(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    point();
  }, []);

  const { totalLikeCount, totalPoint, totalReviewCount, totalScrapCount } = pointData ?? {};

  const score = [
    { title: '현재 포인트', score: totalPoint },
    { title: '작성한 리뷰', score: totalReviewCount },
    { title: 'IT 퀴즈', score: '21개' },
    {
      title: '리뷰 반응',
      score: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Heart} alt="heart" width={22} height={22} style={{ marginRight: '3px' }} />{' '}
          {totalLikeCount}
          <img src={Scrap} alt="scrap" width={22} height={22} style={{ marginLeft: '10px' }} />{' '}
          {totalScrapCount}
        </div>
      ),
    },
  ];
  return (
    <>
      {score.map((item, index) => (
        <Item key={index}>
          <Container>
            <TitleContainer isCurrentPoint={item.title === '현재 포인트'}>
              {item.title}
            </TitleContainer>
            <ScoreContainer isCurrentScore={item.score === '234점'}>{item.score}</ScoreContainer>
          </Container>
        </Item>
      ))}
    </>
  );
};

export default PointLay;

const Container = styled('div', {
  width: '300px',
});

const Item = styled('div', {
  bodyText: 1,
  display: 'flex',
  marginBottom: '8px',
});

const TitleContainer = styled('div', {
  float: 'left',
  variants: {
    isCurrentPoint: {
      true: {
        color: '#24292F',
      },
      false: {
        color: '#8E9198',
      },
    },
  },
});

const ScoreContainer = styled('div', {
  float: 'right',
  variants: {
    isCurrentScore: {
      true: {
        color: '#24292F',
      },
      false: {
        color: '#8E9198',
      },
    },
  },
});
