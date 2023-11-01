import ButtonGrid from "./ButtonGrid"

export const SelectBoxCPU = () => {
    const items = ['버튼 1', '버튼 2', '버튼 3', '버튼 4', '버튼 5', '버튼 6'];
    
    const handleButtonClick = (item: string) => {
        console.log(`클릭한 버튼: ${item}`);
      };
    
    return (
        <>
         <h1>상위 컴포넌트</h1>
        <ButtonGrid items={items} onButtonClick={handleButtonClick} />
        </>
    )
}