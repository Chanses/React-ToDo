import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
import Textarea from "../../Textarea";
import { observer } from "mobx-react-lite";
import ModalFooter from "../ModalFooter";
import { ICategoryItem } from "../../../models/ICategoryItem";
import { IForm } from "../../../models/IForm";

interface ICategoryForm extends IForm {
  category: ICategoryItem;
}
export interface ICategoryFormValues {
  name: string;
  description: string;
}

const CategoryForm = (props: ICategoryForm) => {
  const nameInputRef = useRef<any>();
  const descriptionRef = useRef<any>();
  const [formValues, setFormValues] = useState<ICategoryFormValues>({
    name: "",
    description: "",
  });

  const [isDirty, setIsDirty] = useState<boolean>(false);
  const isDisabled =
    formValues.name.length < 3 || formValues.name.length > 256 ? true : false;
  useEffect(() => {
    setFormValues({
      name: props.category.name,
      description: props.category.description!,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <form
        className="Modal__Form"
        onSubmit={(form) => {
          props.onSubmitClick(formValues);
          form.preventDefault();
        }}
      >
        <label className="ModalForm__Item">
          <p
            className="ModalForm__Item-Name"
            style={isDisabled && isDirty ? { color: "red" } : undefined}
          >
            Имя <span style={{ color: "red" }}>*</span>
          </p>
          <input
            type="text"
            placeholder="Введите имя категории"
            ref={nameInputRef}
            value={formValues.name}
            onChange={() => {
              props.category.name = nameInputRef.current.value;
              setFormValues((prevState) => {
                return { ...prevState, name: nameInputRef.current.value };
              });
            }}
            onFocus={() => setIsDirty(true)}
            style={
              isDisabled && isDirty ? { border: "2px  solid red" } : undefined
            }
          />
        </label>
        <label className="ModalForm__Item">
          <p className="ModalForm__Item-Name">Описание</p>
          <Textarea
            value={formValues.description}
            placeholder="Введите описание категории"
            descriptionRef={descriptionRef}
            onChange={() => {
              props.category.description = descriptionRef.current.value;
              setFormValues((prevState) => {
                return {
                  ...prevState,
                  description: descriptionRef.current.value,
                };
              });
            }}
          />
        </label>
        <ModalFooter
          submitButtonTitle={props.submitButtonTitle}
          closeButtonTitle={props.closeButtonTitle}
          modalName={props.modalName}
          disabled={isDisabled}
        />
      </form>
    </>
  );
};

export default observer(CategoryForm);
