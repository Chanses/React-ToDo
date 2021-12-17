import React from "react";
import "./StylePopUp.css";
import closeImg from "../../images/Close.svg";
import { ITaskItem } from "../ListTasks/TasksListContainer";
import CreateButton from "./Buttons/CreateButton";
import SaveButton from "./Buttons/SaveButton";
import CloseButton from "./Buttons/CloseButton";
import TaskTextarea from "./Textareas/TaskTextarea";
import PopUpSelect from "./Select/PopUpSelect";
import TaskInput from "./Textareas/TaskInput";
import CategoryInput from "./Textareas/CategoryInput";

interface ITaskPopUp {
  togglePopUp: () => void;
  descriptionHandler: () => void;
  dirtyHandler: () => void;
  addTask: (name: string, description?: string, categorie?: string) => void;
  handlerNameInput: (event: any) => void;
  // getTaskList: () => void;
  action: boolean;
  isDirty: boolean;
  isInvalid: boolean;
  itemNameValue: string;
  itemDescriptionValue: string;
  name: string;
  description: string;
  nameInput: any;
  descriptionInput: any;
  taskItem?: ITaskItem;
}

const TaskPopUp: React.FC<ITaskPopUp> = (props) => {
  let invalidBorderStyle = { border: "2px red solid" };
  let invalidTextStyle = { color: "red" };

  return (
    <div className="PopUp-Wrapper">
      <div className="PopUp">
        <div className="PopUp__Article">
          <div className="PopUp__Article-Name ">
            {props.action ? <span>Создать</span> : <span>Редактировать</span>}
            <span> задачу</span>
          </div>
          <button className="PopUp__Article-Close">
            <img src={closeImg} alt="" onClick={props.togglePopUp} />
          </button>
        </div>
        <div className="PopUp__Main">
          <div className="PopUp__Main-Name DoubleInput">
            <div className="PopUp__Main-Name__article ">
              <div
                className="PopUp-InputsArticle"
                style={props.isDirty && props.isInvalid ? invalidTextStyle : {}}
              >
                Имя<span style={{ color: "red" }}>*</span>{" "}
              </div>
            </div>
            <form action="submit">
              {" "}
              {/* Поля ввода для имени*/}
              {props.action ? <TaskInput /> : <CategoryInput />}
            </form>
          </div>
          <div className="PopUp__Main-Categorie DoubleInput">
            <div className="PopUp__Main-Categorie__article ">
              <div className="PopUp-InputsArticle">Категория </div>
            </div>
            <div style={{ display: "flex" }}>
              {/* Поля для выбора категорий*/}
              <PopUpSelect />
            </div>
          </div>
        </div>

        <div className="PopUp__Main-Description">
          <div className="PopUp__Main-Description">
            <div className="PopUp-InputsArticle">Описание </div>
            <TaskTextarea />
          </div>
        </div>

        <div className="PopUp__buttons">
          <div className="PopUp__buttons-create">
            {/* Кнопки  для сохранения*/}
            {props.action ? <CreateButton /> : <SaveButton />}
          </div>
          <div className="PopUp__buttons-close">
            <CloseButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPopUp;
