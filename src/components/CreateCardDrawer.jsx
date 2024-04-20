import React from "react";
import { Drawer, Box, Divider, Typography, TextField, Button } from "@mui/material";
import Icone from "../icons/icone_criar.svg";
import { primaryColor, secondaryColor } from "../utils/colors.ts";
import CardDTOInsert from "../types/CardDTOInsert";

function CreateCardDrawer({
  isModalOpen,
  toggleModal,
  title,
  setTitle,
  selectedFile,
  handleFileInputChange,
  handleCriarCard,
  isEditing,
  selectedCard,
}) {
  return (
    <Drawer anchor="right" open={isModalOpen} onClose={toggleModal}>
      <Box
        sx={{
          width: 580,
          padding: 2,
          marginLeft: 2,
          marginRight: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ marginTop: 4, display: "flex", alignItems: "center" }}>
          <img
            src={Icone}
            alt="Logo"
            style={{ maxHeight: 50, marginRight: 20 }}
          />
          <Typography
            variant="h4"
            style={{ color: primaryColor, fontStyle: "normal" }}
          >
            {isEditing ? "Editar Card" : "Criar Card"}
          </Typography>
        </Box>
        <Divider sx={{ marginY: 4 }} />
        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="subtitle1"
            style={{
              color: "#454545",
              fontWeight: "bold",
              fontStyle: "normal",
            }}
          >
            DIGITE UM NOME PARA O CARD
          </Typography>
          <TextField
            label="Digite o Título"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="subtitle1"
            style={{
              color: "#454545",
              fontWeight: "bold",
              fontStyle: "normal",
            }}
          >
            INCLUA UMA IMAGEM PARA APARECER NO CARD
          </Typography>
          <TextField
            label="Nenhum Arquivo Selecionado"
            fullWidth
            multiline
            value={selectedFile ? selectedFile.name : ""}
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  component="label"
                  color="primary"
                  sx={{
                    textTransform: "none",
                    height: 40,
                    width: "45%",
                    whiteSpace: "nowrap",
                  }}
                >
                  Escolher Arquivo
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                </Button>
              ),
            }}
          />
        </Box>
        <Divider sx={{ marginY: 2 }} />
        <Button
          variant="contained"
          onClick={handleCriarCard}
          sx={{
            alignSelf: "flex-end",
            textTransform: "none",
            padding: "7px 20px 7px 20px",
            marginTop: 1,
          }}
        >
          {isEditing ? "Editar Card" : "Criar Card"}
        </Button>
      </Box>
    </Drawer>
  );
}

export default CreateCardDrawer;
