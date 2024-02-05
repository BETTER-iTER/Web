import { useState } from 'react';
import { styled } from '../../../stitches.config';
import Top from '../../component/layout/Top';
import UserIcon from '../../assets/icon/User.svg?react';
import ExpertIcon from '../../assets/icon/Expert.svg?react';
import Nav from '../../component/layout/Nav';
import { getMypageFollowings } from '../../apis/Mypage';
import { getMypageFollowers } from '../../apis/Mypage';
import { useInfiniteQuery } from '@tanstack/react-query';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';
import { useLocation } from 'react-router-dom';
import React from 'react';

const Follow = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const type = query.get('type');
  const [status, setStatus] = useState<number>(type === 'following' ? 1 : 0);
  const page = 0;

  const {
    data: followerData,
    isLoading: followerLoading,
    isError: followerError,
    fetchNextPage: fetchNextFollowerPage,
    hasNextPage: hasFollowerNextPage,
  } = useInfiniteQuery(['follower'], ({ pageParam = 0 }) => getMypageFollowers(pageParam), {
    getNextPageParam: (lastPage) => (lastPage.hasNext ? page + 1 : undefined),
  });

  const {
    data: followingData,
    isLoading: followingLoading,
    isError: followingError,
    fetchNextPage: fetchNextFollowingPage,
    hasNextPage: hasFollowingNextPage,
  } = useInfiniteQuery(['following'], ({ pageParam = 0 }) => getMypageFollowings(pageParam), {
    getNextPageParam: (lastPage) => (lastPage.hasNext ? page + 1 : undefined),
  });

  followerLoading && followingLoading && <LoadingPage />;
  followerError && followingError && <ErrorPage type={2} />;

  const handleFollowerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    if (currentTarget instanceof HTMLDivElement) {
      const { scrollHeight, scrollTop, clientHeight } = currentTarget;
      if (scrollHeight - scrollTop === clientHeight && hasFollowerNextPage) {
        fetchNextFollowerPage();
      }
    }
  };

  const handleFollowingScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    if (currentTarget instanceof HTMLDivElement) {
      const { scrollHeight, scrollTop, clientHeight } = currentTarget;
      if (scrollHeight - scrollTop === clientHeight && hasFollowingNextPage) {
        fetchNextFollowingPage();
      }
    }
  };

  return (
    <Container>
      <Top title="마이페이지" />
      <StatusBox>
        <Status
          active={status == 0}
          onClick={() => {
            setStatus(0);
          }}
        >
          팔로워({followerData?.pages[0].totalCount})
        </Status>
        <Status
          active={status == 1}
          onClick={() => {
            setStatus(1);
          }}
        >
          팔로잉({followingData?.pages[0].totalCount})
        </Status>
      </StatusBox>
      {status === 0 && (
        <Content onScroll={handleFollowerScroll}>
          {followerData?.pages?.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page?.followerList?.map(
                (
                  followerList: {
                    nickname: string;
                    expert: boolean | undefined;
                    profileImage: string | undefined;
                  },
                  index: unknown
                ) => (
                  <Item
                    key={`${pageIndex}-${index}`}
                    name={followerList.nickname}
                    expert={followerList.expert}
                    image={followerList.profileImage}
                  />
                )
              )}
            </React.Fragment>
          ))}
          {hasFollowerNextPage && <LoadingPage />}
          {!followerData?.pages[0]?.reviews?.length && (
            <Empty>리뷰를 작성해 팔로워를 늘려 보세요</Empty>
          )}
        </Content>
      )}
      {status === 1 && (
        <Content onScroll={handleFollowingScroll}>
          {followingData?.pages?.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page?.reviews?.map(
                (
                  following: {
                    username: string;
                    expert: boolean | undefined;
                    image: string | undefined;
                  },
                  index: unknown
                ) => (
                  <Item
                    key={`${pageIndex}-${index}`}
                    name={following.username}
                    expert={following.expert}
                    image={following.image}
                  />
                )
              )}
            </React.Fragment>
          ))}
          {hasFollowingNextPage && <LoadingPage />}
          {!followingData?.pages[0]?.reviews?.length && (
            <Empty>도움된 리뷰의 유저를 팔로우해 보세요</Empty>
          )}
        </Content>
      )}
      <Nav />
    </Container>
  );
};

export default Follow;

const Item = ({ name, expert, image }: { name: string; expert?: boolean; image?: string }) => {
  return (
    <ItemBox>
      <ImageBox>
        <ExpertBox>{expert && <ExpertIcon width="10px" height="10px" />}</ExpertBox>
        {image ? (
          <Image style={{ backgroundImage: `url(${image})` }} />
        ) : (
          <UserIcon width="45px" height="45px" />
        )}
      </ImageBox>
      {name}
    </ItemBox>
  );
};

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const StatusBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  borderBottom: '1px solid $Bar',
});

const ImageBox = styled('div', {
  position: 'relative',
});

const ExpertBox = styled('div', {
  position: 'absolute',
  top: '-6px',
  left: '-6px',
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

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '9px',
  paddingBottom: '60px',
  bodyText: 1,
  color: '$TitleBlack',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const Image = styled('div', {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  backgroundColor: '$Gray20',
});

const ItemBox = styled('div', {
  height: '45px',
  width: '340px',
  display: 'flex',
  alignItems: 'center',
  marginTop: '16px',
  gap: '12px',
});

const Empty = styled('div', {
  marginTop: '180px',
});
