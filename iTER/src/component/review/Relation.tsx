import { styled } from '../../../stitches.config';
import { Caption2, LabelText } from '../Font';
import Heart from '../../assets/icon/Heart.svg?react';
import UserIcon from '../../assets/icon/User.svg?react';

const Relation = () => {
  return (
    <Container>
      <LabelText>연관 제품 리뷰</LabelText>
      <Items>
        <Item />
        <Item />
      </Items>
    </Container>
  );
};

export default Relation;

const Item = () => {
  return (
    <ItemContainer>
      <Image />
      <Title>
        한성컴퓨터 GK896B
        <div>
          <Heart width={17} height={15} fill={'#AFB8C1'} />
        </div>
      </Title>
      <User>
        <UserIcon width={16} height={16} />
        {/* <UserImage></UserImage> */}
        <Caption2>미키마움스 제리</Caption2>
      </User>
    </ItemContainer>
  );
};

const Container = styled('div', {
  width: '370px',
  borderTop: 'solid 1px $Bar',
  padding: '40px 0 0 20px',
});

const Items = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px',
  marginTop: '20px',
  width: '340px',
});

const ItemContainer = styled('div', {
  width: '170px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Image = styled('div', {
  width: '170px',
  height: '170px',
  backgroundColor: '$Gray40',
  borderRadius: '10px',
});

const Title = styled('div', {
  height: '20px',
  width: '150px',
  bodyText: 2,
  color: '$TitleBlack',
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const User = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  marginTop: '4px',
  color: '#57606A',
  width: '150px',
});
