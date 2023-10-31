import { ButtonText } from "../../component/Font";
import CategoryList from "../../constants/Category";
import Category from "../../component/common/Category";
import { styled } from "../../../stitches.config";

const CheckCategory = ({ onDisabled }: {onDisabled: (value: boolean) => void }) => {
    onDisabled
    return(
        <>
        <InfoMessage>
            <ButtonText>카테고리를 선택해주세요</ButtonText>
        </InfoMessage>
        <CategoryBox>
            {CategoryList.map((category) => (
                <Category
                    key={category.id}
                    name={category.name}
                    onClick={() => console.log('click')}
                    isSelected={false}
                    gap={4}
                    id={category.id}
                />
            ))}
        </CategoryBox>
        </>
    );
};

export default CheckCategory;

const CategoryBox = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    padding: '25px 0 60px 27px',
    marginTop: "30px",
  });

const InfoMessage = styled("div", {
    textAlign: "center",
    color: "$Brand",
    marginTop: "104px",
})