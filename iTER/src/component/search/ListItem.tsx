import { styled } from '../../../stitches.config';
import { ButtonEmpty } from '../common/Button';
import { Caption2 } from '../Font';
import Star from '../../assets/icon/star/Star.svg?react';
import { useNavigate } from 'react-router-dom';
import ProfileSimple from '../user/ProfileSimple';
import { CategoryReviewProps } from '../../types/Review';
import { dislikeReview, likeReview, scrapReview, deleteScrap } from '../../apis/Review';

const ListItem = ({ item }: { item: CategoryReviewProps['reviews'][0] }) => {
  const navigate = useNavigate();

  const shortReviewList = item.shortReview.split(',');

  const spec = item.reviewSpecData.map((review: string, index: number) => {
    return index == item.reviewSpecData.length - 1 ? review : review + ' / ';
  });

  return (
    <Container>
      <Box
        onClick={() => {
          navigate(`/search/review/${item.id}`);
        }}
      >
        <Image>
          <img src={item.reviewImage} alt="" width={120} height={120} />
        </Image>

        <Content>
          <div>
            <Title>{item.productName}</Title>
            <Caption2>
              {spec}
              {spec.length > 0 && <div style={{ height: 8 }} />}
              <Reviews>
                <Stars>
                  <Star fill={'#8787F4'} width={15} height={15} /> {item.starPoint}
                </Stars>
                {shortReviewList.map((item: string, index: number) => {
                  return index == shortReviewList.length - 1 ? `"${item}"` : `"${item}"` + ', ';
                })}
              </Reviews>
            </Caption2>
          </div>

          <ProfileSimple
            nickName={item.userInfo.nickName}
            profileImage={item.userInfo.profileImage}
            job={item.userInfo.job}
          />
        </Content>
      </Box>
      <Buttons>
        <ButtonEmpty
          onClick={() => {
            if (item.like) {
              dislikeReview(item.id);
              window.location.reload();
            } else {
              likeReview(item.id);
              window.location.reload();
            }
          }}
          active={item.like}
          type="like"
        >
          리뷰 좋아요 ({item.likedCount})
        </ButtonEmpty>
        <ButtonEmpty
          onClick={() => {
            if (item.scrap) {
              deleteScrap(item.id);
              window.location.reload();
            } else {
              scrapReview(item.id);
              window.location.reload();
            }
          }}
          active={item.scrap}
          type="scrap"
        >
          리뷰 스크랩 ({item.scrapedCount})
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
  width: '190px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
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
