import React from "react";
import "./StylePopUp.css";
import closeImg from "../../images/Close.svg";

interface ICreateTaskPopUp {
  togglePopUp: () => void;
  descriptionHandler: () => void;
  validHandler: () => void;
  dirtyHandler: () => void;
  addTask: (name: string, description?: string, categorie?: string) => void;
  action: boolean;
  isDirty: boolean;
  isInvalid: boolean;
  name: string;
  description: string;
  nameInput: any;
  descriptionInput: any;
}

const CreateTaskPopUp: React.FC<ICreateTaskPopUp> = (props) => {
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
              <input
                type="text"
                id="namefield"
                placeholder="Введите имя задачи"
                onFocus={props.dirtyHandler}
                onChange={props.validHandler}
                ref={props.nameInput}
                style={
                  props.isDirty && props.isInvalid ? invalidBorderStyle : {}
                }
              />
            </form>
          </div>
          <div className="PopUp__Main-Categorie DoubleInput">
            <div className="PopUp__Main-Categorie__article ">
              <div className="PopUp-InputsArticle">Категория </div>
            </div>
            <div style={{ display: "flex" }}>
              <select name="" id="">
                <option style={{ display: "none" }} value="" disabled>
                  Выберите категорию
                </option>
                <option value="">lorem1</option>
                <option value="">lorem2 </option>
              </select>
            </div>
          </div>
        </div>

        <div className="PopUp__Main-Description">
          <div className="PopUp__Main-Description">
            <div className="PopUp-InputsArticle">Описание </div>
            <textarea
              className="description"
              placeholder="Введите описание задачи"
              ref={props.descriptionInput}
              onChange={props.descriptionHandler}
            />
          </div>
        </div>

        <div className="PopUp__buttons">
          <div className="PopUp__buttons-create">
            {props.action ? (
              <button
                onClick={() => props.addTask(props.name, props.description)}
              >
                Создать
              </button>
            ) : (
              <button type="submit">Сохранить</button>
            )}
          </div>
          <div className="PopUp__buttons-close">
            <button onClick={props.togglePopUp}>Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskPopUp;
