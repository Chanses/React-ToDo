import React from "react";
import { ModalState } from "../../../AppContainer";
import { ICategoryItem } from "../../../models/ICategoryItem";
import { ITaskItem } from "../../../models/ITaskItem";
import ImgButton from "../../ImgButton";
import ModalSelectEntityContainer from "../SelectEntityModalContainer";
import { IForm } from "./CategoryForm";
import closeImg from "../../../images/Close.svg";
import "./Form.css";
import Button from "../../Button";

interface ITaskForm extends IForm {
  categorieList?: ICategoryItem[];
  modalState: ModalState;
  taskItem: ITaskItem;
  selectRef: any;
  selectValueId: string;
  onChangeSelect: () => void;
  setIsChanged: (isChanged: boolean) => void;
}

const TaskForm = (props: ITaskForm) => {
  return (
    // <div className="Modal">
    //   <div className="Modal__Article">
    //     <div className="Modal__Article-Name ">
    //       <span>{props.modalValues.titleValue}</span>
    //     </div>
    //     <ImgButton
    //       img={closeImg}
    //       onClick={props.closeModal}
    //       className="Modal__Article-Close"
    //     />
    //   </div>
    //   <form className="ModalForm">
    //     <div className="ModalForm__DoubleInput">
    //       <label className="ModalForm__Item" htmlFor="">
    //         <p
    //           className="ModalForm__Item-Name"
    //           style={props.styles.nameArticleValidStyle}
    //         >
    //           Имя <span style={{ color: "red" }}>*</span>
    //         </p>
    //         <input
    //           type="text"
    //           placeholder="Введите имя задачи"
    //           ref={props.nameInputRef}
    //           onChange={props.onChangeName}
    //           onFocus={props.nameInputOnFocus}
    //           value={props.modalValues.nameInputValue}
    //           style={props.styles.nameInputValidStyle}
    //         />
    //       </label>
    //       <label className="ModalForm__Item">
    //         <p className="ModalForm__Item-Name"> Категория</p>
    //         <ModalSelectEntityContainer {...props} />
    //       </label>
    //     </div>
    //     <label className="ModalForm__Item">
    //       <p className="ModalForm__Item-Name"> Описание</p>
    //       <textarea
    //         name=""
    //         placeholder="Введите описание задачи"
    //         value={props.modalValues.descriptionTextAreaValue}
    //         ref={props.descriptionRef}
    //         onChange={props.descriptionOnChange}
    //       />
    //     </label>
    //   </form>
    //   <div className="Modal__buttons">
    //     <div className="Modal__buttons-create">
    //       {/* Кнопки  для сохранения*/}
    //       <Button
    //         onClick={props.acceptOnClick}
    //         title={props.modalValues.buttonTitle}
    //         disabled={props.styles.disabled}
    //       />
    //     </div>
    //     <div className="Modal__buttons-close">
    //       <Button onClick={props.closeModal} title="Закрыть" />
    //     </div>
    //   </div>
    // </div>
    <></>
  );
};

export default TaskForm;
