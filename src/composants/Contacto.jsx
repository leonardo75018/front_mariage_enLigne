import React, { useState } from 'react'
import api from "../service/api"





const Contacto = () => {
    const [user, setUsers] = useState([])





    async function find() {

        try {
            const response = await api.post("/application/find/admin")
            const users = response.data.allAdmin;

            setUsers(user + users)

            // users.map((item, index) =>
            //     console.log(item.role)

            // )

        } catch (error) {

        }

    }




    return (
        <div>
            <div> <button onClick={find}>Find</button>  </div>

        </div>
    )
}

export default Contacto

