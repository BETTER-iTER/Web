import { styled } from '../../../stitches.config';
import UserIcon from '../../assets/icon/User.svg?react';
import SettingIcon from '../../assets/icon/Setting.svg?react';
import { ButtonBlack } from '../common/Button';
import { Caption2, LabelText } from '../Font';
import { useNavigate } from 'react-router-dom';

interface ProfileFlatProps {
  userId?: number;
  type: 'follow' | 'setting';
}
const ProfileFlat = ({ userId, type }: ProfileFlatProps) => {
  const username = '블루투스 하트';
  const navigate = useNavigate();
  return (
    <>
      <UserBox>
        {/* <UserImage /> */}
        <UserIcon width={75} height={75} />
        <User>
          <Username>
            <LabelText>{username}</LabelText>
            <Bar />
            <Caption2 style={{ color: '#57606A' }}>개발자</Caption2>
          </Username>
          <Follow>
            <Caption2>
              팔로워 <Count>1342</Count>
            </Caption2>
            <Bar />
            <Caption2>
              팔로잉 <Count>0</Count>
            </Caption2>
          </Follow>
        </User>
        {type == 'follow' ? (
          <ButtonBlack onClick={() => console.log('팔로우')}>팔로우</ButtonBlack>
        ) : (
          <IconBox
            onClick={() => {
              navigate('/setting');
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
