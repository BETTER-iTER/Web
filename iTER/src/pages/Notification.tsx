import { styled } from '../../stitches.config';
import { Caption2 } from '../component/Font';
import Top from '../component/layout/Top';
import { NotificationProps } from '../types/Notification';

const Notification = () => {
  return (
    <Container>
      <Top title="알림" />
      <List>
        {dummy.map((item) => {
          return <Item key={item.id} list={item} />;
        })}
      </List>
    </Container>
  );
};

export default Notification;

const Item = ({ list }: { list: NotificationProps }) => {
  return (
    <StyledItem readAt={list.readAt == null}>
      <Image />
      <Caption2>
        {list.type == 'follow' && (
          <FollowBox>
            <FollowText>
              <Nickname>{list.user?.nickname}</Nickname>님이 회원님을 팔로우하기 시작했습니다
            </FollowText>
            <FollowButton>팔로우</FollowButton>
          </FollowBox>
        )}
        {list.type == 'like' && (
          <Text>
            <Nickname>{list.user?.nickname}</Nickname>님이 회원님의 게시물을 좋아합니다
          </Text>
        )}
        {list.type == 'comment' && (
          <Text>
            <Nickname>{list.user?.nickname}</Nickname>님이 회원님의 게시물에 댓글을 남겼습니다:{' '}
            {list.content}
          </Text>
        )}
        {list.type == 'notice' && <Text>{list.content}</Text>}
      </Caption2>
    </StyledItem>
  );
};

const Container = styled('div', {
  color: '$TitleBlack',
});

const List = styled('div', {
  overflowY: 'scroll',
  height: 'calc(100vh - 64px)',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const Image = styled('div', {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  backgroundColor: '$Gray10',
});

const Nickname = styled('span', {
  fontWeight: 'bold',
});

const Text = styled('div', {
  width: '284px',
  maxHeight: '34px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const StyledItem = styled('div', {
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '0 25px',
  variants: {
    readAt: {
      true: {
        color: '$Gray20',
      },
    },
  },
});

const FollowBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const FollowText = styled('div', {
  width: '179px',
  maxHeight: '34px',
});

const FollowButton = styled('div', {
  width: '96px',
  height: '31px',
  borderRadius: '10px',
  backgroundColor: '#242424',
  color: '$White',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bodyText: 2,
  cursor: 'pointer',
});

const dummy: NotificationProps[] = [
  {
    id: 1,
    type: 'follow',
    user: {
      id: 1,
      nickname: '애플회장 이재용',
      profileImage: 'https://avatars.githubusercontent.com/u/76855211?v=4',
    },
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: '2021-09-01T00:00:00.000Z',
  },
  {
    id: 2,
    type: 'like',
    user: {
      id: 2,
      nickname: 'appdengi',
      profileImage: 'https://avatars.githubusercontent.com/u/76855211?v=4',
    },
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: '2021-09-01T00:00:00.000Z',
  },
  {
    id: 3,
    type: 'comment',
    user: {
      id: 3,
      nickname: 'appdengi',
      profileImage: 'https://avatars.githubusercontent.com/u/76855211?v=4',
    },
    content: '좋은 리뷰글 잘 보고 갑니다~',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
  {
    id: 4,
    type: 'notice',
    content: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
  {
    id: 4,
    type: 'notice',
    content: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
  {
    id: 4,
    type: 'notice',
    content: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
  {
    id: 4,
    type: 'notice',
    content: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
  {
    id: 4,
    type: 'notice',
    content: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
  {
    id: 4,
    type: 'notice',
    content: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
  {
    id: 4,
    type: 'notice',
    content: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
  {
    id: 4,
    type: 'notice',
    content: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
  {
    id: 4,
    type: 'notice',
    content: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
  {
    id: 4,
    type: 'notice',
    content: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
  {
    id: 4,
    type: 'notice',
    content: '새롭게 출시된 기능! 다른 리뷰어들을 팔로우하고 새로운 게시물 알림을 받아보세요🙌',
    path: '/test',
    createdAt: '2021-09-01T00:00:00.000Z',
    readAt: null,
  },
];
