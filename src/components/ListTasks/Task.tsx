import React from "react";
import folderImg from "../../images/Folder.svg";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import "./TasksStyle.css";

export interface ITask {
  id: string;
  name: string;
  description?: string;
  toggleTaskPopUp: () => void;
  toggleDeletePopUp: () => void;
  setItemId: (id: string) => void;
}

const Task: React.FC<ITask> = (props) => {
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
            onClick={props.toggleTaskPopUp}
          >
            {" "}
            <img src={editImg} alt="" />
          </button>
          <button
            className="TaskWrapper__Actions-Delete"
            onClick={() => {
              props.toggleDeletePopUp();
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
