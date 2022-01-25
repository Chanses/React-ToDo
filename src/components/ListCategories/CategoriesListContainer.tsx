import React from "react";
import { ICategoryItem } from "../../models/ICategoryItem";
import CategoriesList from "./CategoriesList";
import ModalStore from "../stores/ModalStore";
import ConfirmModal from "../Modals/Forms/ConfirmForm/ConfirmModal";
import {
  deleteCategory,
  editCategory,
  getCategories,
} from "../Services/dbService";
import { observer } from "mobx-react";
import CategoryStore from "../stores/CategoryStore";
import CategoryModal from "../Modals/CategoryModal";

const CategoriesListContainer = () => {
  const handleLoadCategory = (category: ICategoryItem[]) => {
    CategoryStore.setCategoryList(category);
  };

  const onEdit = (category: ICategoryItem) => {
    CategoryStore.categoryItem = category;
    ModalStore.showModal("categoryModal", {
      title: "Редактирование категории",
      modalName: "categoryModal",
      submitButtonTitle: "Сохранить",
      closeButtonTitle: "Закрыть",
      category: CategoryStore.categoryItem,
      onSubmitClick: () => {
        console.log(category);
        editCategory(
          CategoryStore.categoryItem.id,
          CategoryStore.categoryItem.name,
          CategoryStore.categoryItem.description
        );
        ModalStore.closeModal("categoryModal");
        CategoryStore.categoryItem = { id: "", name: "", description: "" };
        getCategories(handleLoadCategory);
      },
    });
  };

  const onDelete = (category: ICategoryItem) => {
    ModalStore.showModal("confirmModal", {
      title: "Удаление категории",
      modalName: "confirmModal",
      submitButtonTitle: "Да",
      closeButtonTitle: "Нет",
      onSubmitClick: () => {
        deleteCategory(category.id);
        ModalStore.closeModal("confirmModal");
        getCategories(handleLoadCategory);
      },
      category: category,
      confirmText: `Вы уверены что хотите удалить категорию "${category.name}"`,
    });
  };

  return (
    <>
      <CategoriesList
        onEdit={onEdit}
        onDelete={onDelete}
        categoriesList={CategoryStore.categoryList}
      />
      <CategoryModal {...ModalStore.modals.categoryModal!} />
      <ConfirmModal {...ModalStore.modals.confirmModal!} />
    </>
  );
};

export default observer(CategoriesListContainer);
