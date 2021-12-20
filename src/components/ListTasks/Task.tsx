import React from "react";
import folderImg from "../../images/Folder.svg";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import { ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";

export interface ITask {
  id: string;
  name: string;
  key: number;
  description: string;
  setItemId: (id: string) => void;
  setName: (itemName?: string) => void;
  setDescription: (description: string) => void;
  setModalState: ({}: ModalState) => void;
}

const Task = (props: ITask) => {
  return (
    <>
      <div className="TaskWrapper" id={props.id}>
        <div className="TaskWrapper__Info">
          <div className="TaskWrapper__Info__Name">
            <div className="TaskWrapper__Info__Name-name">{props.name}</div>
            <p className="TaskWrapper__Info__Name-folder">
              <img src={folderImg} alt="" />
              Категория1
            </p>
          </div>
          <div className="TaskWrapper__Info__Description">
            {props.description}
          </div>
        </div>
        <div className="TaskWrapper__Actions">
          <button
            className="TaskWrapper__Actions-Edit"
            onClick={() => {
              props.setModalState(modalStateValues.Open.OpenEditTask);
              props.setItemId(props.id);
              props.setName(props.name);
              props.setDescription(props.description);
            }}
          >
            {" "}
            <img src={editImg} alt="" />
          </button>
          <button
            className="TaskWrapper__Actions-Delete"
            onClick={() => {
              props.setModalState(modalStateValues.Open.OpenDeleteTask);
              props.setItemId(props.id);
            }}
          >
            {" "}
            <img src={deleteImg} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
