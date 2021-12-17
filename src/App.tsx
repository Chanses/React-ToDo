import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import DeleteItemPopUp from "./components/PopUps/DeleteItemPopUp";
import TasksListContainer, {
  ITaskItem,
} from "./components/ListTasks/TasksListContainer";

import CategoriesListContainer from "./components/ListCategories/CategoriesListContainer";
import CreateCategoriePopUpContainer from "./components/PopUps/CreateCategoriePopUpContainer";
import TaskPopUpContainer from "./components/PopUps/TaskPopUpContainer";
import { ITask } from "./components/ListTasks/Task";

interface IApp {
  isOpenCreateTask: boolean;
  isOpenCreateCategorie: boolean;
  isOpenDelete: boolean;
  editHander: boolean;
  section: boolean;
  itemId: string;
  itemNameValue: string;
  itemDescriptionValue: string;
  taskItem?: ITaskItem;
  taskList?: ITask[];
  toggleCreateTaskPopUp: () => void;
  toogleEditHandlerCreate: () => void;
  toogleEditHandlerEdit: () => void;
  toggleDeletePopUp: () => void;
  toggleCreateCategoriePopUp: () => void;
  setTaskSection: () => void;
  setCategorieSection: () => void;
  setItemId: (id: string) => void;
  setTaskItem: ({}: ITaskItem) => void;
  setItemNameValue: (name: string) => void;
  setItemDescriptionValue: (name: string) => void;
  deleteTask: (id: string) => void;
  deleteCategorie: (id: string) => void;
  // getTaskList: () => void;
}

const App: React.FC<IApp> = (props) => {
  return (
    <Router>
      <div className="App">
        {props.isOpenCreateTask && (
          <TaskPopUpContainer
            togglePopUp={props.toggleCreateTaskPopUp}
            action={props.editHander}
            taskItem={props.taskItem}
            itemNameValue={props.itemNameValue}
            itemDescriptionValue={props.itemDescriptionValue}
            setItemNameValue={props.setItemNameValue}
            setItemDescriptionValue={props.setItemDescriptionValue}
            // getTaskList={props.getTaskList}
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
            deleteTask={props.deleteTask}
            deleteCategorie={props.deleteCategorie}
            section={props.section}
            itemId={props.itemId}
          />
        )}
        <HeaderContainer
          toggleCreateTaskPopUp={props.toggleCreateTaskPopUp}
          toggleCreateCategoriePopUp={props.toggleCreateCategoriePopUp}
          setTaskSection={props.setTaskSection}
          setCategorieSection={props.setCategorieSection}
          toogleEditHandlerCreate={props.toogleEditHandlerCreate}
          section={props.section}
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
                  setItemId={props.setItemId}
                  setTaskItem={props.setTaskItem}
                  setItemNameValue={props.setItemNameValue}
                  setDescriptionName={props.setItemDescriptionValue}
                  taskItem={props.taskItem}
                  // getTaskList={props.getTaskList}
                  taskList={props.taskList}
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
                  setItemId={props.setItemId}
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
