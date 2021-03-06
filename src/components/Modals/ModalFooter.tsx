import { observer } from "mobx-react-lite";
import React from "react";
import { ModalRegistry } from "../../models/enum/modalNameRegistry";
import ModalService from "../../stores/ModalStore";
import Button from "../Button";

interface IModalProps {
  submitButtonTitle: string;
  closeButtonTitle: string;
  modalName: keyof ModalRegistry;
  disabled?: boolean;
}

const ModalFooter = (props: IModalProps) => {
  return (
    <div className="Modal__buttons">
      <div className="Modal__buttons-create">
        <Button
          type={"submit"}
          title={props.submitButtonTitle}
          disabled={props.disabled}
        />
      </div>
      <div className="Modal__buttons-close">
        <Button
          type={"reset"}
          onClick={() => ModalService.closeModal(props.modalName)}
          title={props.closeButtonTitle}
        />
      </div>
    </div>
  );
};

export default observer(ModalFooter);
