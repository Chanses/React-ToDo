import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import TasksListContainer from "./components/ListTasks/TasksListContainer";
import CategoriesListContainer from "./components/ListCategories/CategoriesListContainer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <HeaderContainer />
        <div className="Content">
          <Routes>
            <Route path="/tasks" element={<TasksListContainer />} />
            <Route path="/categories" element={<CategoriesListContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
