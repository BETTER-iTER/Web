import Bottom from './Bottom';
import { styled } from '../../../stitches.config';
import User from '../../assets/icon/User.svg?react';
import { Caption2, Caption3, DayText } from '../Font';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const CommentSort = ({ onClose }: { onClose: () => void }) => {
  const [commentArray, setCommentArray] = useState([]);

  useEffect(() => {
    // 서버에서 댓글 정보 및 댓글 수 가져오는거
    fetchCommentDataFromServer().then((data) => {
      setCommentArray(data.result);
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

      console.log(response.data.result);
      return response.data;
    } catch (error) {
      console.error('댓글 정보를 가져오는 데 실패했습니다.', error);
      return { comments: [], commentCount: 0 };
    }
  };

  //댓글 삭제 api
  const commentDelete = async (comment) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.post(
        `https://dev.betteritem.store/comment/delete/`,
        {
          comment_id: comment,
        },
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log('에러', error);
    }
  };

  return (
    <B>
      <Bottom
        title="댓글"
        onClose={onClose}
        component={
          <SortBox>
            {commentArray.map((comment) => (
              <SortItem key={comment.id}>
                <UserImage>
                  <img src={comment.reviewCommentUserInfo.profileImage} width={35} height={35} />
                </UserImage>
                <TextLay>
                  <Info>
                    <Name>
                      <Caption2>{comment.reviewCommentUserInfo.nickname}</Caption2>
                    </Name>
                    <Line>|</Line>
                    <Job>
                      <Caption2>{comment.reviewCommentUserInfo.job}</Caption2>
                    </Job>
                  </Info>
                  <CommentText>{comment.comment}</CommentText>
                  <BottomLay>
                    <DandD>
                      <Datelay>
                        <DayText>{comment.createdAt}</DayText>
                      </Datelay>
                      {/* mine이 true인 경우에만 삭제 버튼 보이기 */}
                      {comment.mine && (
                        <Delete onClick={() => commentDelete(comment.id)}>
                          <DayText>삭제</DayText>
                        </Delete>
                      )}
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
{
  /* 댓글 정보로 넘어오는 것들 */
}
{
  /* <p>댓글 아이디: {comment.id}</p>
                <p>댓글: {comment.comment}</p>
                <p>작성 일자: {comment.createdAt}</p>
                <p>내 댓글 여부: {comment.mine}</p>
                <p>댓글 아이디: {comment.id}</p>
                <p>사용자 정보</p>
                <p>사용자 id: {comment.reviewCommentUserInfo.userId}</p>
                <p>사용자 직업: {comment.reviewCommentUserInfo.job}</p>
                <p>사용자 닉네임: {comment.reviewCommentUserInfo.nickname}</p>
                <p>사용자 사진: {comment.reviewCommentUserInfo.profileImage}</p> */
}

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
