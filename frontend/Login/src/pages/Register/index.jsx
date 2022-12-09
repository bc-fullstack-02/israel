import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../componentes/LayoutComponents/index"
import { useCallback } from "react"

import amazim from '../../assets/amazim.png'

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")


const handleSubmit = useCallback(
  (event) => {
    event.preventDefault();
    console.log(name, email, password);
  },
  [name, email, password]
);



fetch('http://localhost:3001/auth/register')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.register);
});






  return (
    <LayoutComponents >
      <form className="login-form" onSubmit={handleSubmit}>
        <span className="login-form-title"> Criar Conta </span>

        <span className="login-form-title">
          <img src={ amazim } alt="Jovem Programador" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

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
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/">
            Acessar com Email e Senha.
          </Link>
          
        </div>
      </form>
    </LayoutComponents>
  )
}

