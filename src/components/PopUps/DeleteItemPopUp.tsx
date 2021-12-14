import React from 'react';


interface popUpProps {
    togglePopUp: () => void;
    section: boolean;
  }

const DeleteItemPopUp: React.FC<popUpProps> = (props) => {
    return (
        <div className="PopUp-Wrapper">
        
        <div className='PopUp'> 
            <div className='PopUp__Article-Name' >Удаление  {props.section ? <span> задачи </span> : <span> категории </span> } </div>
            <div className="PopUp__Main-small" style={{color:"black"}}>
                        <div className="PopUp__Main-Description-small">Вы уверены, что хотите удалить  
                         {props.section ? <span> задачу “Задача1”?</span> : <span> категорию “Категория1”?</span> }  </div> 
                        <div className="PopUp__buttons">
                            <div className='PopUp__buttons-create'> 
                                <button type='submit' onClick={() => console.log(props.section)} >Да</button>
                            </div>
                            <div  className='PopUp__buttons-close'> 
                                <button type='submit' onClick={props.togglePopUp}>Нет</button>
                            </div>
                         </div>
            </div> 
            </div>
        </div>  
    );
};

export default DeleteItemPopUp;