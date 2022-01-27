import React, { useLayoutEffect, useRef, useState } from "react";
import ModalSelectEntityContainer from "../SelectEntityModalContainer";
import "./Form.css";
import { observer } from "mobx-react-lite";
import ModalFooter from "../ModalFooter";
import { ModalRegistry } from "../../../models/enum/modalNameRegistry";
import { ITaskItem } from "../../../models/ITaskItem";
import { IForm } from "../../../models/IForm";
import { ICategoryFormValues } from "./CategoryForm";

interface ITaskForm extends IForm {
  submitButtonTitle: string;
  closeButtonTitle: string;
  modalName: keyof ModalRegistry;
  task: ITaskItem;
}
interface ITaskFormValues extends ICategoryFormValues {
  categoryId: string;
}

const TaskForm = (props: ITaskForm) => {
  useLayoutEffect(() => {
    setFormValues({
      name: props.task.name,
      description: props.task.description!,
      categoryId: props.task.categoryId!,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setSelectId = (id: string) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        categoryId: id,
      };
    });
  };
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const nameInputRef = useRef<any>();
  const descriptionRef = useRef<any>();
  const [formValues, setFormValues] = useState<ITaskFormValues>({
    name: "",
    description: "",
    categoryId: "",
  });
  const isDisabled =
    formValues.name.length < 3 || formValues.name.length > 256 ? true : false;

  return (
    <>
      <form
        className="ModalForm"
        onSubmit={(form) => {
          props.onSubmitClick(formValues);
          setFormValues({ name: "", description: "", categoryId: "" });
          form.preventDefault();
        }}
      >
        <div className="ModalForm__DoubleInput">
          <label className="ModalForm__Item" htmlFor="">
            <p
              className="ModalForm__Item-Name"
              style={isDisabled && isDirty ? { color: "red" } : undefined}
            >
              Имя <span style={{ color: "red" }}>*</span>
            </p>
            <input
              type="text"
              placeholder="Введите имя задачи"
              ref={nameInputRef}
              onChange={() => {
                setFormValues((prevState) => {
                  return { ...prevState, name: nameInputRef.current.value };
                });
              }}
              onFocus={() => setIsDirty(true)}
              value={formValues.name}
              style={
                isDisabled && isDirty ? { border: "2px  solid red" } : undefined
              }
            />
          </label>
          <label className="ModalForm__Item">
            <p className="ModalForm__Item-Name"> Категория</p>
            <ModalSelectEntityContainer
              setSelectId={setSelectId}
              selectedId={formValues.categoryId}
            />
          </label>
        </div>
        <label className="ModalForm__Item">
          <p className="ModalForm__Item-Name"> Описание</p>
          <textarea
            name=""
            placeholder="Введите описание задачи"
            value={formValues.description}
            ref={descriptionRef}
            onChange={() => {
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

export default observer(TaskForm);
