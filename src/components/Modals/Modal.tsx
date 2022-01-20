import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import ImgButton from "../ImgButton";
import closeImg from "../../images/Close.svg";
import { IModal } from "../../models/IModal";
import "./Modal.css";

import ModalService from "../../Services/ModalService";
import { observer } from "mobx-react-lite";

const Modal = (props: IModal) => {
  const modalRoot = document.getElementById("modal-root")!;

  const getModalPortal = () => {
    return ReactDOM.createPortal(
      <div className="Modal-Wrapper">
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
          <div className="Modal__Content">{props.children}</div>
          <div className="Modal__buttons">
            <div className="Modal__buttons-create">
              <Button
                onClick={() => props.onSubmitClick()}
                title={props.submitButtonTitle}
              />
            </div>
            <div className="Modal__buttons-close">
              <Button
                onClick={() => ModalService.closeModal(props.modalName)}
                title={props.closeButtonTitle}
              />
            </div>
          </div>
        </div>
      </div>,
      modalRoot
    );
  };

  const getModal = () => {
    console.log("getModal");
    if (props.modalName in ModalService.modals) return getModalPortal();
    else return null;
  };
  return getModal();
};

export default observer(Modal);
