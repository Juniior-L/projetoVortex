import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Stack } from "@mui/material";

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
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>Cadastrar Produto</Typography>
        <Stack spacing={2}>
          <TextField label="Nome do Produto" fullWidth />
          <TextField label="Valor" type="number" fullWidth />
          <TextField label="URL da Imagem" fullWidth />
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
            <Button variant="contained" color="primary">Criar</Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}


export function ModalAtualizar({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>Atualizar Produto</Typography>
        <Stack spacing={2}>
          <TextField label="Nome do Produto" fullWidth />
          <TextField label="Valor" type="number" fullWidth />
          <TextField label="URL da Imagem" fullWidth />
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
            <Button variant="contained" color="primary">Atualizar</Button>
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

export function ModalRemover({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>Remover Produto</Typography>
        <Typography>Tem certeza que deseja remover o produto <strong>Produto X</strong>?</Typography>

        <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
          <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" color="error">Remover</Button>
        </Box>
      </Box>
    </Modal>
  );
}


