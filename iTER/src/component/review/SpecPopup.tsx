import React, { useState } from 'react';
import { styled } from '../../../stitches.config';
import { SelectBoxCPU } from './SelectBox';
import Xbtn from '../../assets/icon/Xbtn.svg?react';
import Button, { ButtonPopup } from '../common/Button';
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SpecPopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
    const [selectedCPU, setSelectedCPU] = useState<string | null>(null);
    const [selectedWINDOW, setSelectedWINDOW] = useState<string | null>(null);
    const [selectedRAM, setSelectedRAM] = useState<string | null>(null);
    const [selectedSIZE, setSelectedSIZE] = useState<string | null>(null);

    const handleCPU = (selectedCPU: string) => {
        setSelectedCPU(selectedCPU);
    }
    const handleWINDOW = (selectedWINDOW: string) => {
        setSelectedWINDOW(selectedWINDOW);
    }

    const handleRAM = (selectedRAM: string) => {
        setSelectedRAM(selectedRAM);
    }

    const handleSIZE = (selectedSIZE: string) => {
        setSelectedSIZE(selectedSIZE);
    }


  if (!isOpen) return null;

  return (
    <PopupOverlay>
      <PopupContent>
      <CloseButton><Xbtn width="24px" height="24px" onClick={onClose}>&times;</Xbtn></CloseButton>
        <SelectCover>
            <SelectBoxCPU onCPUClick={handleCPU} onWINDOWClick={handleWINDOW} onRAMClick={handleRAM} onSIZEClick={handleSIZE} />
            <p>선택된 값: {selectedCPU}/{selectedWINDOW}/{selectedRAM}/{selectedSIZE}</p>
        </SelectCover>
        <ButtonPopup children="선택 완료" />
      </PopupContent>
    </PopupOverlay>
  );
};

export default SpecPopup;

const PopupOverlay = styled("div", {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
})


const PopupContent = styled("div", {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  position: "relative",
  width: "340px",
  height: "532px",
})


const CloseButton = styled("span",{
  position: "absolute",
  top: "25px",
  right: "20px",
  cursor: "pointer",
  fontSize: "24px",
})

const SelectCover = styled("div", {
    paddingBottom: "16px",
})