import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import TasksListContainer from "./components/ListTasks/TasksListContainer";
import CategoriesListContainer from "./components/ListCategories/CategoriesListContainer";
import { ModalState } from "./AppContainer";
import { ICategoryItem } from "./models/ICategoryItem";
import { ITaskItem } from "./models/ITaskItem";
import ModalContainer from "./components/Modal/ModalContainer";

interface IApp {
  section: boolean;
  taskList?: ITaskItem[];
  categorieList?: ICategoryItem[];
  modalState: ModalState;
  taskItem: ITaskItem;
  categoryItem: ICategoryItem;
  setTaskSection: () => void;
  setCategorieSection: () => void;
  setModalState: (state: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  setCategoryItem: (state: ICategoryItem) => void;
}

const App: React.FC<IApp> = (props) => {
  return (
    <Router>
      <div className="App">
        {props.modalState.createEditModal.open && <ModalContainer {...props} />}
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
