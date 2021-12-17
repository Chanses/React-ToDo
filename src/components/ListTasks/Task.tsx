import React from "react";
import folderImg from "../../images/Folder.svg";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import "./TasksStyle.css";
import { ITaskItem } from "./TasksListContainer";

export interface ITask {
  id: string;
  name: string;
  description?: string;
  taskItem?: ITaskItem;
  toggleTaskPopUp: () => void;
  toggleDeletePopUp: () => void;
  setItemId: (id: string) => void;
  toogleEditHandlerEdit: () => void;
  setItemNameValue: (itemName?: string) => void;
  setItemDescriptionValue: (itemDescription?: string) => void;
  getTaskItem: () => void;
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
              props.toggleTaskPopUp();
              props.toogleEditHandlerEdit();
              props.getTaskItem();
            }}
          >
            {" "}
            <img src={editImg} alt="" />
          </button>
          <button
            className="TaskWrapper__Actions-Delete"
            onClick={() => {
              props.toggleDeletePopUp();
              props.setItemId(props.id);
              console.log(props.taskItem);
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
