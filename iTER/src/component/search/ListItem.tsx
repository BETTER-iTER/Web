import { styled } from '../../../stitches.config';
import { ButtonEmpty } from '../common/Button';
import { Caption2 } from '../Font';
import Star from '../../assets/icon/star/Star.svg?react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProfileSimple from '../user/ProfileSimple';
import { CategoryReviewProps } from '../../types/Review';

const ListItem: React.FC<CategoryReviewProps['reviews'][0]> = ({
  id,
  productName,
  starPoint,
  shortReview,
  userInfo,
  reviewSpecData,
  scrapedCount,
  likedCount,
  reviewImage,
  keyword, // 검색 결과로 들어온 경우에만 존재
}) => {
  const navigate = useNavigate();
  const [active, setActive] = useState<boolean>(false);
  const shortReviewList = shortReview.split(',');

  const spec = reviewSpecData.map((item: string, index: number) => {
    return index == reviewSpecData.length - 1 ? item : item + ' / ';
  });
  return (
    <Container>
      <Box
        onClick={() => {
          navigate(`/search/review/${id}`, { state: { keyword } });
        }}
      >
        <Image>
          <img src={reviewImage} alt="" width={120} height={120} />
        </Image>

        <Content>
          <div>
            <Title>{productName}</Title>
            <Caption2>
              {spec}
              {spec.length > 0 && <div style={{ height: 8 }} />}
              <Reviews>
                <Stars>
                  <Star fill={'#8787F4'} width={15} height={15} /> {starPoint}
                </Stars>
                {shortReviewList.map((item: string, index: number) => {
                  return index == shortReviewList.length - 1 ? `"${item}"` : `"${item}"` + ', ';
                })}
              </Reviews>
            </Caption2>
          </div>

          <ProfileSimple
            nickName={userInfo.nickName}
            profileImage={userInfo.profileImage}
            job={userInfo.job}
          />
        </Content>
      </Box>
      <Buttons>
        <ButtonEmpty
          onClick={() => {
            setActive(!active);
          }}
          active={active}
          type="like"
        >
          리뷰 좋아요 ({likedCount})
        </ButtonEmpty>
        <ButtonEmpty
          onClick={() => {
            setActive(!active);
          }}
          active={active}
          type="scrap"
        >
          리뷰 스크랩 ({scrapedCount})
        </ButtonEmpty>
      </Buttons>
    </Container>
  );
};

export default ListItem;

const Container = styled('div', {
  bodyText: 1,
  margin: '10px 0',
  color: '#57606A',
  marginBottom: '20px',
});

const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '110px',
});

const Image = styled('div', {
  width: '120px',
  height: '120px',
  borderRadius: '10px',
  overflow: 'hidden',
});

const Title = styled('div', {
  bodyText: 1,
  color: '$TitleBlack',
  marginBottom: '1px',
});

const Reviews = styled('div', {
  display: 'flex',
  width: '190px',
  justifyContent: 'space-between',
  margin: '0 0 21px 0',
});

const Stars = styled('div', {
  display: 'flex',
  gap: '4px',
});

const Buttons = styled('div', {
  display: 'flex',
  gap: '12px',
  justifyContent: 'center',
  pointerEvents: 'auto',
});
