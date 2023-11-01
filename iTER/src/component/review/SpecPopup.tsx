import React from 'react';
import { styled } from '../../../stitches.config';
import { SelectBoxCPU } from './SelectBox';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SpecPopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <PopupOverlay>
      <PopupContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        
        <SelectBoxCPU />
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
  borderRadius: "5px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  position: "relative",
})


const CloseButton = styled("span",{
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
  fontSize: "24px",
})
