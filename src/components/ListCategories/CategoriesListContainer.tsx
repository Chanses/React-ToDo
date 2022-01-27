import React from "react";
import { ICategoryItem } from "../../models/ICategoryItem";
import CategoriesList from "./CategoriesList";
import ModalStore from "../../stores/ModalStore";
import ConfirmModal from "../Modals/Forms/ConfirmForm/ConfirmModal";
import { observer } from "mobx-react";
import CategoryStore from "../../stores/CategoryStore";
import CategoryModal from "../Modals/CategoryModal";
import dbService from "../../Services/dbService";

const CategoriesListContainer = () => {
  const handleLoadCategory = (category: ICategoryItem[]) => {
    CategoryStore.setCategoryList(category);
  };

  const onEdit = (category: ICategoryItem) => {
    ModalStore.showModal("categoryModal", {
      title: "Редактирование категории",
      modalName: "categoryModal",
      submitButtonTitle: "Сохранить",
      closeButtonTitle: "Закрыть",
      category: category,
      onSubmitClick: (formValues: ICategoryItem) => {
        dbService.putCategory({
          id: category.id,
          name: formValues.name,
          description: formValues.description,
        });
        ModalStore.closeModal("categoryModal");
        dbService.getCategories(handleLoadCategory);
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
        dbService.deleteCategory(category.id);
        ModalStore.closeModal("confirmModal");
        dbService.getCategories(handleLoadCategory);
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
