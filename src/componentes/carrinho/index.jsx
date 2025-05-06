// import React, { useState } from "react";
// import "./Carrinho.css";

// export default function Carrinho({ cartItems, setCartItems }) {

 

// const [quantidade, setQuantidade] = useState(1);

// const itemValor = (item) => {
//   return Number(item.valor) * Number(quantidade);
// }
//   function handleQuantidadeChange(tipo, item) {
//     if (tipo === "mais") {
//       setQuantidade(quantidade + 1);
//     } else if (tipo === "menos" && quantidade > 1) {
//       setQuantidade(quantidade - 1);
//     }
//   }

//   return (
//     <>
//       <div className="head">
//         <div className="titulo">Seu carrinho tem {cartItems?.length} itens</div>
//       </div>
//       <div className="itens">
//         {cartItems?.map((item, index) => {
//           return (
//             <div
//               className="item"
//               key={index}
//             >
//               <img
//                 src={item.imagem}
//               // alt={item.nome}
//               />
//               <div className="container-item">
//                 <div className="item-nome">{item.nome}</div>
//                 <div className="infos">
//                   <div className="valor">
//                     <p>{itemValor(item).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
//                   </div>
//                   <div className="contador">
//                   <button
//                       className="btn-mais"
//                       onClick={() => handleQuantidadeChange("mais",item)}
//                     >
//                       +
//                     </button>
//                     <p>{quantidade}</p>
//                     <button
//                       className="btn-menos"
//                       onClick={() => handleQuantidadeChange("menos")}
//                     >
//                       -
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="finalizar">
//         <div className="topValor">
//           <p>Total:</p>
//           <p>
//             {" "}
//             {cartItems
//               ?.reduce((total, item) => total + item.valor, 0)
//               .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              
//           </p>
//         </div>
//         <button
//           className="btn" run
//           onClick={() => setCartItems([])}
//         >
//           Finalizar Compra
//         </button>
//       </div>
//     </>
//   );
// }

import React from "react";
import "./Carrinho.css";

export default function Carrinho({ cartItems, setCartItems }) {
  // Atualiza a quantidade diretamente no item do carrinho
  function handleQuantidadeChange(tipo, itemIndex) {
    const novosItens = [...cartItems];

    if (tipo === "mais") {
      novosItens[itemIndex].quantidade = (novosItens[itemIndex].quantidade || 1) + 1;
    } else if (tipo === "menos" && (novosItens[itemIndex].quantidade || 1) > 1) {
      novosItens[itemIndex].quantidade -= 1;
    }

    setCartItems(novosItens);
  }

  // Valor de cada item (valor x quantidade)
  const itemValor = (item) => {
    return Number(item.valor) * Number(item.quantidade || 1);
  };

  return (
    <>
      <div className="head">
        <div className="titulo">Seu carrinho tem {cartItems?.length} itens</div>
      </div>
      <div className="itens">
        {cartItems?.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.imagem} />
            <div className="container-item">
              <div className="item-nome">{item.nome}</div>
              <div className="infos">
                <div className="valor">
                  <p>
                    {itemValor(item).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <div className="contador">
                  <button
                    className="btn-mais"
                    onClick={() => handleQuantidadeChange("mais", index)}
                  >
                    +
                  </button>
                  <p>{item.quantidade || 1}</p>
                  <button
                    className="btn-menos"
                    onClick={() => handleQuantidadeChange("menos", index)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="finalizar">
        <div className="topValor">
          <p>Total:</p>
          <p>
            {cartItems
              ?.reduce(
                (total, item) =>
                  total + item.valor * (item.quantidade || 1),
                0
              )
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>
        </div>
        <button className="btn" onClick={() => setCartItems([])}>
          Finalizar Compra
        </button>
      </div>
    </>
  );
}
