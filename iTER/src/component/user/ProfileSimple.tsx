import { styled } from '../../../stitches.config';
import UserIcon from '../../assets/icon/User.svg?react';
import { Caption2 } from '../Font';

interface ProfileSimpleProps {
  color?: string;
  nickname?: string;
  job?: string;
  profileImage?: string;
}
const ProfileSimple = ({ color, nickname, job, profileImage }: ProfileSimpleProps) => {
  return (
    <User color={'white'}>
      {profileImage ? (
        <UserImage>
          <img src={profileImage} alt="" width={20} height={20} />
        </UserImage>
      ) : (
        <UserIcon width={16} height={16} />
      )}
      {color == 'white' ? (
        <Caption2 style={{ color: '#fff' }}>
          {nickname} | {job}
        </Caption2>
      ) : (
        <>
          {nickname} | {job}
        </>
      )}
    </User>
  );
};

export default ProfileSimple;
const User = styled('div', {
  bodyText: 3,
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

const UserImage = styled('div', {
  width: '20px',
  height: '20px',
  backgroundColor: '$Gray20',
  borderRadius: '50%',
  overflow: 'hidden',
});
