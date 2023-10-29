import React, { useEffect, useState } from 'react';
import iTER from "../assets/icon/iTER.svg";
import { styled,css,keyframes } from '../../stitches.config';

const Cover = styled("div", {
    marginTop: "376px",
  })

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
    
  });

const Top = styled("div", {
    fontSize: "20px",
    fontWeight: "600",
    color: "$Brand",
})
const Onboading = () => {

    return (
    <Box>
    <Top>
        삶의 질을 높여주는<br/>
        IT 제품리뷰 서비스
    </Top>
    <Cover>
      <img style={{width: "100px", height: "68.7px" }} src={iTER} alt="logo"/>
      <Title>
        ITer
      </Title>
    </Cover>
    </Box>
    );
};

export default Onboading;