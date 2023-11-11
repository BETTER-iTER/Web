import { useState } from 'react';
import { styled } from '../../../stitches.config';
import Top from '../../component/layout/Top';
import UserIcon from '../../assets/icon/User.svg?react';
import Bottom from '../../component/common/Bottom';
import Nav from '../../component/layout/Nav';
const dummyUser = [
  { id: 0, username: 'asdmkf' },
  { id: 1, username: 'asdmkf' },
  { id: 2, username: 'asdmkf' },
  { id: 3, username: 'asdmkf' },
];
const Follow = () => {
  const [status, setStatus] = useState<number>(0);
  return (
    <div>
      <Top title="마이페이지" />
      <StatusBox>
        <Status
          active={status == 0}
          onClick={() => {
            setStatus(0);
          }}
        >
          팔로워(10)
        </Status>
        <Status
          active={status == 1}
          onClick={() => {
            setStatus(1);
          }}
        >
          팔로잉(10)
        </Status>
      </StatusBox>

      <Content>
        {/* 데이터가 없을 경우 -> 나중에 조건 변경 */}
        {/* {true && (
          <Empty>
            {status == 0 && <>리뷰를 작성해 팔로워를 늘려 보세요</>}
            {status == 1 && <>도움된 리뷰의 유저를 팔로우해 보세요</>}
          </Empty>
        )} */}

        {/* 데이터 존재할 때 */}
        {dummyUser.map((user) => (
          <Item key={user.id} name={user.username} />
        ))}
      </Content>
      <Nav />
    </div>
  );
};

export default Follow;

const Item = ({ name }: { name: string }) => {
  return (
    <ItemBox>
      {/* <Image /> */}
      <UserIcon width="45px" height="45px" />
      {name}
    </ItemBox>
  );
};

const StatusBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  borderBottom: '1px solid $Bar',
});

const Status = styled('div', {
  backgroundColor: '$White',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '195px',
  bodyText: 1,
  padding: '20px 0 10px 0',
  variants: {
    active: {
      true: {
        borderBottom: '3px solid $TitleBlack',
      },
      false: {
        borderBottom: '3px solid $White',
        color: '#AFB8C1',
      },
    },
  },
  zIndex: 100,
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '9px',
  bodyText: 1,
  color: '$TitleBlack',
});

const Image = styled('div', {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  backgroundColor: '$Gray20',
});

const ItemBox = styled('div', {
  height: '45px',
  width: '340px',
  display: 'flex',
  alignItems: 'center',
  marginTop: '16px',
  gap: '12px',
});

const Empty = styled('div', {
  marginTop: '180px',
});
