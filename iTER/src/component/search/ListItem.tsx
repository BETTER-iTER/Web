import { styled } from '../../../stitches.config';
import { ButtonEmpty } from '../common/Button';
import { Caption2 } from '../Font';
import Star from '../../assets/icon/star/Star.svg?react';
import UserIcon from '../../assets/icon/User.svg?react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface ListItemProps {
  id: number;
  title: string;
  spec: string;
  star: number;
  review: string;
  user: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, spec, star, review, user, id }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState<boolean>(false);
  return (
    <Container>
      <Box
        onClick={() => {
          navigate(`/search/review/${id}`);
        }}
      >
        <Image></Image>
        <div>
          <Title>{title}</Title>
          <Caption2>
            {spec}
            <Reviews>
              <Stars>
                <Star fill={'#8787F4'} width={15} height={15} /> {star}
              </Stars>
              {review}
            </Reviews>
          </Caption2>
          <User>
            <UserIcon width={16} height={16} />
            {/* <UserImage></UserImage> */}
            {user} | 개발자
          </User>
        </div>
      </Box>
      <Buttons>
        <ButtonEmpty
          onClick={() => {
            setActive(!active);
          }}
          active={active}
          type="like"
        >
          리뷰 좋아요
        </ButtonEmpty>
        <ButtonEmpty
          onClick={() => {
            setActive(!active);
          }}
          active={active}
          type="scrap"
        >
          리뷰 스크랩
        </ButtonEmpty>
      </Buttons>
    </Container>
  );
};

export default ListItem;

const Container = styled('div', {
  bodyText: 1,
  margin: '10px 0',
  color: '#57606A',
  marginBottom: '20px',
});

const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
});

const Image = styled('div', {
  width: '120px',
  height: '120px',
  backgroundColor: '$Gray20',
  borderRadius: '10px',
});

const Title = styled('div', {
  bodyText: 1,
  color: '$TitleBlack',
});

const Reviews = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 0 21px 0',
});

const Stars = styled('div', {
  display: 'flex',
  gap: '5.5px',
});

const User = styled('div', {
  bodyText: 3,
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

const UserImage = styled('div', {
  width: '20px',
  height: '20px',
  backgroundColor: '$Gray20',
  borderRadius: '50%',
});

const Buttons = styled('div', {
  display: 'flex',
  gap: '12px',
  justifyContent: 'center',
  pointerEvents: 'auto',
});
