import React from "react";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import Task from "./Task";

interface ITasksList {
  taskList?: ITaskItem[];
  categoryList?: ICategoryItem[];
  onEdit: (task: ITaskItem) => void;
  onDelete: (task: ITaskItem) => void;
}

const TasksList = (props: ITasksList) => {
  return (
    <>
      {props.taskList?.map((task) => (
        <Task {...props} task={task} key={task.id}></Task>
      ))}
    </>
  );
};

export default TasksList;
