import React from "react";
import { Routes, Route } from "react-router";
import Produtos from "../produtos";
import Carrinho from "../carrinho";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import NotFound from "../pages/notFound";
import PrivateRoute from "./privateRoutes";

export default function Routers() {
    return (
        <Routes>
            <Route path="/"
                element={
                    <PrivateRoute>
                        <Produtos />
                    </PrivateRoute>
                } />

            <Route
                path="/produtos"
                element={
                    <h1>Produtos</h1>} />

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<NotFound />} />
        </Routes>


    )

}