import React from "react";
import { Routes, Route } from "react-router";
import Produtos from "../produtos";
import Carrinho from "../carrinho";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Produtos/>} />
            <Route path="/produtos" element={<h1>Produtos</h1>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>


    )

}