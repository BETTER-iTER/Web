import Bottom from './Bottom';
import { styled } from '../../../stitches.config';
import User from '../../assets/icon/User.svg?react';
import { Caption2, Caption3, DayText } from '../Font';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const CommentSort = ({ onClose }: { onClose: () => void }) => {
  const [comments, setComments] = useState([]);
  const [commentDate, setCommentDate] = useState(0);

  useEffect(() => {
    // 서버에서 댓글 정보 및 댓글 수 가져오는거
    fetchCommentDataFromServer().then((data) => {
      setComments(data.result[0].comment);
      setCommentDate(data.result[0].createdAt);
    });
  }, []);

  const fetchCommentDataFromServer = async () => {
    const reviewId = 1;
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.get(
        `https://dev.betteritem.store/review/${reviewId}/detail/comments`,
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('댓글 정보를 가져오는 데 실패했습니다.', error);
      return { comments: [], commentCount: 0 };
    }
  };

  return (
    <B>
      <Bottom
        title="댓글"
        onClose={onClose}
        component={
          <SortBox>
            {/* 댓글이 오는 수만큼 댓글 만든거 갈기기 */}
            {comments &&
              comments.map((comment, index) => (
                <SortItem key={index}>
                  <UserImage>
                    <User width={35} height={35} />
                  </UserImage>
                  <TextLay>
                    <Info>
                      <Name>
                        <Caption2>
                          {comment.nickname} {/* 닉네임 받아오기 */}
                        </Caption2>
                      </Name>
                      <Line>|</Line>
                      <Job>
                        <Caption2>
                          {comment.job} {/* 직업 받아오기 */}
                        </Caption2>
                      </Job>
                    </Info>
                    <CommentText>{comment.text}</CommentText>
                    <BottomLay>
                      <ReComment>
                        <Caption3>
                          답글 달기
                          {/* 여기에 클릭했을 때 답글 다는 이벤트 추가 */}
                        </Caption3>
                      </ReComment>
                      <DandD>
                        <Datelay>
                          <DayText>{comment.createdAt}</DayText>
                          {/* 여기에 당시 날짜 받아오기 */}
                        </Datelay>
                        <Delete>
                          <DayText>삭제</DayText>
                          {/* 여기에 버튼 누르면 댓글 삭제 */}
                        </Delete>
                      </DandD>
                    </BottomLay>
                  </TextLay>
                </SortItem>
              ))}
          </SortBox>
        }
      />
    </B>
  );
};

const B = styled('div', {
  width: '360px',
});

const UserImage = styled('div', {
  marginLeft: '-10px',
});
const TextLay = styled('div', {
  marginLeft: '37px',
  marginTop: '-40px',
});
const SortBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '60px',
  height: '720px',
  width: '360px',
});

const SortItem = styled('div', {
  bodyText: 2,

  cursor: 'pointer',
  width: '360px',
});

const Info = styled('div', {
  display: 'flex',
});

const Name = styled('div', {
  color: '#57606A',
});

const Line = styled('div', {
  color: '#EAEEF2',
  marginLeft: '2.5px',
});

const Job = styled('div', {
  color: '#57606A',
  marginLeft: '2.5px',
});

const CommentText = styled('div', {
  bodyText: 2,
  color: '#24292F',
  marginTop: '2px',
});

const ReComment = styled('div', {
  color: '$Gray20',
});

const Datelay = styled('div', {
  color: '#C1C4CC',
  textDecorationLine: 'underline',
});

const Delete = styled('div', {
  color: '#C1C4CC',
  textDecorationLine: 'underline',
  marginLeft: '4px',
});

const BottomLay = styled('div', {
  display: 'flex',
  marginTop: '4px',
});

const DandD = styled('div', {
  display: 'flex',
  marginLeft: '189px',
});
