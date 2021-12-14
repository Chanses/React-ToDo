import React, { useRef, useState } from 'react';
import "./StylePopUp.css"
import closeImg from "../../images/Close.svg"
import {addCategorie} from "../../state"



interface popUpProps {
    togglePopUp: () => void;
    action: string;
  }

const CreateCategoriePopUp: React.FC<popUpProps>= (props) => {
    let invalidBorderStyle = {border: "2px red solid" }
    let invalidTextStyle = {color:"red" }
    const [isDirty,setIsDirty] = useState<boolean>(false);
    const [isInvalid,setIsInvalid] = useState<boolean>(true);
    const [name,setName] = useState<string>("");
    const nameInput = useRef<any>();
    const [description,setDescription] = useState<string>("");
    const descriptionInput = useRef<any>();
   
    const descriptionHandler = () =>{
        setDescription(descriptionInput?.current?.value);
}
    const dirtyHandler = () =>{
        setIsDirty(true);
        name.length> 0 ? setIsInvalid(false) : setIsInvalid(true);
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
                    <div className="PopUp__Article-Name ">{props.action === "create" ? <span>Создать</span> : <span>Редактировать</span> } <span>категорию</span> </div>
                    <button className="PopUp__Article-Close" onClick={props.togglePopUp}><img src={closeImg} alt="" /></button>
                    </div>
                    <div className="PopUp__Main-small">
                                <div className="PopUp__Main-Name-small">
                                    <div className="PopUp__Main-Name__article ">
                                        <div className='PopUp-InputsArticle'  style={(isDirty && isInvalid) ? invalidTextStyle : {}}>Имя<span style={{color:"red"}}>*</span> </div>
                                    </div>
                                    <form action="submit"> <input type="text" id="namefield" placeholder='Введите имя категории' 
                                    onFocus={dirtyHandler} onChange={validHandler} ref={nameInput} style={(isDirty && isInvalid) ? invalidBorderStyle : {}}/></form>
                                
                                </div>
                            
                                <div className="PopUp__Main-Description-small">
                                    <div className="PopUp__Main-Description">
                                        <div className='PopUp-InputsArticle'>Описание </div>
                                        <textarea  className="description" placeholder='Введите описание категории' ref={descriptionInput} onChange={descriptionHandler}/>
                                    </div>
                                </div>
                            
                                <div className="PopUp__buttons">
                                <div className='PopUp__buttons-create'> 
                                {props.action === "create" ? <button type='submit' onClick={addCategorie(name,description)} >Создать</button> : <button type='submit' >Сохранить</button> }
                                   
                                </div>
                                <div  className='PopUp__buttons-close'> 
                                    <button onClick={props.togglePopUp}>Закрыть</button>
                                </div>
                </div>
                
           </div> 
        </div>
        </div>
    );
};

export default CreateCategoriePopUp;