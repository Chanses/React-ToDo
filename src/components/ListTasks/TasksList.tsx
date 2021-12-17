import React from "react";
import Task, { ITask } from "./Task";
import { ITaskItem } from "./TasksListContainer";

interface ITasksList {
  toggleTaskPopUp: () => void;
  toggleDeletePopUp: () => void;
  toogleEditHandlerEdit: () => void;
  setItemNameValue: (name: string) => void;
  setItemId: (id: string) => void;
  getTaskItem: () => void;
  tasksList?: ITask[];
  taskItem?: ITaskItem;
}

const TasksList: React.FC<ITasksList> = (props) => {
  return (
    <div>
      {props.tasksList?.map((task, index) => (
        <Task {...props} {...task} key={index}></Task>
      ))}
    </div>
  );
};

export default TasksList;
