import React from "react";
import { ICategoryItem } from "../../models/ICategoryItem";
import CategoriesList from "./CategoriesList";
import ModalStore from "../stores/ModalStore";
import ConfirmModal from "../Modals/Forms/ConfirmForm/ConfirmModal";
import { deleteCategorie, editCategory } from "../../dbService";
import CategoryForm from "../Modals/Forms/CategoryForm";
import { observer } from "mobx-react";
import CategoryStore from "../stores/CategoryStore";
import ModalFooter from "../Modals/ModalFooter";

interface ICategoriesListContainer {}

const CategoriesListContainer = (props: ICategoriesListContainer) => {
  const onEdit = (category: ICategoryItem) => {
    console.log(CategoryStore.categoryList);
    CategoryStore.category.name = category.name;
    CategoryStore.category.description = category.description;
    ModalStore.showModal("categoryModal", {
      title: "Редактирование категории",
      modalName: "categoryModal",
      children: (
        <CategoryForm
          modalName="categoryModal"
          submitButtonTitle="Сохранить"
          closeButtonTitle="Закрыть"
          onSubmitClick={() => {
            editCategory(
              category.id,
              CategoryStore.category.name,
              CategoryStore.category.description
            );
            ModalStore.closeModal("categoryModal");
          }}
        />
      ),
    });
  };

  const onDelete = (category: ICategoryItem) => {
    ModalStore.showModal("confirmModal", {
      title: "Удаление категории",
      modalName: "confirmModal",
      children: (
        <>
          <div className="Confirm-text">{`Вы уверены что хотите удалить категорию "${category.name}"`}</div>
          <ModalFooter
            onSubmitClick={() => {
              deleteCategorie(category.id);
              ModalStore.closeModal("confirmModal");
            }}
            submitButtonTitle="Да"
            closeButtonTitle="Нет"
            modalName="confirmModal"
          />
        </>
      ),
    });
  };

  return (
    <>
      <CategoriesList
        onEdit={onEdit}
        onDelete={onDelete}
        categoriesList={CategoryStore.categoryList}
      />
      <ConfirmModal {...ModalStore.modals.categoryModal!} />
      <ConfirmModal {...ModalStore.modals.confirmModal!} />
    </>
  );
};

export default observer(CategoriesListContainer);
