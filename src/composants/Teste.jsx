import React, { useState } from "react"




const Calculador = () => {

    const [number, setnumbert] = useState([1, 4, 4, 4, 35, 53]);
    console.log(number)



    return (
        <div>
            <h2>
                {
                    number.map((item, index) =>
                        <p key={index}>{index} - {item}</p>
                    )
                }

            </h2>
        </div>
    );

}

export default Calculador;