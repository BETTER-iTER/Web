import { styled } from '../../../stitches.config';
import UserIcon from '../../assets/icon/User.svg?react';
import SettingIcon from '../../assets/icon/Setting.svg?react';
import ExpertIcon from '../../assets/icon/Expert.svg?react';
import { ButtonBlack } from '../common/Button';
import { Caption2, LabelText } from '../Font';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMyPageProfile } from '../../apis/Mypage';
import { FlatUserProps } from '../../types/User';
import LoadingPage from '../common/Loading';
import ErrorPage from '../common/Error';

interface ProfileFlatProps {
  type: 'follow' | 'setting';
}
const ProfileFlat = ({ type }: ProfileFlatProps) => {
  const navigate = useNavigate();
  const {
    data: profileData,
    isLoading: profileLoading,
    isError: profileError,
  } = useQuery<FlatUserProps, Error>(['profile'], getMyPageProfile);

  if (profileLoading) return <LoadingPage />;
  if (profileError) return <ErrorPage type={2} />;

  return (
    <>
      <UserBox>
        <ImageBox>
          <ExpertBox>{profileData.expert && <ExpertIcon />}</ExpertBox>
          {profileData.profileImage != null ? (
            <UserImage style={{ backgroundImage: `url(${profileData.profileImage})` }} />
          ) : (
            <UserIcon width={70} height={70} />
          )}
        </ImageBox>

        <User>
          <Username>
            <LabelText>{profileData.nickname}</LabelText>
            <Bar />
            <Caption2 style={{ color: '#57606A' }}>{profileData.job}</Caption2>
          </Username>
          <Follow>
            <Caption2 onClick={() => navigate('/mypage/follow?type=follower')}>
              팔로워 <Count>{profileData.followerCount}</Count>
            </Caption2>
            <Bar />
            <Caption2 onClick={() => navigate('/mypage/follow?type=following')}>
              팔로잉 <Count>{profileData.followingCount}</Count>
            </Caption2>
          </Follow>
        </User>
        {type == 'follow' ? (
          <ButtonBlack onClick={() => console.log('팔로우')}>팔로우</ButtonBlack>
        ) : (
          <IconBox
            onClick={() => {
              navigate('/user/setting');
            }}
          >
            <SettingIcon />
          </IconBox>
        )}
      </UserBox>
      {type == 'follow' && <UnderBar />}
    </>
  );
};

export default ProfileFlat;

const UserBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '46px 20px 19px',
});

const ImageBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '75px',
  height: '75px',
  position: 'relative',
});

const ExpertBox = styled('div', {
  width: 'fit-content',
  height: 'fit-content',
  position: 'absolute',
  top: '-5px',
});

const UnderBar = styled('div', {
  width: '100%',
  height: '1px',
  backgroundColor: '$Bar',
});

const UserImage = styled('div', {
  width: '75px',
  height: '75px',
  borderRadius: '50%',
  backgroundColor: '#C4C4C4',
});

const User = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 36px 0 12px',
});

const Follow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  color: '#57606A',
});

const Username = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const Bar = styled('div', {
  width: '1px',
  height: '15px',
  backgroundColor: '$Bar',
  margin: '0 5px',
});

const Count = styled('span', {
  marginLeft: '2px',
  fontSize: '12px',
  fontWeight: '700',
  color: '#24292F',
});

const IconBox = styled('div', {
  width: 'fit-content',
  height: '45px',
  minWidth: '96px',
  display: 'flex',
  justifyContent: 'end',
});
