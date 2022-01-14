import React, { DOMElement } from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import ImgButton from "../ImgButton";
import closeImg from "../../images/Close.svg";
import { IModal } from "../../models/IModal";

import ModalService from "../../Services/ModalService";

const Modal = (props: IModal) => {
  const modalRoot: Element = document.body;
  console.log(ModalService.isModalOpen);
  const ModalPortal = () => {
    return ReactDOM.createPortal(
      <div className="Modal">
        <div className="Modal__Article">
          <div className="Modal__Article-Name ">
            <span>{props.title}</span>
          </div>
          <ImgButton
            img={closeImg}
            onClick={() => ModalService.closeModal(props.modalName)}
            className="Modal__Article-Close"
          />
        </div>
        {/* Content */}
        {props.children}
        <div className="Modal__buttons">
          <div className="Modal__buttons-create">
            <Button
              onClick={props.onSubmitClick}
              title={props.submitButtonTitle}
            />
          </div>
          <div className="Modal__buttons-close">
            <Button
              onClick={() => props.onCloseModal}
              title={props.closeButtonTitle}
            />
          </div>
        </div>
      </div>,
      modalRoot
    );
  };
  const getModal = () => {
    if (ModalService.isModalOpen) return null;
    else return ModalPortal;
  };
  return <div className="Modal">{getModal}</div>;
};

export default Modal;
