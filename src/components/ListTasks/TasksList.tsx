import React from "react";
import Task, { ITask } from "./Task";

interface ITasksList {
  toggleTaskPopUp: () => void;
  toggleDeletePopUp: () => void;
  toogleEditHandlerEdit: () => void;
  tasksList?: ITask[];
}

const TasksList: React.FC<ITasksList> = (props) => {
  return (
    <div>
      {props.tasksList?.map((task, index) => (
        <Task {...task} key={index}></Task>
      ))}
    </div>
  );
};

export default TasksList;
