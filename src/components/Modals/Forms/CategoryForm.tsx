import React, { useRef, useState } from "react";
import "./Form.css";
import Textarea from "../../Textarea";
import CategoryStore from "../../stores/CategoryStore";
import { observer } from "mobx-react-lite";
import ModalFooter from "../ModalFooter";
import { ModalRegistry } from "../../../models/enum/modalNameRegistry";

export interface IForm {
  onSubmitClick: () => void;
  submitButtonTitle: string;
  closeButtonTitle: string;
  modalName: keyof ModalRegistry;
}

const CategoryForm = (props: IForm) => {
  const nameInputRef = useRef<any>();
  const descriptionRef = useRef<any>();
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const isDisabled =
    CategoryStore.category.name.length < 3 ||
    CategoryStore.category.name.length > 256
      ? true
      : false;

  return (
    <>
      <form className="Modal__Form">
        <label className="ModalForm__Item">
          <p
            className="ModalForm__Item-Name"
            style={
              (CategoryStore.category.name.length < 3 && isDirty) ||
              CategoryStore.category.name.length > 256
                ? { color: "red" }
                : undefined
            }
          >
            Имя <span style={{ color: "red" }}>*</span>
          </p>
          <input
            type="text"
            placeholder="Введите имя категории"
            ref={nameInputRef}
            value={CategoryStore.category.name}
            onChange={() => {
              CategoryStore.setName(nameInputRef.current.value);
            }}
            onFocus={() => setIsDirty(true)}
            style={
              (CategoryStore.category.name.length < 3 && isDirty) ||
              CategoryStore.category.name.length > 256
                ? { border: "2px  solid red" }
                : undefined
            }
          />
        </label>
        <label className="ModalForm__Item">
          <p className="ModalForm__Item-Name">Описание</p>
          <Textarea
            value={CategoryStore.category.description!}
            placeholder="Введите описание категории"
            descriptionRef={descriptionRef}
            onChange={() => {
              CategoryStore.setDescription(descriptionRef.current.value);
            }}
          />
        </label>
      </form>
      <ModalFooter
        onSubmitClick={props.onSubmitClick}
        submitButtonTitle={props.submitButtonTitle}
        closeButtonTitle={props.closeButtonTitle}
        modalName={props.modalName}
        disabled={isDisabled}
      />
    </>
  );
};

export default observer(CategoryForm);
