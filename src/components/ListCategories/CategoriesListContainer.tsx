import React, { useEffect, useState } from "react";
import { ICategoryItem } from "../../models/ICategoryItem";
import CategoriesList from "./CategoriesList";
import { ModalState } from "../../AppContainer";
import ModalService from "../../Services/ModalService";
import ConfirmModal from "../Modals/Forms/ConfirmForm/ConfirmModal";
import { deleteCategorie, editCategory, getCategories } from "../../dbService";
import { modalResultEnum } from "../../models/enum/modalResultEnum";
import { modalActionsType } from "../../models/enum/modalActionsType";
import CategoryForm from "../Modals/Forms/CategoryForm";
import { observer } from "mobx-react";

interface ICategoriesListContainer {
  setModalState: (state: ModalState) => void;
}

const CategoriesListContainer = (props: ICategoriesListContainer) => {
  const [categoryItem, setCategoryItem] = useState<ICategoryItem>({
    id: "",
    name: "",
    description: "",
  });
  const [categorieList, setCategorieList] = useState<ICategoryItem[]>();
  const handleLoadCategorie = (categorie: ICategoryItem[]) =>
    setCategorieList(categorie);

  useEffect(() => {
    getCategories(handleLoadCategorie);
  }, [
    ModalService.isOpen("confirmModal"),
    ModalService.isOpen("categoryModal"),
  ]);

  const onEdit = (category: ICategoryItem) => {
    let categoryModalChildren = (
      <form action="">
        <input type="text" />
      </form>
    );

    ModalService.showModal("categoryModal", {
      onSubmitClick: () =>
        editCategory(category.id, "editedName", "editedDescription"),
      title: "Редактирование категории",
      modalName: "categoryModal",
      children: categoryModalChildren,
      submitButtonTitle: "Сохранить",
      closeButtonTitle: "Закрыть",
    });
  };

  const onDelete = (category: ICategoryItem) => {
    let confirmModalChildren = `Вы уверены что хотите удалить категорию "${category.name}"`;

    ModalService.showModal("confirmModal", {
      onSubmitClick: () => {
        deleteCategorie(category.id);
        ModalService.closeModal("confirmModal");
      },
      title: "Удаление категории",
      modalName: "confirmModal",
      children: confirmModalChildren,
      submitButtonTitle: "Да",
      closeButtonTitle: "Нет",
    });
  };

  return (
    <>
      <CategoriesList
        {...props}
        onEdit={onEdit}
        onDelete={onDelete}
        categoryItem={categoryItem}
        setCategoryItem={setCategoryItem}
        categorieList={categorieList}
      />
      <ConfirmModal {...ModalService.modals.categoryModal!} />
      <ConfirmModal {...ModalService.modals.confirmModal!} />
    </>
  );
};

export default observer(CategoriesListContainer);
