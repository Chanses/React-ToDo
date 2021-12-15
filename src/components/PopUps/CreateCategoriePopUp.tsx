import React from "react";
import "./StylePopUp.css";
import closeImg from "../../images/Close.svg";

interface ICreateCategoriePopUp {
  togglePopUp: () => void;
  descriptionHandler: () => void;
  validHandler: () => void;
  dirtyHandler: () => void;
  addCategorie: (name: string, description?: string) => void;
  action: boolean;
  isDirty: boolean;
  isInvalid: boolean;
  name: string;
  description: string;
  nameInput: any;
  descriptionInput: any;
}

const CreateCategoriePopUp: React.FC<ICreateCategoriePopUp> = (props) => {
  let invalidBorderStyle = { border: "2px red solid" };
  let invalidTextStyle = { color: "red" };

  return (
    <div className="PopUp-Wrapper">
      <div className="PopUp">
        <div className="PopUp__Article">
          <div className="PopUp__Article-Name ">
            {props.action ? <span>Создать</span> : <span>Редактировать</span>}{" "}
            <span>категорию</span>{" "}
          </div>
          <button className="PopUp__Article-Close" onClick={props.togglePopUp}>
            <img src={closeImg} alt="" />
          </button>
        </div>
        <div className="PopUp__Main-small">
          <div className="PopUp__Main-Name-small">
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
                placeholder="Введите имя категории"
                onFocus={props.dirtyHandler}
                onChange={props.validHandler}
                ref={props.nameInput}
                style={
                  props.isDirty && props.isInvalid ? invalidBorderStyle : {}
                }
              />
            </form>
          </div>

          <div className="PopUp__Main-Description-small">
            <div className="PopUp__Main-Description">
              <div className="PopUp-InputsArticle">Описание </div>
              <textarea
                className="description"
                placeholder="Введите описание категории"
                ref={props.descriptionInput}
                onChange={props.descriptionHandler}
              />
            </div>
          </div>

          <div className="PopUp__buttons">
            <div className="PopUp__buttons-create">
              {props.action ? (
                <button
                  type="submit"
                  onClick={() => {
                    props.addCategorie(props.name, props.description);
                    props.togglePopUp();
                  }}
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
    </div>
  );
};

export default CreateCategoriePopUp;
