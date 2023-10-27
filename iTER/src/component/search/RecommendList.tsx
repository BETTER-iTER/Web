import { styled } from '../../../stitches.config';

const RecommendItem = ({ text, onSelect }: { text: string; onSelect: (text: string) => void }) => {
  return <Item onClick={() => onSelect(text)}>{text}</Item>;
};

export default RecommendItem;

const Item = styled('div', {
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '30px',
});
