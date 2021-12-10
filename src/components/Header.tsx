import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';
const Header :React.FC= () => {
    let activeStyle = {
        color: "#8FB6FF"
      };
       return (
        <div className='Header'>

            <div className='Header__Logo'>
                <div className="Header__Logo-AppName">ToDo List</div>
                <div className="Header__Logo__Actions">
                        <NavLink  to='/tasks'  className={"Header__Logo__Actions-Tasks"} style={({ isActive }) =>
              isActive ? activeStyle : {}} >Задачи</NavLink> 
                        <p style={{fontSize:"36px"}}>|</p>
                        <NavLink  to='/categories' className="Header__Logo__Actions-Categories" style={({ isActive }) =>
              isActive ? activeStyle : {}}>Категории</NavLink>
              </div>           
            </div>
            <button className='Header__AddNewTask'>Добавить задачу</button>
        
        </div>
    );
};

export default Header;