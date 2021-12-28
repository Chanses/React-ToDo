import React from "react";
import folderImg from "../../images/Folder.svg";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import { ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import ImgButton from "../ImgButton";

export interface ITask extends ITaskItem {
  selectedValueId: string;
  categorieList?: ICategoryItem[];
  taskItem: ITaskItem;
  setTaskItem: (state: ITaskItem) => void;
  setModalState: (state: ModalState) => void;
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
                <span>{category.name}</span>
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
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenEditTask);
            props.setTaskItem({
              id: props.id,
              name: props.name,
              description: props.description,
              categoryId: props.categoryId,
            });
          }}
          img={editImg}
        />

        <ImgButton
          className="TaskWrapper__Actions-Delete"
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenDeleteTask);
            props.setTaskItem({
              ...props.taskItem,
              id: props.id,
              name: props.name,
            });
          }}
          img={deleteImg}
        />
      </div>
    </div>
  );
};

export default Task;
