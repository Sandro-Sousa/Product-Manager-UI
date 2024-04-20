import React from "react";
import { Grid, Typography, IconButton, Button } from "@mui/material";
import IconeEditar from "../icons/Icon-edit.svg";
import IconeExcluir from "../icons/Icon-trash.svg";

function CardItem({ card, handleEditarCard }) {
  return (
    <Grid
      item
      xs={3}
      key={card.id}
      sx={{
        marginBottom: "16px",
        textAlign: "center",
      }}
    >
      <Typography variant="subtitle1">{card.title}</Typography>
      {card.image && (
        <img
          src={URL.createObjectURL(card.image)}
          alt="Imagem do card"
        />
      )}
      <Grid
        item
        container
        xs={12}
        justifyContent="space-between"
        alignItems="center"
        bgcolor={"#0000000F"}
      >
        <Grid item container alignItems="center" sx={{ width: "auto" }}>
          <IconButton>
            <img src={IconeExcluir} alt="Imagem SVG" />
          </IconButton>
          <Grid item>
            <Button>Excluir</Button>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" sx={{ width: "auto" }}>
          <IconButton>
            <img src={IconeEditar} alt="Imagem SVG" />
          </IconButton>
          <Grid item>
            <Button onClick={() => handleEditarCard(card)}>Editar</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardItem;
