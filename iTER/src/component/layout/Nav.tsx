import { styled } from '../../../stitches.config';
import Home from '../../assets/icon/Home.svg?react';
import Search from '../../assets/icon/Search.svg?react';
import Write from '../../assets/icon/Write.svg?react';
import Mypage from '../../assets/icon/Mypage.svg?react';
import NavRouterList from '../../constants/NavRouter';
import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  console.log(typeof pathname);

  const color = (path: string) => {
    if (pathname === path) {
      return '#24292F';
    } else {
      return '#AFB8C1';
    }
  };
  return (
    <Container>
      {NavRouterList.map((item, index) => {
        const { name, path } = item;
        return (
          <div
            key={index}
            onClick={() => {
              navigate(path);
            }}
          >
            {name === 'home' && <Home fill={color(path)} />}
            {name === 'search' && <Search fill={color(path)} />}
            {name === 'write' && <Write fill={color(path)} width={28} height={28} />}
            {name === 'mypage' && <Mypage fill={color(path)} />}
          </div>
        );
      })}
    </Container>
  );
};

export default Nav;

const Container = styled('div', {
  height: '42px',
  backgroundColor: '$White',
  display: 'flex',
  alignItems: 'center',
  padding: '0 44px',
  gap: '63px',
  position: 'fixed',
  bottom: '0',
  zIndex: '1',
});
