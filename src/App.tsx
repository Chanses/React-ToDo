import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import DeleteItemPopUp from "./components/PopUps/DeleteItemPopUp";
import TasksListContainer from "./components/ListTasks/TasksListContainer";
import CategoriesListContainer from "./components/ListCategories/CategoriesListContainer";
import { ITask, ITaskItem } from "./components/ListTasks/Task";
import { ModalState } from "./AppContainer";
import CreateEditPopUpContainer from "./components/PopUps/СreateEditPopUpContainer";
import {
  ICategorie,
  ICategoryItem,
} from "./components/ListCategories/Categorie";

interface IApp {
  section: boolean;
  taskList?: ITask[];
  categorieList?: ICategorie[];
  modalState: ModalState;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  setTaskSection: () => void;
  setCategorieSection: () => void;
  deleteTask: (id: string) => void;
  deleteCategorie: (id: string) => void;
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
}

const App: React.FC<IApp> = (props) => {
  return (
    <Router>
      <div className="App">
        {props.modalState.createEditModal.open && (
          <CreateEditPopUpContainer {...props} />
        )}
        {props.modalState.deleteModal.open && <DeleteItemPopUp {...props} />}
        <HeaderContainer {...props} />
        <div className="Content">
          <Routes>
            <Route path="/tasks" element={<TasksListContainer {...props} />} />
            <Route
              path="/categories"
              element={<CategoriesListContainer {...props} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
