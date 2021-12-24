import React from "react";

interface IDeleteButton {
  onClick: () => void;
}

const DeleteButton = (props: IDeleteButton) => {
  return (
    <button name="Задачи" type="submit" onClick={props.onClick}>
      Да
    </button>
  );
};

export default DeleteButton;
