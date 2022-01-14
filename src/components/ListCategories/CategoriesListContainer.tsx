import React from "react";
import { ICategoryItem } from "../../models/ICategoryItem";
import CategoriesList from "./CategoriesList";
import { ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";
import ModalService from "../../Services/ModalService";
import ConfirmModal, {
  IConfirmModal,
} from "../Modals/Forms/ConfirmForm/ConfirmModal";
import { modalNamesEnum } from "../../models/enum/modalNames";
import { ModalRegistry } from "../../models/enum/modalNameRegistry";

interface ICategoriesListContainer {
  setModalState: (state: ModalState) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  categoryItem: ICategoryItem;
  categorieList?: ICategoryItem[];
}

const CategoriesListContainer = (props: ICategoriesListContainer) => {
  const onEdit = (category: ICategoryItem) => {
    props.setModalState(modalStateValues.Open.OpenEditCategory);
    props.setCategoryItem({
      id: category.id,
      name: category.name,
      description: category.description,
    });
  };
  const deleteCategory = (category: ICategoryItem) => {
    props.setCategoryItem({
      id: category.id,
      name: category.name,
    });
  };

  const onDelete = () => {
    props.setModalState(modalStateValues.Open.OpenDeleteCategory);
    ModalService.showModal("confirmModal", {});
  };
  const confirmModalChildren = () => {
    return <div>Вы уверены что хотите удалить </div>;
  };

  return (
    <>
      <CategoriesList {...props} onEdit={onEdit} onDelete={onDelete} />
      <ConfirmModal
        onCloseModal={ModalService.closeModal("confirmModal")}
        onSubmitClick={deleteCategory}
        title="Удаление"
        modalName="confirmModal"
        children={confirmModalChildren}
        submitButtonTitle="Да"
        closeButtonTitle="Нет"
      ></ConfirmModal>
    </>
  );
};

export default CategoriesListContainer;
