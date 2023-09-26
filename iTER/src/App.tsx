// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { styled } from "../stitches.config";

// import {
//   ButtonText,
//   Caption,
//   Headline1,
//   Headline2,
//   Headline3,
//   Headline4,
// } from "./component/Font";
// import Button from "./component/common/Button";
import SplashScreen from "./pages/splash";

function App() {
  return (
    <>
      {/* <Headline1>Headline 1</Headline1>
      <Headline2>Headline2</Headline2>
      <Headline3>Headline3</Headline3>
      <Headline4>Headline4</Headline4>
      <Body1>Body1</Body1>
      <Body2>Body2</Body2>
      <Caption>Caption</Caption>
      <ButtonText>Button</ButtonText>
      <Button onClick={handleClick} disabled={true}>버튼</Button> */}
      <SplashScreen />

      {/* <Router>

        <Route path="/splash" Component={SplashScreen} />
      </Router> */}
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
function handleClick() {
  console.log("활성화된상태");
}
export default App;
