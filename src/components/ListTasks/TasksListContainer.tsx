import React, { useCallback, useEffect } from "react";
import "./TasksStyle.css";
import { ITask } from "./Task";
import { getTask } from "../../dbService";
import TasksList from "./TasksList";

interface ITasksListContainer {
  toggleTaskPopUp: () => void;
  toggleDeletePopUp: () => void;
  toogleEditHandlerEdit: () => void;
  setItemId: (id: string) => void;
  setTaskItem: ({}: ITaskItem) => void;
  setDescriptionName: (description: string) => void;
  setItemNameValue: (name: string) => void;
  // getTaskList: () => void;
  taskList?: ITask[];
  taskItem?: ITaskItem;
}
export interface ITaskItem {
  id: string;
  name: string;
  description?: string;
}

const TasksListContainer: React.FC<ITasksListContainer> = (props) => {
  // props.getTaskList();
  const handleLoadTask = (task: ITaskItem) => props.setTaskItem(task);

  const GetTaskItem = useCallback(() => {
    getTask(handleLoadTask);
  }, [handleLoadTask(props.taskItem!)]);

  // props.setItemNameValue(props.taskItem!.name);
  console.log("tasksItem", props.taskItem);

  return (
    <>
      <TasksList
        {...props}
        tasksList={props.taskList}
        getTaskItem={GetTaskItem}
      />
    </>
  );
};

export default TasksListContainer;
