import React from "react";

interface IDeleteCategoryButton {
  confirmDeleteCategory: () => void;
}

const DeleteCategoryButton = (props: IDeleteCategoryButton) => {
  return (
    <button
      name="Категории"
      type="submit"
      onClick={props.confirmDeleteCategory}
    >
      Да
    </button>
  );
};

export default DeleteCategoryButton;
