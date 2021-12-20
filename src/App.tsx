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
  itemNameValue: string;
  itemDescriptionValue: string;
  taskList?: ITask[];
  categorieList?: ICategorie[];
  modalState: ModalState;
  setTaskSection: () => void;
  setCategorieSection: () => void;
  setItemId: (id: string) => void;
  setItemNameValue: (name: string) => void;
  setItemDescriptionValue: (name: string) => void;
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
            setItemNameValue={props.setItemNameValue}
            setItemDescriptionValue={props.setItemDescriptionValue}
            itemNameValue={props.itemNameValue}
            itemDescriptionValue={props.itemDescriptionValue}
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
                  setItemNameValue={props.setItemNameValue}
                  setDescriptionName={props.setItemDescriptionValue}
                  setModalState={props.setModalState}
                  taskList={props.taskList}
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
