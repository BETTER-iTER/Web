import { styled } from '../../../stitches.config';
import Top from '../../component/layout/Top';
import PreviewSimple from '../../component/review/PreviewSimple';
import ProfileFlat from '../../component/user/ProfileFlat';

const Profile = () => {
  const username = '블루투스 하트';
  return (
    <Container>
      <Top title={username} />
      <ProfileFlat type="follow" />
      {/* <PreviewSimple /> */}
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
