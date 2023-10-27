export interface NavRouterProps {
  id?: number;
  name: string;
  path: string;
}
export const NavRouterList: NavRouterProps[] = [
  {
    id: 0,
    name: 'home',
    path: '/',
  },
  {
    id: 1,
    name: 'search',
    path: '/search',
  },
  {
    id: 2,
    name: 'write',
    path: '/write',
  },
  {
    id: 3,
    name: 'mypage',
    path: '/mypage',
  },
];

export default NavRouterList;
