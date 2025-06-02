import React, { useState, useContext } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Stack } from "@mui/material";
import { CriarProduto, LerProdutos, AtualizarProduto, DeletarProduto } from "../../data/fetchProdutos";
import { DataContext } from "../../context/DATA.JSX";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};



export function ModalCadastro({ open, handleClose }) {

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");
  const { setProdutos } = useContext(DataContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    await CriarProduto(nome, parseFloat(valor), imagem);
    setNome("");
    setValor("");
    setImagem("");
    LerProdutos(setProdutos); // Atualiza a lista de produtos
    handleClose();
    
    // Aqui você pode fazer um POST para sua API
    // axios.post('/produtos', produto)

  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>Cadastrar Produto</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField label="Nome do Produto" fullWidth value={nome}
              onChange={(e) => setNome(e.target.value)} />

            <TextField label="Valor" type="number" fullWidth value={valor}
              onChange={(e) => setValor(e.target.value)} />

            <TextField label="URL da Imagem" fullWidth value={imagem}
              onChange={(e) => setImagem(e.target.value)} />

            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
              <Button type="submit" variant="contained" color="primary">Criar</Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}


export function ModalAtualizar({ open, handleClose, produto }) {

  const { setProdutos } = React.useContext(DataContext);

  const [id, setId] = React.useState(produto?.id || "");
  const [nome, setNome] = React.useState(produto?.nome || "");
  const [valor, setValor] = React.useState(produto?.valor || "");
  const [imagem, setImagem] = React.useState(produto?.imagem || "");

  React.useEffect(() => {
    if (produto) {
      setId(produto.id);
      setNome(produto.nome);
      setValor(produto.valor);
      setImagem(produto.imagem);
    }
  }, [produto]);

  const atualizar = async () => {
    try {
      await AtualizarProduto(id, nome, valor, imagem);
      LerProdutos(setProdutos);
      handleClose();
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>Atualizar Produto {id}</Typography>
        <Stack spacing={2}>
          <TextField label={nome} fullWidth value={nome} onChange={(e) => setNome(e.target.value)} />

          <TextField label="Valor" type="number" fullWidth value={valor} onChange={(e) => setValor(e.target.value)} />

          <TextField label="URL da Imagem" fullWidth value={imagem} onChange={(e) => setImagem(e.target.value)} />
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
            <Button variant="contained" color="primary" onClick={atualizar}>Atualizar</Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}


export function ModalLer({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>Detalhes do Produto</Typography>

        <Stack spacing={2}>
          <Typography><strong>Nome:</strong> Produto X</Typography>
          <Typography><strong>Valor:</strong> R$ 100,00</Typography>
          <Typography><strong>Imagem:</strong></Typography>
          <img src="https://via.placeholder.com/150" alt="Produto" style={{ maxWidth: "100%" }} />

          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button variant="outlined" onClick={handleClose}>Fechar</Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}

export function ModalRemover({ open, handleClose, produto }) {
  const { setProdutos } = React.useContext(DataContext);

  const [id, setId] = React.useState(produto?.id || "");
  const [nome, setNome] = React.useState(produto?.nome || "");

  React.useEffect(() => {
    if (produto) {
      setId(produto.id);
      setNome(produto.nome);
    }
  }, [produto]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await DeletarProduto(id);
      LerProdutos(setProdutos);
      handleClose();
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>Remover Produto</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField label="ID do Produto" fullWidth value={id} disabled />
            <TextField label="Nome do Produto" fullWidth value={nome} disabled />
          </Stack>

          <Typography>Tem certeza que deseja remover o produto <strong>Produto X</strong>?</Typography>

          <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
            <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
            <Button type="submit" variant="contained" color="error">Remover</Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}


