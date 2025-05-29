import "./produto.css";
import React from "react";
import { produtos } from "./produtos";
import Carrinho from "../carrinho";
import { Button } from "@mui/material";

import {ModalCadastro, ModalAtualizar, ModalLer, ModalRemover } from "../pages/outlet/modalCriar";

export default function Produtos() {
  const [cartItems, setCartItems] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);
  const [abrirCadastro, setAbrirCadastro] = React.useState(false);
  const [abrirAtualizar, setAbrirAtualizar] = React.useState(false);
  const [abrirLer, setAbrirLer] = React.useState(false);
  const [abrirRemover, setAbrirRemover] = React.useState(false);

  function addItem(item) {
    if (cartItems.some((cartItem) => cartItem.nome === item.nome)) {
      alert("Produto já adicionado ao carrinho!");
      return;
    }
    setCartItems((prev) => [...prev, item]);
  }

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="src/assets/logovortex.png" alt="logo" />
        </div>
      </div>

      <div className="banner">
        <img src="src/assets/bannerportugues.png" alt="Banner" />
      </div>

      <div style={{ display: "flex", gap: "10px", margin: "1rem" }}>
        <Button variant="contained" onClick={() => setAbrirCadastro(true)}>Criar</Button>
        <Button variant="outlined" onClick={() => setAbrirLer(true)}>Ler</Button>
        <Button variant="outlined" onClick={() => setAbrirAtualizar(true)}>Atualizar</Button>
        <Button variant="outlined" color="error" onClick={() => setAbrirRemover(true)}>Remover</Button>
      </div>

      <ModalCadastro open={abrirCadastro} handleClose={() => setAbrirCadastro(false)} />
      <ModalAtualizar open={abrirAtualizar} handleClose={() => setAbrirAtualizar(false)} />
      <ModalLer open={abrirLer} handleClose={() => setAbrirLer(false)} />
      <ModalRemover open={abrirRemover} handleClose={() => setAbrirRemover(false)} />

      <div className="containerProdutos">
        <div className="cartButton">
          <button onClick={() => setShowCart(true)}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <span className="cartCount">
            {cartItems.length > 0 && cartItems.length}
          </span>
        </div>
        <div className="wppButton">
          <button
            onClick={() => window.open("https://api.whatsapp.com/send?phone=5567996752611&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20dos%20produtos%20da%20Vortex")}
            className="wppButton"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </button>
        </div>

        {showCart && (
          <div className="carrinhoContainer show">
            <button className="closeCarrinho" onClick={() => setShowCart(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <Carrinho cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        )}

        <div className="produtos">
          {produtos.map((item) => (
            <div key={item.nome} className="produto">
              <img src={item.imagem} alt={item.nome} />
              <h4>{item.nome}</h4>
              <p>{item.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
              <button onClick={() => addItem(item)}>Comprar</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom">
        <p>Desenvolvido por Vortex</p>
        <p>Todos os direitos reservados</p>
        <p>2025</p>
      </div>
    </div>
  );
}
