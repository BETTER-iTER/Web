import { styled } from '../../../stitches.config';
import UserIcon from '../../assets/icon/User.svg?react';
import { Caption2 } from '../Font';

interface ProfileSimpleProps {
  color?: string;
}
const ProfileSimple = ({ color }: ProfileSimpleProps) => {
  return (
    <User color={'white'}>
      <UserIcon width={16} height={16} />
      {/* <UserImage></UserImage> */}
      {color == 'white' ? (
        <Caption2 style={{ color: '#fff' }}>미키마우스 제리 | 개발자</Caption2>
      ) : (
        <>미키마우스 제리 | 개발자</>
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
});
