import React, { useRef, useState } from "react";
import ModalSelectEntityContainer from "../SelectEntityModalContainer";
import { IForm } from "./CategoryForm";
import "./Form.css";
import TaskStore from "../../stores/TaskStore";
import { observer } from "mobx-react-lite";
import ModalFooter from "../ModalFooter";
import { ModalRegistry } from "../../../models/enum/modalNameRegistry";

interface ITaskForm extends IForm {
  onSubmitClick: () => void;
  submitButtonTitle: string;
  closeButtonTitle: string;
  modalName: keyof ModalRegistry;
}

const TaskForm = (props: ITaskForm) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const nameInputRef = useRef<any>();
  const descriptionRef = useRef<any>();
  const isDisabled =
    TaskStore.task.name.length < 3 || TaskStore.task.name.length > 256
      ? true
      : false;

  return (
    <>
      <form className="ModalForm">
        <div className="ModalForm__DoubleInput">
          <label className="ModalForm__Item" htmlFor="">
            <p
              className="ModalForm__Item-Name"
              style={
                (TaskStore.task.name.length < 3 && isDirty) ||
                TaskStore.task.name.length > 256
                  ? { color: "red" }
                  : undefined
              }
            >
              Имя <span style={{ color: "red" }}>*</span>
            </p>
            <input
              type="text"
              placeholder="Введите имя задачи"
              ref={nameInputRef}
              onChange={() => {
                TaskStore.setName(nameInputRef.current.value);
              }}
              onFocus={() => setIsDirty(true)}
              value={TaskStore.task.name!}
              style={
                (TaskStore.task.name.length < 3 && isDirty) ||
                TaskStore.task.name.length > 256
                  ? { border: "2px  solid red" }
                  : undefined
              }
            />
          </label>
          <label className="ModalForm__Item">
            <p className="ModalForm__Item-Name"> Категория</p>
            <ModalSelectEntityContainer />
          </label>
        </div>
        <label className="ModalForm__Item">
          <p className="ModalForm__Item-Name"> Описание</p>
          <textarea
            name=""
            placeholder="Введите описание задачи"
            value={TaskStore.task.description!}
            ref={descriptionRef}
            onChange={() =>
              TaskStore.setDescription(descriptionRef.current.value)
            }
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

export default observer(TaskForm);
