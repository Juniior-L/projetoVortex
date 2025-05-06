import React from "react";
import "./Login.css";

export default function Login() {


    return (

        <div className="paginaLogin">
            <div className="conteinerLogin">
                <h3>LOGIN</h3>

                <div className="loginIcones">
                    <a href="#" className="Loginicone"><i className="fa-brands fa-google"></i></a>
                    <a href="#" className="Loginicone"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="Loginicone"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="Loginicone"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>

                <div className="loginInputs">
                    <input type="text" placeholder="Digite o Email" onChange={(e) => console.log(e.target.value)} />
                    <input type="password" placeholder="Digite a Senha" onChange={(e) => console.log(e.target.value)} />
                </div>

                <div className="esqueciSenhaContainer">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" />
                            Lembrar Senha
                        </label>
                    </div>

                    <div className="esqueciSenha">
                        <a href="#" onClick={() => window.open("http://localhost:5173/esqueci-senha")}>Esqueci Minha Senha</a>
                    </div>
                </div>
                <div className="buttonsConteiner">
                    <button
                        onClick={() => window.location.href = "http://localhost:5173/"} className="loginButtom">Entrar
                    </button>
                    <button
                        type="reset" onClick={() => window.location.href = "http://localhost:5173/cadastro"} className="loginButtom">Sair
                    </button>
                </div>

                <a className="criarConta" href="#" onClick={() => window.location.href = "http://localhost:5173/cadastro"}>Não tem uma conta? Crie aqui</a>

            </div>

            <div className="conteinerLogin2">
                
            </div>
        </div>

    )
}