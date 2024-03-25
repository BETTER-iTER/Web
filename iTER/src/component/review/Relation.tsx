import { styled } from '../../../stitches.config';
import { Caption2, LabelText } from '../Font';
import Heart from '../../assets/icon/Heart.svg?react';
import UserIcon from '../../assets/icon/User.svg?react';
import { ReviewPreviewProps } from '../../types/Review';
import Expert from '../../assets/icon/Expert.svg?react';

const Relation = (props: { list?: ReviewPreviewProps[] }) => {
  const { list } = props;
  if (!list || !Array.isArray(list) || list.length === 0) {
    console.error('잘못된 또는 누락된 목록:', list);
    return (
      <Container>
        <LabelText>연관 제품 리뷰</LabelText>
        <div style={{ marginTop: 10 }}>연관된 리뷰가 없습니다</div>
      </Container>
    );
  }
  return (
    <Container>
      <LabelText>연관 제품 리뷰</LabelText>
      <Items>
        <Items>
          {list.map((item, index) => (
            <Item {...item} key={index} />
          ))}
        </Items>
      </Items>
    </Container>
  );
};

export default Relation;

const Item = (data: ReviewPreviewProps) => {
  return (
    <ItemContainer
      onClick={() => {
        window.location.href = `/search/review/${data.id}`;
      }}
    >
      <Image>
        <img src={data.reviewImage} alt="product" width={170} height={170} />
      </Image>
      <TitleBox>
        <Title>{data.productName}</Title>
        <div>
          <Heart width={17} height={15} fill={'#AFB8C1'} />
        </div>
      </TitleBox>
      <User>
        {data.imageUrl ? (
          <UserImage>
            <img src={data.imageUrl} alt="user" width={15} height={15} />
          </UserImage>
        ) : (
          <UserIcon width={15} height={15} />
        )}
        <Caption2>
          <Nickname>
            {data.writerName}
            {data.expert && <Expert />}
          </Nickname>
        </Caption2>
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
  backgroundColor: '$Gray10',
  borderRadius: '10px',
  overflow: 'hidden',
});

const TitleBox = styled('div', {
  height: '20px',
  width: '150px',
  bodyText: 2,
  color: '$TitleBlack',
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Title = styled('div', {
  width: '120px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const User = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  marginTop: '4px',
  color: '#57606A',
  width: '150px',
});

const UserImage = styled('div', {
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  backgroundColor: '#EAEEF2',
  overflow: 'hidden',
});

const Nickname = styled('div', {
  gap: '4px',
  display: 'flex',
  alignItems: 'center',
});
