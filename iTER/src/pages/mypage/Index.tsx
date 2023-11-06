import Top from '../../component/layout/Top';
import ProfileFlat from '../../component/user/ProfileFlat';

const Mypage = () => {
  return (
    <div>
      <Top title="마이페이지" />
      <ProfileFlat type={'setting'} />
    </div>
  );
};

export default Mypage;
