import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import CreateCategoriePopUp from './components/PopUps/CreateCategoriePopUp';
import CreateTaskPopUp from './components/PopUps/CreateTaskPopUp';
import Tasks from './components/Tasks';


function App() {
  const [isOpenCreateTask,setIsOpenCreateTask] = useState<boolean>(false);
  const [isOpenCreateCategorie,setIsOpenCreateCategorie] = useState<boolean>(false);

      function toggleCreateTaskPopUp() {
        setIsOpenCreateTask(!isOpenCreateTask);
      }
      function toggleCreateCategoriePopUp() {
        setIsOpenCreateCategorie(!isOpenCreateCategorie);
      }
   return (
    <Router>
      <div className="App">
      {isOpenCreateTask && <CreateTaskPopUp  togglePopUp = {toggleCreateTaskPopUp}/>} 
      {isOpenCreateCategorie && <CreateCategoriePopUp  togglePopUp = {toggleCreateCategoriePopUp}/>} 
          <Header toggleCreateTaskPopUp={toggleCreateTaskPopUp} toggleCreateCategoriePopUp={toggleCreateCategoriePopUp}/>
        <div className="Content">     
          <Routes>
              <Route path ="/tasks" element={<Tasks/>}/>
              <Route path ="/categories"element={<Categories/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
