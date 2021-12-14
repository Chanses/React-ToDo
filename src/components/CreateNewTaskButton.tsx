import React from 'react';



interface popUpProps {
    toggleCreateTaskPopUp: () => void;
  }

const CreateNewTaskButton:React.FC<popUpProps> = (props) =>{
    return(
      <>
      <button className='Header__AddNewTask' onClick={props.toggleCreateTaskPopUp}>Добавить задачу</button>
      </>
    )
  }

export default CreateNewTaskButton;