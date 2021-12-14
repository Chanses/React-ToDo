import React from 'react';
import "./Categories.css"
import editImg from "../images/Edit.svg"
import deleteImg from "../images/Delete.svg"

interface TaskActionsPopUp{
    toggleTaskPopUp: () => void;
    toggleDeletePopUp: () => void;
 
}

const Categories:React.FC<TaskActionsPopUp> = (props) => {
    return (
        <div>
            
         <div className='CategoriesWrapper'>
                <div className="TaskWrapper__Info">
                    <div className="TaskWrapper__Info__Name" >
                        <div className="TaskWrapper__Info__Name-name">Категория1</div>
                     </div>
                     
                    <div className="TaskWrapper__Info__Description" >Описание категории, может быть длинным</div>
                </div>
                <div className="TaskWrapper__Actions">
                    <button className="TaskWrapper__Actions-Edit" onClick={props.toggleTaskPopUp}> <img src={editImg} alt="" /></button>
                    <button className="TaskWrapper__Actions-Delete" onClick={props.toggleDeletePopUp}> <img src={deleteImg} alt="" /></button>
                </div>
            
            </div>
            <div className='CategoriesWrapper'>
                <div className="TaskWrapper__Info">
                    <div className="TaskWrapper__Info__Name" >
                        <div className="TaskWrapper__Info__Name-name">Категория2</div>
                    </div>
                    <div className="TaskWrapper__Info__Description" >Описание категории, может быть длинным</div>
                </div>
                <div className="TaskWrapper__Actions">
                    <button className="TaskWrapper__Actions-Edit"> <img src={editImg} alt="" /></button>
                    <button className="TaskWrapper__Actions-Delete"> <img src={deleteImg} alt="" /></button>
                </div>
            
            </div>
            <div className='CategoriesWrapper'>
                <div className="TaskWrapper__Info">
                    <div className="TaskWrapper__Info__Name" >
                        <div className="TaskWrapper__Info__Name-name">Категория2</div>
                    </div>
                    <div className="TaskWrapper__Info__Description" >Описание категории, может быть длинным</div>
                </div>
                <div className="TaskWrapper__Actions">
                    <button className="TaskWrapper__Actions-Edit"> <img src={editImg} alt="" /></button>
                    <button className="TaskWrapper__Actions-Delete"> <img src={deleteImg} alt="" /></button>
                </div>
            
            </div>
            <div className='CategoriesWrapper'>
                <div className="TaskWrapper__Info">
                    <div className="TaskWrapper__Info__Name" >
                        <div className="TaskWrapper__Info__Name-name">Категория2</div>
                    </div>
                    <div className="TaskWrapper__Info__Description" >Описание категории, может быть длинным</div>
                </div>
                <div className="TaskWrapper__Actions">
                    <button className="TaskWrapper__Actions-Edit"> <img src={editImg} alt="" /></button>
                    <button className="TaskWrapper__Actions-Delete"> <img src={deleteImg} alt="" /></button>
                </div>
            
            </div>
        </div>
    );
};

export default Categories;