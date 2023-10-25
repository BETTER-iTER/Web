import { styled } from '../../../stitches.config';
import Nav from '../../component/layout/Nav';
import Top from '../../component/layout/Top';
import UserIcon from '../../assets/icon/User.svg?react';
import Dots3 from '../../assets/icon/Dots3.svg?react';
import HeartIcon from '../../assets/icon/Heart.svg?react';
import CommentIcon from '../../assets/icon/Comment.svg?react';
import ScrapIcon from '../../assets/icon/Scrap.svg?react';
import ShareIcon from '../../assets/icon/Share.svg?react';
import { Caption2 } from '../../component/Font';
const ReviewDetail = () => {
  return (
    <Container>
      <Top title="스피커" />
      {/* 상단 유저 정보 및 설정 버튼 */}
      <User>
        <Right>
          <UserIcon width={35} height={35} />
          {/* <UserImage></UserImage> */}
          블루투스 하트
          <Job>
            <Caption2>개발자</Caption2>
          </Job>
        </Right>
        <Dots3 />
      </User>

      <ReviewImage></ReviewImage>
      <Actives>
        <Active>
          <HeartIcon fill={'#4C4E55'} width={24} height={24} />
          99+
        </Active>
        <Active>
          <CommentIcon />
          99+
        </Active>
        <Active>
          <ScrapIcon fill={'#4C4E55'} width={24} height={24} />
          99+
        </Active>
        <Active>
          <ShareIcon />
        </Active>
      </Actives>

      <Nav />
    </Container>
  );
};

export default ReviewDetail;

const Container = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const User = styled('div', {
  width: '360px',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Right = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const UserImage = styled('div', {
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  backgroundColor: '#EAEEF2',
});

const Job = styled('div', {
  marginLeft: '-5px',
  paddingLeft: '5px',
  height: '15px',
  borderLeft: '1px solid #EAEEF2;',
  color: '#57606A',
});

const ReviewImage = styled('div', {
  width: '390px',
  height: '390px',
  backgroundColor: '#EAEEF2',
});

const Actives = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '13px',
  fontWeight: '600',
  color: '$Gray50',
  margin: '12px 0',
});

const Active = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  marginRight: '20px',
  color: '#4C4E55',
});
