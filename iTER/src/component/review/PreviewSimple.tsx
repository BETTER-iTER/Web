import { styled } from '../../../stitches.config';
import Heart from '../../assets/icon/Heart.svg?react';
import Scrap from '../../assets/icon/Scrap.svg?react';
import { Caption2 } from '../Font';

const PreviewSimple = () => {
  return (
    <Container>
      <Items>
        <Item />
        <Item />
        <Item />
      </Items>
    </Container>
  );
};

export default PreviewSimple;

const Item = () => {
  return (
    <ItemContainer>
      <Image />
      <Title>한성컴퓨터 GK896B</Title>
      <Caption2>
        <Action>
          <div>
            <Heart width={20} height={20} fill={'#AFB8C1'} />
            999+
          </div>
          <div>
            <Scrap width={20} height={20} fill={'#AFB8C1'} />
            12
          </div>
        </Action>
      </Caption2>
    </ItemContainer>
  );
};

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const Items = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '14px',
  marginTop: '16px',
  width: '350px',
});

const ItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
});

const Image = styled('div', {
  width: '168px',
  height: '200px',
  backgroundColor: '$Gray20',
  borderRadius: '10px',
});

const Title = styled('div', {
  bodyText: 2,
  width: '168px',
  color: '$TitleBlack',
  margin: '8px 0 5px 0',
});

const Action = styled('div', {
  display: 'flex',
  width: '168px',
  color: '#57606A',
  gap: '31px',

  '> div': {
    width: '53px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
});
