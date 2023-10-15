import { styled } from '../../../stitches.config';
import { ReviewPreviewProps } from '../../types/Review';
import { Caption2 } from '../Font';

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
  return (
    <ItemContainer>
      <Image></Image>
      <Title>{list.title}</Title>
      <User>
        <Profile></Profile>
        <Caption2>{list.nickname}</Caption2>
      </User>
    </ItemContainer>
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

const ItemContainer = styled('div', {});

const Image = styled('div', {
  width: '140px',
  height: '140px',
  borderRadius: '10px',
  backgroundColor: '$Gray10',
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
  gap: '4px',
});

const Profile = styled('div', {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#d9d9d9',
});
