import Bottom from './Bottom';
import { styled } from '../../../stitches.config';
import User from '../../assets/icon/User.svg?react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const LikeSort = ({ onClose }: { onClose: () => void }) => {
  const [likeArray, setLikeArray] = useState([]);

  useEffect(() => {
    // 서버에서 좋아요 누른 유저 정보 가져오기
    fetchCommentDataFromServer().then((data) => {
      setLikeArray(data.result);

      //여기서 정보 오는거 로직처리 갈기면됌
    });
  }, []);

  const fetchCommentDataFromServer = async () => {
    const currentPathname = window.location.pathname;
    const reviewId = currentPathname.split('/').pop();
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.get(
        `https://dev.betteritem.store/review/${reviewId}/detail/likes`,
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('좋아요 정보를 가져오는 데 실패했습니다.', error);
      return { comments: [], commentCount: 0 };
    }
  };
  return (
    <Bottom
      title="좋아요"
      onClose={onClose}
      component={
        <SortBox>
          {/* 좋아요 오는 수만큼 좋아요 만든거 갈기기 */}
          {likeArray.map((like) => (
            <SortItem key={like.id}>
              <Likelay>
                <UserImage>
                  {/* <User width={35} height={35} /> */}
                  <img src={like.profileImage} width={35} height={35} />
                </UserImage>
                <TextLay>
                  <Info>
                    <Name>
                      {like.nickname}
                      {/* 여기에 닉네임 받아오기 */}
                    </Name>
                    <Line>|</Line>
                    <Job>
                      {like.job}
                      {/* 여기에 직업 받아오기 */}
                    </Job>
                  </Info>
                </TextLay>
              </Likelay>
            </SortItem>
          ))}
        </SortBox>
      }
    />
  );
};

// 좋아요 정보로 넘어오는 정보들
// 좋아요 누른 유저 아이디: {like.userId}

const Likelay = styled('div', {
  display: 'flex',
});

const UserImage = styled('div', {
  marginLeft: '-10px',
});
const TextLay = styled('div', {
  marginTop: '8px',
  marginLeft: '12px',
});
const SortBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '60px',
  marginLeft: '10px',
});

const SortItem = styled('div', {
  bodyText: 2,
  padding: '18px 30px',
  cursor: 'pointer',
});

const Info = styled('div', {
  display: 'flex',
});

const Name = styled('div', {
  color: '#57606A',
  bodyText: 2,
});

const Line = styled('div', {
  color: '#EAEEF2',
  marginLeft: '2.5px',
});

const Job = styled('div', {
  color: '#57606A',
  marginLeft: '2.5px',
  bodyText: 2,
});
