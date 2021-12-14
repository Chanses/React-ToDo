import React from 'react';
import folderImg from "../images/Folder.svg"
import editImg from "../images/Edit.svg"
import deleteImg from "../images/Delete.svg"



let openRequest = indexedDB.open("ToDo", 1);

const Task:React.FC = (props) => {
    return (
        <div>
            <div className='TaskWrapper'>
                <div className="TaskWrapper__Info">
                    <div className="TaskWrapper__Info__Name" >
                        <div className="TaskWrapper__Info__Name-name">Задача1</div>
                        <p className="TaskWrapper__Info__Name-folder" ><img src={folderImg} alt="" />Категория1</p>
                    </div>
                    <div className="TaskWrapper__Info__Description" >Описание задачи, может быть длинным</div>
                </div>
                <div className="TaskWrapper__Actions">
                    {/* <button className="TaskWrapper__Actions-Edit" onClick={props.toggleTaskPopUp} > <img src={editImg} alt="" /></button>
                    <button className="TaskWrapper__Actions-Delete" onClick={props.toggleDeletePopUp}> <img src={deleteImg} alt="" /></button> */}
                </div>
                
            </div>
        </div>
    );
};

export default Task;