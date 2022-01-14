import React from "react";

interface IImgButton {
  onClick?: React.MouseEventHandler;
  className?: string;
  img: any;
}

const ImgButton = (props: IImgButton) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <img src={props.img} alt="" />{" "}
    </button>
  );
};

export default ImgButton;
