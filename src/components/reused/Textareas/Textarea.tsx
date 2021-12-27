import React from "react";

interface ITextArea {
  value: string;
  placeholder: string;
  descriptionInput: () => void;
  onChange: () => void;
}
const TaskTextarea = (props: ITextArea) => {
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
