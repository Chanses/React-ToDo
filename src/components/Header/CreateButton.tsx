import React from "react";
interface ICreateNewItemButton {
  value: string;
  onClick: () => void;
}

const CreateButton = (props: ICreateNewItemButton) => {
  return (
    <>
      <button className="Header__AddNewTask" onClick={props.onClick}>
        {props.value}
      </button>
    </>
  );
};

export default CreateButton;
