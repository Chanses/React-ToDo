import React from "react";
import { ICategoryItem } from "../../models/ICategoryItem";
import { IModal } from "../../models/IModal";
import ModalStore from "../stores/ModalStore";
import CategoryForm from "./Forms/CategoryForm";
import Modal from "./Modal";

export interface ICategoryModal extends IModal {
  onSubmitClick: (value?: any) => void;
  category: ICategoryItem;
}
const CategoryModal = (props: ICategoryModal) => {
  const Form = (
    <CategoryForm {...props} {...ModalStore.modals[props.modalName]} />
  );
  return <Modal {...props}> {Form}</Modal>;
};

export default CategoryModal;
