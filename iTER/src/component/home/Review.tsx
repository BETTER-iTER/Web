import { styled } from '../../../stitches.config';
import { ReviewPreviewProps } from '../../types/Review';
import { Caption2 } from '../Font';
import ExpertIcon from '../../assets/icon/Expert.svg?react';
import { useNavigate } from 'react-router-dom';

const Review = ({ list }: { list: ReviewPreviewProps[] }) => {
  return (
    <Container>
      {list.map((item) => {
        return <Item key={item.id} list={item} />;
      })}
    </Container>
  );
};

const Item = ({ list }: { list: ReviewPreviewProps }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/search/review/${list.id}`)}>
      <Image>
        <img src={list.imageUrl} alt={list.productName} width={140} height={140} />
      </Image>
      <Title>{list.productName}</Title>
      <User>
        <Profile>
          <img src={list.profileImageUrl} alt={list.nickname} />
        </Profile>
        <Caption2>{list.nickname}</Caption2>
        {list.expert && <ExpertIcon />}
      </User>
    </div>
  );
};

export default Review;

const Container = styled('div', {
  display: 'flex',
  gap: '10px',
  overflowX: 'scroll',
  width: '362px',
  marginTop: '5px',
  paddingLeft: '16px',
  paddingRight: '5px',
  alignSelf: 'flex-end',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const Image = styled('div', {
  width: '140px',
  height: '140px',
  borderRadius: '10px',
  backgroundColor: '$Gray10',
  overflow: 'hidden',
});

const Title = styled('div', {
  color: '$TitleBlack',
  bodyText: 2,
  lineHeight: '20px',
  margin: '10px 0 4px 0',
});

const User = styled('div', {
  color: '#57606A',
  display: 'flex',
  alignItems: 'center',
});

const Profile = styled('div', {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#d9d9d9',
  overflow: 'hidden',
  marginRight: '4px',
});
