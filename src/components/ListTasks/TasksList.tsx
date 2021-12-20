import React from "react";
import { ModalState } from "../../AppContainer";
import Task, { ITask } from "./Task";

interface ITasksList {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setItemId: (id: string) => void;
  setModalState: ({}: ModalState) => void;
  tasksList?: ITask[];
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
