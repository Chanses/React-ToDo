import React from "react";

interface IInputs {
  value: string;
  placeholder: string;

  descriptionInput: () => void;
  handleSelect: () => void;
  onChange: () => void;
}
const TaskTextarea = (props: IInputs) => {
  return (
    <textarea
      className="description"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      ref={props.descriptionInput}
    />
  );
};

export default TaskTextarea;
