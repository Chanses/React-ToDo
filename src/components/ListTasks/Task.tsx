import React from "react";
import folderImg from "../../images/Folder.svg";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import ImgButton from "../ImgButton";

export interface ITask extends ITaskItem {
  selectedValueId: string;
  categorieList?: ICategoryItem[];
  openEditModal: (
    id: string,
    name: string,
    description?: string,
    categoryId?: string
  ) => void;
  openDeleteModal: (id: string, name: string) => void;
}

const Task = (props: ITask) => {
  return (
    <div className="TaskWrapper" id={props.id}>
      <div className="TaskWrapper__Info">
        <div className="TaskWrapper__Info__Name">
          <div className="TaskWrapper__Info__Name-name">{props.name}</div>
          {/* Поиск выбранной категории в массиве */}
          {props.categorieList?.map((category, index) =>
            category.id.toString() === props.categoryId ? (
              <p className="TaskWrapper__Info__Name-folder" key={index}>
                <img src={folderImg} alt="" />
                <span>{category.name} </span>
              </p>
            ) : undefined
          )}
        </div>
        <div className="TaskWrapper__Info__Description">
          {props.description}
        </div>
      </div>
      <div className="TaskWrapper__Actions">
        <ImgButton
          className="TaskWrapper__Actions-Edit"
          onClick={() =>
            props.openEditModal(
              props.id,
              props.name,
              props.description,
              props.categoryId
            )
          }
          img={editImg}
        />

        <ImgButton
          className="TaskWrapper__Actions-Delete"
          onClick={() => props.openDeleteModal(props.id, props.name)}
          img={deleteImg}
        />
      </div>
    </div>
  );
};

export default Task;
