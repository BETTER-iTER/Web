import Bottom from "./Bottom";
import { styled } from "../../../stitches.config";
import User from "../../assets/icon/User.svg?react";
import { Caption2, Caption3, DayText } from "../Font";


export const CommentSort = ({ onClose }: { onClose: () => void }) => {
    return (
      <Bottom
        title="댓글"
        onClose={onClose}
        component={
          <SortBox>
            <SortItem>
                <UserImage>
                    <User width={35} height={35}/>
                </UserImage>
                <TextLay>
                    <Info>
                        <Name>
                            <Caption2>
                                블루투스 하트
                                {/* 여기에 닉네임 받아오기 */}
                            </Caption2>
                        </Name>
                        <Line>|</Line>
                        <Job>
                            <Caption2>
                                개발자
                                {/* 여기에 직업 받아오기 */}
                            </Caption2>
                        </Job>
                    </Info>
                    <CommentText>
                        좋은 리뷰글 잘 보고 갑니다~
                    </CommentText>
                    <BottomLay>
                        <ReComment>
                            <Caption3>
                                답글 달기
                                {/* 여기에 클릭했을때 답글다는 이벤트추가 */}
                            </Caption3>
                        </ReComment>
                        <DandD>
                            <Datelay>
                                <DayText>2023.09.11</DayText>
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
          </SortBox>
        }
      />
    );
  };

  const UserImage = styled("div", {
    marginLeft: "-10px",
    
  })
  const TextLay = styled("div", {
    marginLeft: "37px",
    marginTop: "-40px",
  })
  const SortBox = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '60px',
  });
  
  const SortItem = styled('div', {
    bodyText: 2,
    padding: '18px 30px',
    cursor: 'pointer',
  });
  
  const Info = styled("div", {
    display: "flex",
  })

  const Name = styled("div", {
    color: "#57606A",
  })

  const Line = styled("div", {
    color: "#EAEEF2",
    marginLeft: "2.5px",
  })

  const Job = styled("div", {
    color: "#57606A",
    marginLeft: "2.5px",
  })

  const CommentText = styled("div", {
    bodyText: 2,
    color: "#24292F",
    marginTop: "2px",
  })

  const ReComment = styled("div", {
    color: "$Gray20",
  })

  const Datelay = styled("div", {
    color: "#C1C4CC",
    textDecorationLine: "underline",
  })

  const Delete = styled("div", {
    color: "#C1C4CC",
    textDecorationLine: "underline",
    marginLeft: "4px",
  })

  const BottomLay = styled("div", {
    display: "flex",
    marginTop: "4px",
  })
  
  const DandD = styled("div", {
    display: "flex",
    marginLeft: "189px",
  })