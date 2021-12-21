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
  setModalState: ({}: ModalState) => void;
}

const App: React.FC<IApp> = (props) => {
  return (
    <Router>
      <div className="App">
        {props.modalState.createEditModal.open && (
          <CreateEditPopUpContainer
            setModalState={props.setModalState}
            modalState={props.modalState}
            setName={props.setName}
            name={props.name}
            setDescription={props.setDescription}
            description={props.description}
            itemId={props.itemId}
            categorieList={props.categorieList}
          />
        )}
        {props.modalState.deleteModal.open && (
          <DeleteItemPopUp
            deleteTask={props.deleteTask}
            deleteCategorie={props.deleteCategorie}
            setModalState={props.setModalState}
            section={props.section}
            itemId={props.itemId}
            modalState={props.modalState}
            name={props.name}
          />
        )}
        <HeaderContainer
          setTaskSection={props.setTaskSection}
          setCategorieSection={props.setCategorieSection}
          section={props.section}
          setModalState={props.setModalState}
        />
        <div className="Content">
          <Routes>
            <Route
              path="/tasks"
              element={
                <TasksListContainer
                  setItemId={props.setItemId}
                  setModalState={props.setModalState}
                  taskList={props.taskList}
                  setName={props.setName}
                  setDescription={props.setDescription}
                />
              }
            />
            <Route
              path="/categories"
              element={
                <CategoriesListContainer
                  setItemId={props.setItemId}
                  setModalState={props.setModalState}
                  categorieList={props.categorieList}
                  setName={props.setName}
                  setDescription={props.setDescription}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
