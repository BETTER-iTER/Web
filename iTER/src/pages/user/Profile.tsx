import { useInfiniteQuery } from '@tanstack/react-query';
import { styled } from '../../../stitches.config';
import Top from '../../component/layout/Top';
import PreviewSimple from '../../component/review/PreviewSimple';
import { ProfileFlatUser } from '../../component/user/ProfileFlat';
import { getUserProfile } from '../../apis/User';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';

const Profile = () => {
  const location = window.location.href;
  const userId = parseInt(location.split('/')[5]);
  console.log('userId', userId);
  const page = 0;
  const { data, isLoading, isError } = useInfiniteQuery(
    ['profile'],
    ({ pageParam = 0 }) => getUserProfile(userId, pageParam),
    {
      getNextPageParam: (lastPage) => (lastPage.hasNext ? page + 1 : undefined),
    }
  );

  console.log('?', data, isLoading, isError);
  const userInfo = data?.pages[0].userProfile;
  return (
    <Container>
      <Top title={userInfo?.nickname} />
      <ProfileFlatUser
        job={userInfo?.job}
        nickname={userInfo?.nickname}
        profileImage={userInfo?.profileImage}
        followerCount={userInfo?.followerCount}
        followingCount={userInfo?.followingCount}
        isExpertise={userInfo?.isExpertise}
        isFollow={userInfo?.isFollow}
        id={userId}
      />
      {data !== undefined &&
        data.pages.map((page, pageIndex) => (
          <PreviewSimple key={pageIndex} list={page.reviewList.reviewList} />
        ))}

      {isLoading && <LoadingPage />}
      {isError && <ErrorPage type={2} />}
    </Container>
  );
};

export default Profile;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
