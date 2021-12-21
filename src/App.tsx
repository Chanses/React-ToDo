import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import DeleteItemPopUp from "./components/PopUps/DeleteItemPopUp";
import TasksListContainer from "./components/ListTasks/TasksListContainer";
import CategoriesListContainer from "./components/ListCategories/CategoriesListContainer";
import { ITask } from "./components/ListTasks/Task";
import { ModalState } from "./AppContainer";
import CreateEditPopUpContainer from "./components/PopUps/СreateEditPopUpContainer";
import { ICategorie } from "./components/ListCategories/Categorie";

interface IApp {
  section: boolean;
  itemId: string;
  name: string;
  description: string;
  taskList?: ITask[];
  categorieList?: ICategorie[];
  modalState: ModalState;
  setTaskSection: () => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setCategorieSection: () => void;
  setItemId: (id: string) => void;
  deleteTask: (id: string) => void;
  deleteCategorie: (id: string) => void;
  setModalState: (state: ModalState) => void;
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
