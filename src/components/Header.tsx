import React from 'react';
import {NavLink} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import './Header.css';
import CreateNewTaskButton from './CreateNewTaskButton';
import CreateNewCategorieButton from './CreateNewCategorieButton';
import {getTasks} from "../state"


interface popUpProps {
  toggleCreateTaskPopUp: () => void;
  toggleCreateCategoriePopUp: () => void;
  setCategorieSection:() => void;
  setTaskSection:() => void;
}

const Header: React.FC<popUpProps>= (props) => {
    let activeStyle = {
        color: "#8FB6FF"
      };
      
       return (
         <>
            <div className='Header'>
              <button onClick={getTasks}>asdas</button>
                <div className='Header__Logo'>
                    <div className="Header__Logo-AppName">ToDo List</div>
                    <div className="Header__Logo__Actions">
                            <NavLink  to='/tasks' onClick={props.setTaskSection}  className={"Header__Logo__Actions-Tasks"} style={({ isActive }) =>
                  isActive ? activeStyle : {}} >Задачи</NavLink> 
                            <p style={{fontSize:"36px"}}>|</p>
                            <NavLink  to='/categories' onClick={props.setCategorieSection} className="Header__Logo__Actions-Categories" style={({ isActive }) =>
                  isActive ? activeStyle : {}}>Категории</NavLink>
                  </div>           
                </div> 
                <Routes>
                  <Route path="/tasks" element={<CreateNewTaskButton toggleCreateTaskPopUp={props.toggleCreateTaskPopUp} 
                  />}></Route>
                  <Route path="/categories" element={<CreateNewCategorieButton toggleCreateCategoriePopUp={props.toggleCreateCategoriePopUp}/>}></Route>
                </Routes>            
            </div>
           
            </>
    );
};

export default Header;