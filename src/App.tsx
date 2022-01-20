import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import TasksListContainer from "./components/ListTasks/TasksListContainer";
import CategoriesListContainer from "./components/ListCategories/CategoriesListContainer";
import { ModalState } from "./AppContainer";
import { ICategoryItem } from "./models/ICategoryItem";
import { ITaskItem } from "./models/ITaskItem";

interface IApp {
  taskList?: ITaskItem[];
  categorieList?: ICategoryItem[];
  setModalState: (state: ModalState) => void;
}

const App: React.FC<IApp> = (props) => {
  return (
    <Router>
      <div className="App">
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
