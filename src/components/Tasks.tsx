import React from 'react';
import folderImg from "../images/Folder.svg"
import editImg from "../images/Edit.svg"
import deleteImg from "../images/Delete.svg"
import "./Tasks.css"


interface TaskActionsPopUp{
    toggleEditPopUp: () => void,
    toggleDeletePopUp: () => void
}

const Tasks:React.FC = () => {

    return (
        <div className="Content">
            <div className='TaskWrapper'>
                <div className="TaskWrapper__Info">
                    <div className="TaskWrapper__Info__Name" >
                        <div className="TaskWrapper__Info__Name-name">Задача1</div>
                        <a className="TaskWrapper__Info__Name-folder" href='#'><img src={folderImg} alt="" />Категория1</a>

                    </div>
                    <div className="TaskWrapper__Info__Description" >Описание задачи, может быть длинным</div>
                </div>
                <div className="TaskWrapper__Actions">
                    <button className="TaskWrapper__Actions-Edit"> <img src={editImg} alt="" /></button>
                    <button className="TaskWrapper__Actions-Delete"> <img src={deleteImg} alt="" /></button>
                </div>
            
            </div>
            <div className='TaskWrapper'>
                <div className="TaskWrapper__Info">
                    <div className="TaskWrapper__Info__Name" >
                        <div className="TaskWrapper__Info__Name-name">Задача2</div>
                    </div>
                    <div className="TaskWrapper__Info__Description" >Описание задачи, может быть длинным</div>
                </div>
                <div className="TaskWrapper__Actions">
                    <button className="TaskWrapper__Actions-Edit"> <img src={editImg} alt="" /></button>
                    <button className="TaskWrapper__Actions-Delete"> <img src={deleteImg} alt="" /></button>
                </div>
            
            </div>
            <div className='TaskWrapper'>
                <div className="TaskWrapper__Info">
                    <div className="TaskWrapper__Info__Name" >
                        <div className="TaskWrapper__Info__Name-name">Задача2</div>
                    </div>
                    <div className="TaskWrapper__Info__Description" >Описание задачи, может быть длинным</div>
                </div>
                <div className="TaskWrapper__Actions">
                    <button className="TaskWrapper__Actions-Edit"> <img src={editImg} alt="" /></button>
                    <button className="TaskWrapper__Actions-Delete"> <img src={deleteImg} alt="" /></button>
                </div>
            
            </div>
            <div className='TaskWrapper'>
                <div className="TaskWrapper__Info">
                    <div className="TaskWrapper__Info__Name" >
                        <div className="TaskWrapper__Info__Name-name">Задача2</div>
                    </div>
                    <div className="TaskWrapper__Info__Description" >Описание задачи, может быть длинным</div>
                </div>
                <div className="TaskWrapper__Actions">
                    <button className="TaskWrapper__Actions-Edit"> <img src={editImg} alt="" /></button>
                    <button className="TaskWrapper__Actions-Delete"> <img src={deleteImg} alt="" /></button>
                </div>
            
            </div>
        </div>
    );
};

export default Tasks;