import { styled } from '../../../stitches.config';
import Nav from '../../component/layout/Nav';
import Top from '../../component/layout/Top';
import UserIcon from '../../assets/icon/User.svg?react';
import Dots3 from '../../assets/icon/Dots3.svg?react';
import { Caption2 } from '../../component/Font';
import { useState } from 'react';
import { BottomReviewSetting } from '../../component/common/Bottom';
import { ModalSelect } from '../../component/common/Modal';
import Relation from '../../component/review/Relation';
import Toast from '../../component/common/Toast';
import DetailReview from '../../component/review/DetailReview';
const ReviewDetail = () => {
  const [setting, setSetting] = useState<boolean>(false);
  const [select, setSelect] = useState<number>(0);
  const [toast, setToast] = useState<boolean>(false);
  return (
    <>
      <Top title="스피커" />
      <Container>
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
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setSetting(!setting);
            }}
          >
            <Dots3 />
          </div>
        </User>
        <DetailReview />
        <Report>신고하기</Report>
        <Relation />
      </Container>

      <Nav />
      {setting && (
        <BottomReviewSetting
          onClose={() => {
            setSetting(false);
          }}
          onChange={(index: number) => {
            setSelect(index);
          }}
        />
      )}
      {select === 2 && !setting && (
        <ModalSelect
          text={'리뷰를 삭제하시겠습니까?'}
          btn={'삭제하기'}
          onClick={() => {
            setToast(true);
          }}
          onClosed={() => {
            setSelect(0);
          }}
        />
      )}

      {toast && <Toast message={'리뷰가 삭제되었습니다.'} onClose={() => setToast(false)} />}
    </>
  );
};

export default ReviewDetail;

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '60px',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
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
  borderLeft: '1px solid $Bar;',
  color: '#57606A',
});

const Report = styled('div', {
  margin: '40px 25px 40px 0',
  width: '100%',
  textAlign: 'right',
  color: '#AFB8C1',
  bodyText: 2,
});
