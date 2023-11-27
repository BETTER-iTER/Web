import { styled } from "../../../stitches.config";
import Bottom from "../common/Bottom";

const ReviewSort = ({ onClose, onSortItemSelected }: { onClose: () => void; onSortItemSelected: (selectedItem: string) => void }) => {
  const handleSortItemClick = (selectedItem: string) => {
    // 클릭한 SortItem 값을 상위 컴포넌트로 전달
    onSortItemSelected(selectedItem);
    onClose();
  };

  return (
    <Bottom
      title="제조사"
      onClose={onClose}
      component={
        <SortBox>
          <SortItem onClick={() => handleSortItemClick("삼성")}>삼성</SortItem>
          <SortItem onClick={() => handleSortItemClick("애플")}>애플</SortItem>
          <SortItem onClick={() => handleSortItemClick("로지텍")}>로지텍</SortItem>
          <SortItem onClick={() => handleSortItemClick("LG")}>LG</SortItem>
          <SortItem onClick={() => handleSortItemClick("ASUS")}>ASUS</SortItem>
          <SortItem onClick={() => handleSortItemClick("레노버")}>레노버</SortItem>
          <SortItem onClick={() => handleSortItemClick("직접입력")}>직접입력</SortItem>
        </SortBox>
      }
    />
  );
};

export default ReviewSort;

const SortBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '60px',
  paddingBottom: "200px",
});

const SortItem = styled('div', {
  bodyText: 2,
  padding: '18px 30px',
  borderBottom: '1px solid $Gray10',
  cursor: 'pointer',
});
