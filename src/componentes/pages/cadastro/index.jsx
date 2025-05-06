import React from "react";
import "./cadastro.css";

export default function Cadastro() {


    return (

        <div className="paginaLogin">
            <div className="conteinerLogin">
                <h3>Criar Conta</h3>

                <div className="loginIcones">
                    <a href="#" className="Loginicone"><i className="fa-brands fa-google"></i></a>
                    <a href="#" className="Loginicone"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="Loginicone"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="Loginicone"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>

                <div className="loginInputs">
                    <input type="text" placeholder="Nome completo" onChange={(e) => console.log(e.target.value)} />
                    <input type="text" placeholder="Digite o Email" onChange={(e) => console.log(e.target.value)} />
                    <input type="password" placeholder="Digite a Senha" onChange={(e) => console.log(e.target.value)} />
                    <input type="password" placeholder="Confirme a Senha" onChange={(e) => console.log(e.target.value)} />
                </div>


                <div className="buttonsConteiner">
                    <button
                        onClick={() => window.open("http://localhost:5173/")} className="loginButtom">Criar Conta
                    </button>
                    <button
                        type="reset" onClick={() => window.location.href = "http://localhost:5173/login"} className="loginButtom">Cancelar
                    </button>
                </div>

                <a className="criarConta" href="#" onClick={() => window.location.href = "http://localhost:5173/login"}>Já tem uma conta? Faça Login</a>

            </div>

            <div className="conteinerLogin2">

            </div>
        </div>

    )
}
