import { useState } from 'react';
import { styled } from '../../../stitches.config';
import Nav from '../../component/layout/Nav';
import Top from '../../component/layout/Top';
import DetailReview from '../../component/review/DetailReview';
import PreviewSimple from '../../component/review/PreviewSimple';
import ProfileFlat from '../../component/user/ProfileFlat';

const Mypage = () => {
  const [status, setStatus] = useState<number>(0);
  return (
    <Container>
      <Top title="마이페이지" />
      <ProfileFlat type={'setting'} />
      <StatusBox>
        <Status
          active={status == 0}
          onClick={() => {
            setStatus(0);
          }}
        >
          내가 쓴 리뷰
        </Status>
        <Status
          active={status == 1}
          onClick={() => {
            setStatus(1);
          }}
        >
          스크랩한 리뷰
        </Status>
      </StatusBox>
      <Content>
        {/* 데이터가 없을 경우 -> 나중에 조건 변경 */}
        {true && (
          <Empty>
            {status == 0 && <>리뷰를 작성해 보세요</>}
            {status == 1 && <>마음에 드는 리뷰를 스크랩해 보세요</>}
          </Empty>
        )}

        {/* 데이터 존재할 때 */}
        {/* {status == 0 && <PreviewSimple />}
        {status == 1 && <PreviewSimple user />} */}

        {/* 리뷰 상세 스크롤 */}
        {/* <DetailReviews>
          <DetailReview />
          <DetailReview />
        </DetailReviews> */}
      </Content>
      <Bottom>
        <Nav />
      </Bottom>
    </Container>
  );
};

export default Mypage;

const Container = styled('div', {
  overflow: 'hidden',
  height: '100vh',
});

const Content = styled('div', {
  height: 'calc(100vh - 290px)',

  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  color: '$TextBlack',
});

const StatusBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  borderBottom: '1px solid $Bar',
});

const Status = styled('div', {
  backgroundColor: '$White',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '195px',
  bodyText: 1,
  padding: '20px 0 10px 0',
  variants: {
    active: {
      true: {
        borderBottom: '3px solid $TitleBlack',
      },
      false: {
        borderBottom: '3px solid $White',
        color: '#AFB8C1',
      },
    },
  },
  zIndex: 100,
});

const Empty = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '156px',
  color: '$Gray50',
});

const Bottom = styled('div', {
  position: 'fixed',
  bottom: '0',
  width: '390px',
  display: 'flex',
  justifyContent: 'center',
});

const DetailReviews = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
});
