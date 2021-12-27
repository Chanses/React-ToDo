import React from "react";

interface IInputs {
  ref: () => void;
  onChange: () => void;
  onFocus: () => void;
  placeholder: string;
  value: string;
  style?: any;
}
const Input = (props: IInputs) => {
  return (
    <input
      placeholder={props.placeholder}
      ref={props.ref}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      style={props.style}
    />
  );
};

export default Input;
