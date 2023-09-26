import React, { useEffect, useState } from 'react';
import iTER from "../assets/icon/iTER.svg";
import { styled,css,keyframes } from '../../stitches.config';

// 스플래시 화면 컴포넌트

const Title = styled("div", {
    fontSize: "30px",
    fontWeight: "600",
    color: "$Brand",
}
)

const Box = styled("div", {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "$White",
    textAlign: "center",
    opacity: 0,
    transition: 'opacity 2s ease-in-out',
  });

  const Cover = styled("div", {
    marginTop: "376px",
  })
 
  const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  });
  
  const fadeOut = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
  });

  const show = css({
    animation: `${fadeIn} 2s ease-in-out`,
    opacity: 1,
  });
  
  const hide = css({
    animation: `${fadeOut} 2s ease-in-out`,
    opacity: 0,
  });

const SplashScreen: React.FC = () => {
  const splashTime = 2000;

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, splashTime);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box className={showSplash ? show() : hide()}>
    <Cover>
      <img style={{width: "100px", height: "68.7px" }} src={iTER} alt="logo"/>
      <Title>
        ITer
      </Title>
    </Cover>
    </Box>
  );
};



export default SplashScreen;
