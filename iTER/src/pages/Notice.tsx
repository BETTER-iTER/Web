import { styled } from '../../stitches.config';
import { ButtonText, Caption1 } from '../component/Font';
import Top from '../component/layout/Top';
import { NoticeProps } from '../types/Notice';

const Notice = () => {
  const props: NoticeProps = {
    title: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    content:
      'BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다. BO에서 작성한 공지사항 내용이 들어갑니다.',
    createdAt: '2023.6.10',
  };

  return (
    <Container>
      <Top title="공지사항" />
      <Box>
        <ButtonText>{props.title}</ButtonText>
        <Date>
          <Caption1>{props.createdAt}</Caption1>
        </Date>
        {props.content}
      </Box>
    </Container>
  );
};

export default Notice;

const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '$BL01',
  bodyText: 2,
});

const Box = styled('div', {
  width: '350px',
  marginTop: '80px',
  backgroundColor: '$white',
});

const Date = styled('div', {
  width: '100%',
  marginTop: '6px',
  marginBottom: '24px',
  paddingBottom: '12px',
  borderBottom: '0.5px solid #C1C1C1',
  color: '$WH03',
});
