import React from "react";

interface ICloseDeletePopUpButton {
  closeModal: () => void;
}

const CloseDeletePopUpButton = (props: ICloseDeletePopUpButton) => {
  return (
    <button type="submit" onClick={props.closeModal}>
      Нет
    </button>
  );
};

export default CloseDeletePopUpButton;
