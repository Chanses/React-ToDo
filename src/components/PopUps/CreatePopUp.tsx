import React, { useState } from 'react';
import "./StylePopUp.css"
import closeImg from "../../images/Close.svg"



interface popUpProps {
    togglePopUp: () => void;
  }

const CreatePopUp: React.FC<popUpProps>= (props) => {
    let invalidStyle = {border: "2px red solid"}
    const [isDirty,setIsDirty] = useState<boolean>(false);
    const [name,setName] = useState<string>("");

    let isInValid = false;
    const dirtyHandler = () =>{
      
        if(name.length>0) isInValid = true;
        setIsDirty(true);
        
            
    }
      

    return (
        
        <div className='PopUp'> 
            <div className='PopUp__Article' >
              <div className="PopUp__Article-Name ">Создание задачи</div>
              <button className="PopUp__Article-Close"><img src={closeImg} alt="" onClick={props.togglePopUp}/></button>
            </div>
            <div className="PopUp__Main">
                <div className="PopUp__Main-Name DoubleInput">
                    <div className="PopUp__Main-Name__article ">
                          <div className='PopUp-InputsArticle' >Имя<span style={{color:"red"}}>*</span> </div>
                    </div>
                    <form action="submit"> <input type="text"  placeholder='Введите имя задачи' required pattern=".{1,}" 
                    onFocus={dirtyHandler} onChange={event => setName(event.target.value)} style={isDirty || isInValid ? {} : invalidStyle}/></form>
                   
                </div>
                <div className="PopUp__Main-Categorie DoubleInput">
                    <div className="PopUp__Main-Categorie__article ">
                          <div className='PopUp-InputsArticle'>Категория </div>
                    </div>
                    <input type="text" className="PopUp__Main-Categorie"  placeholder='Выберите категорию'/> 
                </div>
            </div>

            <div className="PopUp__Main-Description">
                    <div className="PopUp__Main-Description">
                          <div className='PopUp-InputsArticle'>Описание </div>
                          <textarea  className="description" placeholder='Введите описание задачи'/>
                    </div>
                </div>
            
            <div className="PopUp__buttons">
                <div className='PopUp__buttons-create'> 
                     <button type='submit' >Создать</button>
                </div>
                <div  className='PopUp__buttons-close'> 
                     <button onClick={props.togglePopUp}>Закрыть</button>
                </div>
           </div>
        
            
        </div>
    );
};

export default CreatePopUp;