import React, { useRef, useState } from "react";
import CreateTaskPopUp from "./CreateTaskPopUp";
import { addTask } from "../../dbService";

interface ICreateTaskPopUpContainer {
  togglePopUp: () => void;
  action: boolean;
}

const CreateTaskPopUpContainer: React.FC<ICreateTaskPopUpContainer> = (
  props
) => {
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

  const validHandler = () => {
    setIsDirty(true);
    setName(nameInput?.current?.value);
    name.length > -1 ? setIsInvalid(false) : setIsInvalid(true);
  };

  return (
    <CreateTaskPopUp
      {...props}
      isDirty={isDirty}
      isInvalid={isInvalid}
      name={name}
      description={description}
      descriptionHandler={descriptionHandler}
      dirtyHandler={dirtyHandler}
      validHandler={validHandler}
      nameInput={nameInput}
      descriptionInput={descriptionInput}
      addTask={addTask}
    />
  );
};

export default CreateTaskPopUpContainer;
