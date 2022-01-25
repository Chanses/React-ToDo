import React, { useRef, useState } from "react";
import "./Form.css";
import Textarea from "../../Textarea";
import { observer } from "mobx-react-lite";
import ModalFooter from "../ModalFooter";
import { ModalRegistry } from "../../../models/enum/modalNameRegistry";
import { ICategoryItem } from "../../../models/ICategoryItem";

export interface IForm {
  onSubmitClick: () => void;
  submitButtonTitle: string;
  closeButtonTitle: string;
  modalName: keyof ModalRegistry;
}
interface ICategoryForm extends IForm {
  category: ICategoryItem;
}

const CategoryForm = (props: ICategoryForm) => {
  const nameInputRef = useRef<any>();
  const descriptionRef = useRef<any>();

  const [isDirty, setIsDirty] = useState<boolean>(false);
  const isDisabled =
    props.category.name.length < 3 || props.category.name.length > 256
      ? true
      : false;

  return (
    <>
      <form className="Modal__Form">
        <label className="ModalForm__Item">
          <p
            className="ModalForm__Item-Name"
            style={
              (props.category.name.length < 3 && isDirty) ||
              props.category.name.length > 256
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
            value={props.category.name}
            onChange={() => {
              props.category.name = nameInputRef.current.value;
            }}
            onFocus={() => setIsDirty(true)}
            style={
              (props.category.name.length < 3 && isDirty) ||
              props.category.name.length > 256
                ? { border: "2px  solid red" }
                : undefined
            }
          />
        </label>
        <label className="ModalForm__Item">
          <p className="ModalForm__Item-Name">Описание</p>
          <Textarea
            value={props.category.description!}
            placeholder="Введите описание категории"
            descriptionRef={descriptionRef}
            onChange={() => {
              props.category.description = descriptionRef.current.value;
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
