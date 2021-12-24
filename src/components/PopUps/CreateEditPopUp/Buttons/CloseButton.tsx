import React from "react";

interface IButtonPopUp {
  closePopUp: () => void;
}

const CloseButton = (props: IButtonPopUp) => {
  return <button onClick={props.closePopUp}>Закрыть</button>;
};

export default CloseButton;
