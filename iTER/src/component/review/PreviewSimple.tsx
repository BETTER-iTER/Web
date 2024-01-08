import { useNavigate } from 'react-router-dom';
import { styled } from '../../../stitches.config';
import Heart from '../../assets/icon/Heart.svg?react';
import Scrap from '../../assets/icon/Scrap.svg?react';
import { MypageReviewProps } from '../../types/Review';
import { Caption2 } from '../Font';

const PreviewSimple = ({ list }: { list: MypageReviewProps['reviewList'] }) => {
  return (
    <Container>
      <Items>
        {list.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </Items>
    </Container>
  );
};

export default PreviewSimple;

const Item = ({ data }: { data: MypageReviewProps['reviewList'][0] }) => {
  const navigate = useNavigate();
  return (
    <ItemContainer onClick={() => navigate(`/search/review/${data.reviewId}`)}>
      <ImageBox>
        <Image>
          {data.thumbnailImage && <img src={data.thumbnailImage} alt="" width={168} height={200} />}
        </Image>
      </ImageBox>
      <Title>{data.title}</Title>
      <Caption2>
        <Action>
          <div>
            <Heart width={20} height={20} fill={'#AFB8C1'} />
            {data.likeCount}
          </div>
          <div>
            <Scrap width={20} height={20} fill={'#AFB8C1'} />
            {data.scrapCount}
          </div>
        </Action>
      </Caption2>
    </ItemContainer>
  );
};

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const Items = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '14px',
  marginTop: '16px',
  width: '350px',
});

const ItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
});

const ImageBox = styled('div', {
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

const Image = styled('div', {
  width: '168px',
  height: '200px',
  backgroundColor: '$Gray20',
  borderRadius: '10px',
  overflow: 'hidden',
});

const Title = styled('div', {
  bodyText: 2,
  width: '168px',
  color: '$TitleBlack',
  margin: '8px 0 5px 0',
});

const Action = styled('div', {
  display: 'flex',
  width: '168px',
  color: '#57606A',
  gap: '31px',

  '> div': {
    width: '53px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
});
