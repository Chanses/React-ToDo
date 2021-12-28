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
  const onEdit = (category: ICategoryItem) => {
    props.setModalState(modalStateValues.Open.OpenEditCategory);
    props.setCategoryItem({
      id: category.id,
      name: category.name,
      description: category.description,
    });
  };
  const onDelete = (category: ICategoryItem) => {
    props.setModalState(modalStateValues.Open.OpenDeleteCategory);
    props.setCategoryItem({
      id: category.id,
      name: category.name,
    });
  };

  return <CategoriesList {...props} onEdit={onEdit} onDelete={onDelete} />;
};

export default CategoriesListContainer;
