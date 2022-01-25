import React from "react";
import "./CategoriesStyles.css";
import Category from "./Category";
import { ICategoryItem } from "../../models/ICategoryItem";

interface ICategoriesList {
  categoriesList?: ICategoryItem[];
  onEdit: (category: ICategoryItem) => void;
  onDelete: (category: ICategoryItem) => void;
}

const CategoriesList = (props: ICategoriesList) => {
  return (
    <div>
      {props.categoriesList?.map((category) => (
        <Category {...props} category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoriesList;
