import React from "react";
import ReactDOM from "react-dom";
import ImgButton from "../ImgButton";
import closeImg from "../../images/Close.svg";
import { IModal } from "../../models/IModal";
import "./Modal.css";
import ModalService from "../../stores/ModalStore";
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
        </div>
      </div>,
      modalRoot
    );
  };

  const getModal = () => {
    if (props.modalName in ModalService.modals) return getModalPortal();
    else return null;
  };
  return getModal();
};

export default observer(Modal);
