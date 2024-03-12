import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './accordion.css'
const Myaccordion2=({question,answer})=>
{
    const [icon,setIcon]=useState(false)
    return(
        <>
        <div>
            <div className="sub_div">
                <p  onClick={()=>setIcon(!icon)}>{icon?<RemoveCircleIcon/>:<AddCircleIcon/>}</p>
                <h1>{question}</h1>
            </div>
            {icon && <p className="answer" >{answer}</p>}
        </div>
        </>
    )
}

export default Myaccordion2;