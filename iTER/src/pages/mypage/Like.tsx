import { styled } from '../../../stitches.config';
import Top from '../../component/layout/Top';
import ListItem from '../../component/search/ListItem';

const Like = () => {
  const data = [];
  return (
    <Container>
      <Top title="좋아요한 리뷰" />
      {data.length === 0 ? (
        <Empty>마음에 드는 리뷰에 좋아요를 눌러보세요</Empty>
      ) : (
        <List>
          <ListItem
            id={0}
            title={'마샬 STANMORE III'}
            spec={'코어 i 5-13세대 / 14인치 / 32GB / 256-129GB'}
            star={4.5}
            review={'"가벼워요", "적당해요", "예뻐요"'}
            user={'제리'}
          />
          <ListItem
            id={0}
            title={'마샬 STANMORE III'}
            spec={'코어 i 5-13세대 / 14인치 / 32GB / 256-129GB'}
            star={4.5}
            review={'"가벼워요", "적당해요", "예뻐요"'}
            user={'제리'}
          />
        </List>
      )}
    </Container>
  );
};

export default Like;

const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Empty = styled('div', {
  padding: '330px 80px 0 81px',
  bodyText: 1,
  color: '$Gray50',
});

const List = styled('div', {
  width: '350px',
});
