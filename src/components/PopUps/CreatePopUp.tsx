import React from 'react';
import "./StylePopUp.css"

const CreatePopUp = () => {
    return (
        <div className='PopUp'> 
          <div className='PopUp__Article' >
              <div className="PopUp__Article-Name">Создание задачи</div>
              <button className="PopUp__Article-Close">X</button>
              
              </div>
            <div className="PopUp__Main">
                <input type="text" className="PopUp__Main-Name" />
                <input type="text" className="PopUp__Main-Categorie" />
            </div>
            <input type="text" className="description" />
            <div className="PopUp__buttons">
                <button className='PopUp__buttons-create'>Создать</button>
                <button className='PopUp__buttons-close'>Закрыть</button>
            </div>
         
            
        </div>
    );
};

export default CreatePopUp;