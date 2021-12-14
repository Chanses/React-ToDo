import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import CreateCategoriePopUp from './components/PopUps/CreateCategoriePopUp';
import CreateTaskPopUp from './components/PopUps/CreateTaskPopUp';
import DeleteItemPopUp from './components/PopUps/DeleteItemPopUp';
import Tasks from './components/Tasks';






function App() {
  const [isOpenCreateTask,setIsOpenCreateTask] = useState<boolean>(false);
  const [isOpenCreateCategorie,setIsOpenCreateCategorie] = useState<boolean>(false);
  const [isOpenDelete,setIsOpenDelete] = useState<boolean>(false);
  const [section,setSection] = useState<boolean>(true);
  
      function toggleCreateTaskPopUp() {
        setIsOpenCreateTask(!isOpenCreateTask);
      }
      function toggleCreateCategoriePopUp() {
        setIsOpenCreateCategorie(!isOpenCreateCategorie);
      }
      function toggleDeletePopUp() {
        setIsOpenDelete(!isOpenDelete);
      }
      function setTaskSection(){
        setSection(true);
      }
      function setCategorieSection(){
        setSection(false);
      }
      
   return (
    <Router>
      <div className="App">
      {isOpenCreateTask && <CreateTaskPopUp  togglePopUp = {toggleCreateTaskPopUp} action={section}/>} 
      {isOpenCreateCategorie && <CreateCategoriePopUp  togglePopUp = {toggleCreateCategoriePopUp} action='create'/>} 
      {isOpenDelete && <DeleteItemPopUp  togglePopUp = {toggleDeletePopUp} section={section}/>} 
          <Header toggleCreateTaskPopUp={toggleCreateTaskPopUp} toggleCreateCategoriePopUp={toggleCreateCategoriePopUp}
           setTaskSection={setTaskSection} setCategorieSection={setCategorieSection}/>
        <div className="Content">     
          <Routes>
              <Route path ="/tasks" element={<Tasks toggleTaskPopUp={toggleCreateTaskPopUp} toggleDeletePopUp={toggleDeletePopUp}/>}/>
              <Route path ="/categories"element={<Categories toggleTaskPopUp={toggleCreateCategoriePopUp} toggleDeletePopUp={toggleDeletePopUp}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
