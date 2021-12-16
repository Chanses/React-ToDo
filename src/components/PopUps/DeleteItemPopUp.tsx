import React from "react";

interface IDeletePopUp {
  togglePopUp: (id?: string) => void;
  deleteTask: (id: string) => void;
  deleteCategorie: (id: string) => void;
  section: boolean;
  itemId: string;
}

const DeleteItemPopUp: React.FC<IDeletePopUp> = (props) => {
  return (
    <div className="PopUp-Wrapper">
      <div className="PopUp">
        <div className="PopUp__Article-Name">
          Удаление{" "}
          {props.section ? <span> задачи </span> : <span> категории </span>}{" "}
        </div>
        <div className="PopUp__Main-small" style={{ color: "black" }}>
          <div className="PopUp__Main-Description-small">
            Вы уверены, что хотите удалить
            {props.section ? (
              <span> задачу “Задача1”?</span>
            ) : (
              <span> категорию “Категория1”?</span>
            )}{" "}
          </div>
          <div className="PopUp__buttons">
            <div className="PopUp__buttons-create">
              {props.section ? (
                <button
                  name="Задачи"
                  type="submit"
                  onClick={() => {
                    props.deleteTask(props.itemId);
                    props.togglePopUp();
                  }}
                >
                  Да
                </button>
              ) : (
                <button
                  name="Категории"
                  type="submit"
                  onClick={() => {
                    props.deleteCategorie(props.itemId);
                    props.togglePopUp();
                  }}
                >
                  Да
                </button>
              )}{" "}
            </div>
            <div className="PopUp__buttons-close">
              <button type="submit" onClick={() => props.togglePopUp()}>
                Нет
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemPopUp;
