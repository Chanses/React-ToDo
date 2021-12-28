import React from "react";
import { ICategoryItem } from "../../models/ICategoryItem";
import CategoriesList from "./CategoriesList";
import { ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";

interface ICategoriesListContainer {
  setModalState: (state: ModalState) => void;
  setCategoryItem: (state: ICategoryItem) => void;
  categoryItem: ICategoryItem;
  categorieList?: ICategoryItem[];
}

const CategoriesListContainer = (props: ICategoriesListContainer) => {
  const openEditModal = (id: string, name: string, description?: string) => {
    props.setModalState(modalStateValues.Open.OpenEditCategory);
    props.setCategoryItem({
      id: id,
      name: name,
      description: description,
    });
  };
  const openDeleteModal = (id: string, name: string) => {
    props.setModalState(modalStateValues.Open.OpenDeleteCategory);
    props.setCategoryItem({
      id: id,
      name: name,
    });
  };

  return (
    <CategoriesList
      {...props}
      openEditModal={openEditModal}
      openDeleteModal={openDeleteModal}
    />
  );
};

export default CategoriesListContainer;
