import React, { useRef, useState } from "react";
import TaskPopUp from "./CreateEditPopUp";
import { addTask } from "../../dbService";
import { ITaskItem } from "../ListTasks/TasksListContainer";

interface ICreateTaskPopUpContainer {
  togglePopUp: () => void;
  setItemNameValue: (name: string) => void;
  setItemDescriptionValue: (name: string) => void;
  // getTaskList: () => void;
  itemNameValue: string;
  itemDescriptionValue: string;
  action: boolean;
  taskItem?: ITaskItem;
}

const TaskPopUpContainer: React.FC<ICreateTaskPopUpContainer> = (props) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isInvalid, setIsInvalid] = useState<boolean>(true);

  const nameInput = useRef<any>();
  const descriptionInput = useRef<any>();

  const dirtyHandler = () => {
    setIsDirty(true);
    name.length > 0 ? setIsInvalid(false) : setIsInvalid(true);
  };
  const descriptionHandler = () => {
    setDescription(descriptionInput?.current?.value);
  };

  const handlerNameInput = (event: any) => {
    props.setItemNameValue(event.target.value);
    setIsDirty(true);
    setName(nameInput?.current?.value);
    name.length > -1 ? setIsInvalid(false) : setIsInvalid(true);
  };

  return (
    <TaskPopUp
      {...props}
      isDirty={isDirty}
      isInvalid={isInvalid}
      name={name}
      description={description}
      descriptionHandler={descriptionHandler}
      dirtyHandler={dirtyHandler}
      handlerNameInput={handlerNameInput}
      nameInput={nameInput}
      descriptionInput={descriptionInput}
      addTask={addTask}
    />
  );
};

export default TaskPopUpContainer;
