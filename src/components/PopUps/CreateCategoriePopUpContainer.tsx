import React, { useRef, useState } from "react";
import CreateCategoriePopUp from "./CategoriePopUp";
import { addCategorie } from "../../dbService";

interface ICreateCategoriePopUpCon {
  togglePopUp: () => void;
  action: boolean;
}

const CreateCategoriePopUpContainer: React.FC<ICreateCategoriePopUpCon> = (
  props
) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const nameInput = useRef<any>();
  const descriptionInput = useRef<any>();

  const descriptionHandler = () => {
    setDescription(descriptionInput?.current?.value);
  };
  const dirtyHandler = () => {
    setIsDirty(true);
    name.length > 0 ? setIsInvalid(false) : setIsInvalid(true);
  };

  const validHandler = () => {
    setIsDirty(true);
    setName(nameInput?.current?.value);
    name.length > -1 ? setIsInvalid(false) : setIsInvalid(true);
  };

  return (
    <CreateCategoriePopUp
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
      addCategorie={addCategorie}
    />
  );
};

export default CreateCategoriePopUpContainer;
