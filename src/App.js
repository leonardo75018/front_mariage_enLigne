import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Teste from "./composants/Teste"

import Routes from "./router"
import history from './history';





import api from "./service/api"



class App extends Component {


  sigIn = async () => {

    const response = await api.post("/application/admin/login", {
      email: "leonardo.kabongo@gmail.comee",
      password: "Deus2"
    });

    const token = response.data.token;
    if (token) {
      localStorage.setItem("app.token", token)
    }

  };

  render() {

    return (
      <div>
        <Router history={history}></Router>
        <Routes />

      </div>


    )
  }
}
export default App;


{/* <div className="App">
<button onClick={this.sigIn} >Login</button>
</div> */}






