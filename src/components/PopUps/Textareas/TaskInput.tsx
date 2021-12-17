import React from "react";

const TaskInput = () => {
  return <input type="text" id="namefield" placeholder="Введите имя задачи" />;
};

export default TaskInput;

// <input
// type="text"
// id="namefield"
// placeholder="Введите имя задачи"
// onFocus={props.dirtyHandler}
// onChange={props.handlerNameInput}
// ref={props.nameInput}
// style={
//   props.isDirty && props.isInvalid ? invalidBorderStyle : {}
// }
// />
