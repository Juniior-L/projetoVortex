import axios from "axios";

export async function CriarProduto(nome, valor, imagem) {
  try {
    const response = await axios.post(
      "http://localhost:3000/produtos",
      { nome, valor, imagem },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("Sucesso em criar produto");
    return response.data;
  } catch (error) {
    console.error("Erro ao criar produto:", error);
  }
}

export async function LerProdutos(setProdutos) {
  try {
    const response = await axios.get("http://localhost:3000/produtos", {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Sucesso em ler produtos");

    setProdutos(response.data);
  } catch (error) {
    console.error("Erro ao ler produtos:", error);
  }
}

export async function DeletarProduto(id) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/produtos/${id}`,
      { id },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("Sucesso em deletar produto");
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
  }
}

export async function AtualizarProduto(id, nome, valor, imagem) {
  try {
    const response = await axios.put(
      `http://localhost:3000/produtos/${id}`,
      { nome, valor: Number(valor), imagem },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("Sucesso em editar produto");
    return response.data;
  } catch (error) {
    console.error("Erro ao editar produto:", error);
  }
}