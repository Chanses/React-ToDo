import React, { useEffect, useState } from "react";
import "./TasksStyle.css";
import { ITask } from "./Task";
import { getTasks } from "../../dbService";
import TasksList from "./TasksList";

interface ITasksListContainer {
  toggleTaskPopUp: () => void;
  toggleDeletePopUp: () => void;
  toogleEditHandlerEdit: () => void;
}

const TasksListContainer: React.FC<ITasksListContainer> = (props) => {
  const [tasksList, setTasksList] = useState<ITask[]>();
  const handleLoadTasks = (tasks: ITask[]) => setTasksList(tasks);

  useEffect(() => {
    getTasks(handleLoadTasks);
  }, []);

  console.log("tasksList", tasksList);

  return (
    <>
      <TasksList {...props} tasksList={tasksList} />
    </>
  );
};

export default TasksListContainer;
