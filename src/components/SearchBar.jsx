import React from "react";
import { Grid, TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import backgroundImage from "../assets/fundo-busca@2x.png";

function SearchBar({ handleSearch }) {
  return (
    <Grid item xs={12} style={{ position: "relative" }}>
      <img
        src={backgroundImage}
        alt="Imagem de fundo"
        style={{ width: "100%", height: "auto" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "80%",
          width: "70%",
        }}
      >
        <TextField
          label="Digite algo"
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            sx: { backgroundColor: "white" },
          }}
        />
      </div>
    </Grid>
  );
}

export default SearchBar;
