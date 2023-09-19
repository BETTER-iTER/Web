import { styled } from "../stitches.config";
import {
  ButtonText,
  Caption,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
} from "./component/Font";

function App() {
  return (
    <>
      <Headline1>Headline 1</Headline1>
      <Headline2>Headline2</Headline2>
      <Headline3>Headline3</Headline3>
      <Headline4>Headline4</Headline4>
      <Body1>Body1</Body1>
      <Body2>Body2</Body2>
      <Caption>Caption</Caption>
      <ButtonText>Button</ButtonText>
    </>
  );
}

const Body1 = styled("div", {
  bodyText: 1,
  color: "$ErrorRed",
});

const Body2 = styled("div", {
  bodyText: 2,
  color: "$Brand",
});

export default App;
