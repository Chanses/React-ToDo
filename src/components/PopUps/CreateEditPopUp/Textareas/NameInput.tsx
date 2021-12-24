import React from "react";

interface IInputs {
  nameInput: () => void;
  onChange: () => void;
  onFocus: () => void;
  placeholder: string;
  value: string;
  style: any;
}
const NameInput = (props: IInputs) => {
  return (
    <input
      type="text"
      id="namefield"
      placeholder={props.placeholder}
      ref={props.nameInput}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      style={props.style}
    />
  );
};

export default NameInput;
