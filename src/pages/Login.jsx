import React, { Fragment, useState } from "react"
import '../style/App.scss';
import api from "../service/api"
import history from '../history'
import { useForm } from 'react-hook-form'


const Login = () => {

    const [datas, setdatas] = useState({
        email: "",
        password: "",

    })

    const inputChange = (event) => {
        // console.log(event.target.value)
        setdatas({
            ...datas,
            [event.target.name]: event.target.value,
        })

    }

    const Login = async (event) => {
        event.preventDefault();
        const userData = datas;

        try {
            const response = await api.post("/application/admin/login", userData);
            console.log(response)
            const token = response.data.token;
            if (token) {
                localStorage.setItem("token", token)
                api.defaults.headers.common['Authorization'] = token;
                history.push("/accueil")

            }
        } catch (err) {
            console.log(err)

        }


    }



    return (
        <Fragment >

            <div id="login-container">

                <div className="form-container  ">
                    <div className="acroche"><h2 className="animate__animated animate__bounce"> <div>Connectez-vous à  Mariage.oneline</div></h2></div>

                    <form onSubmit={Login}>
                        {/* <span className="error">User not found </span> */}
                        <div>
                            < input
                                placeholder="votre email"
                                name="email"
                                type="email"
                                onChange={inputChange}
                                className="form-input"
                            />
                        </div>
                        {/* <span className="error">Email error </span> */}
                        <div>
                            < input
                                placeholder="votre mot de passe"
                                name="password"
                                type="password"
                                onChange={inputChange}

                            />
                        </div>
                        {/* <span className="error">Password error </span> */}

                        <div className="mt-3"> <button type="submit" className="form-submit " >Login</button></div>
                    </form>
                </div>

                <div className="photo-container">

                </div>

            </div>

        </Fragment>
    );
}

export default Login;