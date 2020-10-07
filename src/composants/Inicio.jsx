import { React } from 'react';
import api from "../service/api";




function Inicio() {


    async function login() {
        try {
            const response = await api.post("/application/admin/login", {
                email: "leonardo.kabongo@gmail.comee",
                password: "Deus2"
            });

            const token = response.data.token;
            if (token) {
                localStorage.setItem("token", token)
            }

            api.defaults.headers.common['Authorization'] = token;

        } catch (error) {

        }


        return (
            <div>
                <h2>gddg</h2>
            </div>

        )

    }
    export default Inicio;