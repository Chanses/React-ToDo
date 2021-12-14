import React, { useRef, useState } from 'react';
import "./StylePopUp.css"
import closeImg from "../../images/Close.svg"



interface popUpProps {
    togglePopUp: () => void;
  }

const CreateCategoriePopUp: React.FC<popUpProps>= (props) => {
    let invalidBorderStyle = {border: "2px red solid" }
    let invalidTextStyle = {color:"red" }
    const [isDirty,setIsDirty] = useState<boolean>(false);
    const [name,setName] = useState<string>("");
    const [isInvalid,setIsInvalid] = useState<boolean>(true);
    const nameInput = useRef<any>();
    
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
                    <div className="PopUp__Article-Name ">Создание категории</div>
                    <button className="PopUp__Article-Close"><img src={closeImg} alt="" onClick={props.togglePopUp}/></button>
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
                                        <textarea  className="description" placeholder='Введите описание категории'/>
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
        </div>
        </div>
    );
};

export default CreateCategoriePopUp;