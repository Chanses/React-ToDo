import React, { useEffect, useState } from "react";
import "./TasksStyle.css";
import Task, { ITask } from "./Task";
import { getTasks } from "../../dbService";

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
    <div className="Content">
      {tasksList?.map((task, index) => (
        <Task {...task} key={index}></Task>
      ))}
    </div>
  );
};

export default TasksListContainer;
