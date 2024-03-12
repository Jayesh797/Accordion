import React, { useState } from "react";
import { questions } from './api'
import Myaccordion2 from "./Myaccordion2";
const Myaccordion = () => {
    const [data, setData] = useState(questions)
    return (
        <>
            <div className="main_div">
                {
                    data.map((curElement) => {
                        return <Myaccordion2 key={curElement.id} {...curElement} />
                    })
                }
            </div>


        </>
    )
}

export default Myaccordion;