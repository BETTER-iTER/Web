import Bottom from './Bottom';
import { styled } from '../../../stitches.config';
import User from '../../assets/icon/User.svg?react';
import { useEffect, useState } from 'react';

export const LikeSort = ({ onClose }: { onClose: () => void }) => {
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    // 서버에서 좋아요 누른 유저 정보 가져오기
    fetchCommentDataFromServer().then((data) => {
      setComments(data.comments);
      setCommentCount(data.commentCount);
      //여기서 정보 오는거 로직처리 갈기면됌
    });
  }, []);

  const fetchCommentDataFromServer = async () => {
    try {
      const response = await fetch('서버에서 좋아요 누르사람 데이터 가져오는 api');
      const data = await response.json();
      return data;
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
          {comments.map((comment, index) => (
            <SortItem key={index}>
              <Likelay>
                <UserImage>
                  <User width={35} height={35} />
                </UserImage>
                <TextLay>
                  <Info>
                    <Name>
                      블루투스 하트
                      {/* 여기에 닉네임 받아오기 */}
                    </Name>
                    <Line>|</Line>
                    <Job>
                      개발자
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
  height: '720px',
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
