import React, { useRef, useState } from 'react';
import "./StylePopUp.css"
import closeImg from "../../images/Close.svg"
import {addTask} from "../../state"


interface popUpProps {
    togglePopUp: () => void;
    action: boolean;
  }

const CreatePopUp: React.FC<popUpProps>= (props) => {
    let invalidBorderStyle = {border: "2px red solid" }
    let invalidTextStyle = {color:"red" }
    const [isDirty,setIsDirty] = useState<boolean>(false);
    const [name,setName] = useState<string>("");
    const [description,setDescription] = useState<string>("");
    const [isInvalid,setIsInvalid] = useState<boolean>(true);
    
    const nameInput = useRef<any>();
    const descriptionInput = useRef<any>();
    
    const dirtyHandler = () =>{
        setIsDirty(true);
        name.length> 0 ? setIsInvalid(false) : setIsInvalid(true);
    }
    const descriptionHandler = () =>{
            setDescription(descriptionInput?.current?.value);
    }
   
    const validHandler = () =>{
        setIsDirty(true);
        setName(nameInput?.current?.value);
        name.length> -1 ? setIsInvalid(false) : setIsInvalid(true);
        
    }
    
    

    return (
        <div className="PopUp-Wrapper">
        
                <div className='PopUp'> 
                    <div className='PopUp__Article' >
                    <div className="PopUp__Article-Name ">{props.action ? <span>Создать</span> : <span>Редактировать</span>  }<span> задачу</span></div>
                    <button className="PopUp__Article-Close"><img src={closeImg} alt="" onClick={props.togglePopUp}/></button>
                    </div>
                    <div className="PopUp__Main">
                        <div className="PopUp__Main-Name DoubleInput">
                            <div className="PopUp__Main-Name__article ">
                                <div className='PopUp-InputsArticle'  style={(isDirty && isInvalid) ? invalidTextStyle : {}}>Имя<span style={{color:"red"}}>*</span> </div>
                            </div>
                            <form action="submit"> <input type="text" id="namefield" placeholder='Введите имя задачи'  
                            onFocus={dirtyHandler} onChange={validHandler} ref={nameInput} style={(isDirty && isInvalid) ? invalidBorderStyle : {}}/></form>
                        
                        </div>
                        <div className="PopUp__Main-Categorie DoubleInput">
                            <div className="PopUp__Main-Categorie__article ">
                                <div className='PopUp-InputsArticle'>Категория </div>
                            </div>
                            <div style={{display:"flex"}}>
                            <select  name="" id="">
                                    <option style={{display:"none"}} value=""  disabled >Выберите категорию</option>
                                    <option value="">lorem1</option>
                                    <option value="">lorem2 </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="PopUp__Main-Description">
                            <div className="PopUp__Main-Description">
                                <div className='PopUp-InputsArticle'>Описание </div>
                                <textarea  className="description" placeholder='Введите описание задачи' ref={descriptionInput} onChange={descriptionHandler}/> 
                            </div>
                        </div>
                    
                    <div className="PopUp__buttons">
                        <div className='PopUp__buttons-create'> 
                        {props.action  ?  <button onClick={ addTask(name,description)}>Создать</button> : <button type='submit' >Сохранить</button> }
                        </div>
                        <div  className='PopUp__buttons-close'>     
                            <button onClick={props.togglePopUp}>Закрыть</button>
                        </div>
                </div>
                
           </div> 
        </div>
    );
};

export default CreatePopUp;