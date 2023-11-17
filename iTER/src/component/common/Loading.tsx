import Lodaing_ex from "../../assets/icon/Loading_ex.svg?react";
import { styled } from "../../../stitches.config";

const LoadingPage = () => {
    return (
        <>
        <Lay>
            <Lodaing_ex />
        </Lay>
        </>
    )
}

export default LoadingPage;

const Lay = styled("div", {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})