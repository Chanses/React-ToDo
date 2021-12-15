import React from 'react';
interface popUpProps {
    toggleCreateCategoriePopUp: () => void;
    toogleEditHandlerCreate:() => void;
  }


const CreateNewCategorieButton:React.FC<popUpProps> = (props) => {
    return (
        <>
        <button className='Header__AddNewTask' onClick={() => {props.toggleCreateCategoriePopUp(); props.toogleEditHandlerCreate();}}>Добавить категорию</button>
        </>
    );
};

export default CreateNewCategorieButton;