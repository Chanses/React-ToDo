import React from 'react';
interface popUpProps {
    toggleCreateCategoriePopUp: () => void;
  }


const CreateNewCategorieButton:React.FC<popUpProps> = (props) => {
    return (
        <>
        <button className='Header__AddNewTask' onClick={props.toggleCreateCategoriePopUp}>Добавить категорию</button>
        </>
    );
};

export default CreateNewCategorieButton;