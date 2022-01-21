import React from "react";
import folderImg from "../../images/Folder.svg";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import ImgButton from "../ImgButton";

export interface ITaskProps {
  task: ITaskItem;
  categoryList?: ICategoryItem[];
  onEdit: (task: ITaskItem) => void;
  onDelete: (task: ITaskItem) => void;
}

const Task = (props: ITaskProps) => {
  return (
    <div className="TaskWrapper">
      <div className="TaskWrapper__Info">
        <div className="TaskWrapper__Info__Name">
          <div className="TaskWrapper__Info__Name-name">{props.task.name}</div>
          {/* Поиск выбранной категории в массиве */}
          {props.categoryList?.map((category, index) =>
            category.id.toString() === props.task.categoryId ? (
              <p className="TaskWrapper__Info__Name-folder" key={index}>
                <img src={folderImg} alt="" />
                <span>{category.name} </span>
              </p>
            ) : undefined
          )}
        </div>
        <div className="TaskWrapper__Info__Description">
          {props.task.description}
        </div>
      </div>
      <div className="TaskWrapper__Actions">
        <ImgButton
          className="TaskWrapper__Actions-Edit"
          onClick={() => props.onEdit(props.task)}
          img={editImg}
        />
        <ImgButton
          className="TaskWrapper__Actions-Delete"
          onClick={() => props.onDelete(props.task)}
          img={deleteImg}
        />
      </div>
    </div>
  );
};

export default Task;
