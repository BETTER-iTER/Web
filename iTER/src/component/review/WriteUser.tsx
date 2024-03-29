import React from 'react';
import { styled } from '../../../stitches.config';
import { B1 } from '../Font';
import UserIcon from '../../assets/icon/User.svg?react';

interface UserProps {
  img: string;
  name: string;
  job: string;
}
const WriteUser: React.FC<UserProps> = ({ img, name, job }) => {
  return (
    <>
      <Cover>
        <ImgBox>
          {img ? (
            <img src={img} alt={name} width={40} height={40} style={{ marginRight: 4 }} />
          ) : (
            <UserIcon width={40} height={40} style={{ marginRight: 4 }} />
          )}
        </ImgBox>
        <Name>
          <B1>{name}</B1>
        </Name>
        <Line>
          <B1>|</B1>
        </Line>
        <Job>
          <B1>{job}</B1>
        </Job>
      </Cover>
    </>
  );
};

export default WriteUser;

const Name = styled('div', {
  marginLeft: '8px',
});

const Job = styled('div', {
  marginLeft: '2px',
});

const Line = styled('div', {
  marginLeft: '2px',
});

const Cover = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const ImgBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  overflow: 'hidden',
});
