import React from "react";
import { IModal } from "../../models/IModal";
import { ITaskItem } from "../../models/ITaskItem";
import ModalStore from "../../stores/ModalStore";
import TaskForm from "./Forms/TaskForm";
import Modal from "./Modal";

export interface ITaskModal extends IModal {
  onSubmitClick: (value?: any) => void;
  task: ITaskItem;
}
const TaskModal = (props: ITaskModal) => {
  const Form = <TaskForm {...props} {...ModalStore.modals[props.modalName]} />;
  return <Modal {...props}>{Form}</Modal>;
};

export default TaskModal;
