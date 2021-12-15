import React from 'react';
import folderImg from "../images/Folder.svg"
import editImg from "../images/Edit.svg"
import deleteImg from "../images/Delete.svg"
import "./Tasks.css"


interface TaskActionsPopUp{
    toggleTaskPopUp: () => void;
    toggleDeletePopUp: () => void;
    toogleEditHandlerEdit: () => void;
 
}
let openRequest = indexedDB.open("ToDo", 1);



const Tasks:React.FC<TaskActionsPopUp> = (props) => {
    

    return (
        <div className="Content">
            <div className='TaskWrapper'>
                <div className="TaskWrapper__Info">
                    <div className="TaskWrapper__Info__Name" >
                        <div className="TaskWrapper__Info__Name-name">Задача1</div>
                        <p className="TaskWrapper__Info__Name-folder" ><img src={folderImg} alt="" />Категория1</p>
                    </div>
                    <div className="TaskWrapper__Info__Description" >Описание задачи, может быть длинным</div>
                </div>
                <div className="TaskWrapper__Actions">
                    <button className="TaskWrapper__Actions-Edit" onClick={() => {props.toggleTaskPopUp(); props.toogleEditHandlerEdit();}} > <img src={editImg} alt="" /></button>
                    <button className="TaskWrapper__Actions-Delete" onClick={props.toggleDeletePopUp}> <img src={deleteImg} alt="" /></button>
                </div>
                
            </div>
        </div>
    );
};

export default Tasks;