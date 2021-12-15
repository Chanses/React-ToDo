import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import DeleteItemPopUp from "./components/PopUps/DeleteItemPopUp";
import TasksListContainer from "./components/ListTasks/TasksListContainer";
import CreateCategoriePopUpContainer from "./components/PopUps/CreateCategoriePopUpContainer";
import CreateTaskPopUpContainer from "./components/PopUps/CreateTaskPopUpContainer";
import CategoriesListContainer from "./components/ListCategories/CategoriesListContainer";

interface IApp {
  isOpenCreateTask: boolean;
  isOpenCreateCategorie: boolean;
  isOpenDelete: boolean;
  editHander: boolean;
  section: boolean;
  toggleCreateTaskPopUp: () => void;
  toogleEditHandlerCreate: () => void;
  toogleEditHandlerEdit: () => void;
  toggleDeletePopUp: () => void;
  toggleCreateCategoriePopUp: () => void;
  setTaskSection: () => void;
  setCategorieSection: () => void;
  deleteCategorie: (categorieId: string) => void;
}

const App: React.FC<IApp> = (props) => {
  return (
    <Router>
      <div className="App">
        {props.isOpenCreateTask && (
          <CreateTaskPopUpContainer
            togglePopUp={props.toggleCreateTaskPopUp}
            action={props.editHander}
          />
        )}
        {props.isOpenCreateCategorie && (
          <CreateCategoriePopUpContainer
            togglePopUp={props.toggleCreateCategoriePopUp}
            action={props.editHander}
          />
        )}
        {props.isOpenDelete && (
          <DeleteItemPopUp
            togglePopUp={props.toggleDeletePopUp}
            section={props.section}
            deleteCategorie={props.deleteCategorie}
          />
        )}
        <HeaderContainer
          toggleCreateTaskPopUp={props.toggleCreateTaskPopUp}
          toggleCreateCategoriePopUp={props.toggleCreateCategoriePopUp}
          setTaskSection={props.setTaskSection}
          setCategorieSection={props.setCategorieSection}
          toogleEditHandlerCreate={props.toogleEditHandlerCreate}
        />
        <div className="Content">
          <Routes>
            <Route
              path="/tasks"
              element={
                <TasksListContainer
                  toggleTaskPopUp={props.toggleCreateTaskPopUp}
                  toggleDeletePopUp={props.toggleDeletePopUp}
                  toogleEditHandlerEdit={props.toogleEditHandlerEdit}
                />
              }
            />
            <Route
              path="/categories"
              element={
                <CategoriesListContainer
                  toggleTaskPopUp={props.toggleCreateCategoriePopUp}
                  toggleDeletePopUp={props.toggleDeletePopUp}
                  toogleEditHandlerEdit={props.toogleEditHandlerEdit}
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
