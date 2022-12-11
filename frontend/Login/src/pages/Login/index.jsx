import { Link } from 'react-router-dom'
import { useState } from "react";
import amazim from '../../assets/amazim.png';
import { LayoutComponents } from '../../componentes/LayoutComponents';
import { useCallback } from "react"



export const Login = () => {
    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback(
      (event) => {
        event.preventDefault();
        console.log(email, password);
      }, 
      [email, password]
    );
    const request = {
      method: 'POST', 
      body: JSON.stringify(handleSubmit)
    }
    const url = "http//localhost:3001/auth/autentica"

    fetch(url, request)
       .then(console.log("Gravando"))
       .catch(erro => console.log(erro))



    return (
      <LayoutComponents>
        <form className="login-form" onSubmit={handleSubmit}>  
          <span className="login-form-title"> Bem vindo </span>
  
          <span className="login-form-title">
            <img src={amazim} alt="#" />
          </span>
  
          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>
  
          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Password"></span>
          </div>
  
          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>
  
          <div className="text-center">
            <span className="txt1">Não possui conta? </span>
            <Link className="txt2" to="/register">
              Criar conta.
            </Link>
          </div>
        </form>
      </LayoutComponents>

    )
}
export default Login;