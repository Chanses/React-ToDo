import React, { useRef, useState } from "react";
import "./Form.css";
import Textarea from "../../Textarea";
import CategoryState from "../../states/CategoryState";
import { observer } from "mobx-react-lite";

export interface IForm {}

const CategoryForm = (props: IForm) => {
  //TODO Сдедлать функциональную форму
  const nameInputRef = useRef<any>();
  const descriptionRef = useRef<any>();
  const [nameValue, setNameValue] = useState<string>("");
  const onNameChange = () => {
    setNameValue(nameInputRef.current.value);
  };

  // const nameHandler = () => {
  //     props.setCategoryItem({
  //     ...props.categoryItem,
  //     name: nameInputRef?.current?.value,
  //   });

  // };

  return (
    <form className="Modal__Form">
      <label className="ModalForm__Item">
        <p
          className="ModalForm__Item-Name"
          // style={props.styles.nameArticleValidStyle}
        >
          Имя <span style={{ color: "red" }}>*</span>
        </p>
        <input
          type="text"
          placeholder="Введите имя категории"
          ref={nameInputRef}
          onChange={() => {
            CategoryState.setName(nameInputRef.current.value);
          }}
          // onFocus={props.nameInputOnFocus}

          // style={props.styles.nameInputValidStyle}
        />
      </label>
      <label className="ModalForm__Item">
        <p className="ModalForm__Item-Name">Описание</p>
        {/* <Textarea
          value={CategoryState.category?.description!}
          placeholder="Введите описание категории"
          descriptionRef={descriptionRef}
          // onChange={props.descriptionOnChange}
        /> */}
      </label>
    </form>
  );
};

export default observer(CategoryForm);
