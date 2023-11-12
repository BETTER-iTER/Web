import { styled } from '../../../stitches.config';
import { Caption2, LabelText } from '../../component/Font';
import Top from '../../component/layout/Top';
import UserIcon from '../../assets/icon/User.svg?react';
import { ButtonBlack } from '../../component/common/Button';
import PreviewSimple from '../../component/review/PreviewSimple';

const Profile = () => {
  const username = '블루투스 하트';
  return (
    <Container>
      <Top title={username} />
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
        <ButtonBlack onClick={() => console.log('팔로우')}>팔로우</ButtonBlack>
      </UserBox>

      <PreviewSimple />
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

const UserBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '46px 20px 19px',
  borderBottom: 'solid 1px $Bar',
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
