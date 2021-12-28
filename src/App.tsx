import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import TasksListContainer from "./components/ListTasks/TasksListContainer";
import CategoriesListContainer from "./components/ListCategories/CategoriesListContainer";
import { ITask } from "./components/ListTasks/Task";
import { ModalState } from "./AppContainer";

import { ICategoryItem } from "./models/ICategoryItem";

import { ITaskItem } from "./models/ITaskItem";
import EntityModalContainer from "./components/Modals/EntityModal/EntityModalContainer";
import ConfirmModalContainer from "./components/Modals/ConfirmModal/ConfirmModalContainer";

interface IApp {
  section: boolean;
  taskList?: ITask[];
  categorieList?: ICategoryItem[];
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
          <EntityModalContainer {...props} />
        )}
        {props.modalState.deleteModal.open && (
          <ConfirmModalContainer {...props} />
        )}
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
