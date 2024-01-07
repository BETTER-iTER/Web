import Bottom from './Bottom';
import { styled } from '../../../stitches.config';
import User from '../../assets/icon/User.svg?react';
import { Caption2, Caption3, DayText } from '../Font';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Input } from './Input';
import { ButtonComment } from './Button';
import { ModalSelect } from './Modal';
import Toast from './Toast';

export const CommentSort = ({ onClose }: { onClose: () => void }) => {
  const [commentArray, setCommentArray] = useState([]);
  const [addComment, setAddComment] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [bottom, setBottom] = useState(true);
  const [toast, setToast] = useState(false);

  const handleCommentChange = (value: string) => {
    setAddComment(value);
    setIsInputEmpty(value.trim() === '');
  };

  const handleOpenModal = (commentId) => {
    setSelectedCommentId(commentId);
    setIsModalOpen(true);
    console.log('삭제모달');
    setBottom(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const sendComment = async () => {
    const reviewId = 1;
    try {
      const response = await axios.post('https://dev.betteritem.store/comment/create', {
        review_id: reviewId,
        comment: addComment,
      });
      setAddComment('');
      // 댓글을 전송한 후 댓글 목록을 다시 불러와서 화면을 갱신
      fetchCommentDataFromServer().then((data) => {
        setCommentArray(data.result);
      });

      console.log(response);
    } catch (error) {
      console.log('에러', error);
    }
  };

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
  const commentDelete = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.post(
        `https://dev.betteritem.store/comment/delete/`,
        {
          comment_id: selectedCommentId,
        },
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );

      console.log(response);

      // 성공적으로 삭제되면 모달을 닫습니다.
      handleCloseModal();
    } catch (error) {
      console.log('에러', error);
    }
  };

  return (
    <>
      {toast && <Toast message={'댓글이 삭제되었습니다.'} onClose={() => setToast(false)} />}
      <ModalLay>
        {isModalOpen && (
          <ModalSelect
            text="댓글을 삭제하시겠습니까?"
            btn="삭제하기"
            onClick={() => {
              console.log('버튼 누름');
              commentDelete();
              setToast(true);
            }}
            onClosed={() => setIsModalOpen(false)}
          />
        )}
      </ModalLay>
      {bottom && (
        <B>
          <Bottom
            title="댓글"
            onClose={() => setBottom(false)}
            component={
              <>
                <SortBox>
                  {commentArray.map((comment) => (
                    <SortItem key={comment.id}>
                      <UserImage>
                        <img
                          src={comment.reviewCommentUserInfo.profileImage}
                          width={35}
                          height={35}
                        />
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
                              <Delete onClick={() => handleOpenModal(comment.id)}>
                                <DayText>삭제</DayText>
                              </Delete>
                            )}
                          </DandD>
                        </BottomLay>
                      </TextLay>
                    </SortItem>
                  ))}
                </SortBox>
                <BottomInputLay>
                  <InputBtnLay>
                    <Input
                      type="text"
                      placeholder="댓글을 남겨보세요"
                      onChange={handleCommentChange}
                      text={addComment}
                    />
                    <ButtonLay>
                      <ButtonComment
                        onClick={() => {
                          sendComment();
                        }}
                        disabled={isInputEmpty}
                      >
                        작성
                      </ButtonComment>
                    </ButtonLay>
                  </InputBtnLay>
                </BottomInputLay>
              </>
            }
          />
        </B>
      )}
    </>
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

const ModalLay = styled('div', {
  zIndex: '99',
});
const ButtonLay = styled('div', {
  paddingLeft: '55px',
  paddingTop: '5px',
});
const InputBtnLay = styled('div', {
  width: '350px',
  height: '45px',
  border: 'solid #D8DBE2 1px',
  borderRadius: '10px',
  display: 'flex',
  gap: '20px',
  marginTop: '10px',
});
const BottomInputLay = styled('div', {
  position: 'fixed',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '65px',
  backgroundColor: 'white',
  border: 'solid #D8DBE2 1px',
});

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
  paddingBottom: '10px',
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
