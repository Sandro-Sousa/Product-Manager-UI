import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Card } from "@mui/material";
import { primaryColor } from "../utils/colors";
import SearchBar from "../components/SearchBar";
import CardItem from "../components/CardItem";
import CreateCardDrawer from "../components/CreateCardDrawer";
import axios from "axios";
import CardDTO from "../types/CardDTO";
import CardDTOInsert from "../types/CardDTOInsert";
interface Card {
  id: number;
  title: string;
  image: File | null;
}



function HomeTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [cards, setCards] = useState<CardDTO[]>([]);
  const [cardInsert, setFormData] = useState<CardDTOInsert>({
    photo: { base64: null },
    name: null,
    status: 'default_status', 
  });
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get<CardDTO[]>('http://localhost:7004/api/ProductManager/v1/ProductManagerGetAllPagination', {
        params: {
          pageNumber: 1,
          pageSize: 3
        }
      });
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsEditing(false);
    setSelectedFile(null);
    setTitle("");
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
          const base64String = reader.result?.toString();
          setImageBase64(base64String as any);
      };
      reader.readAsDataURL(file);
  }
    setSelectedFile(file);
  };

  const handleCriarCard = async () => {
  };

  const handleEditarCard = (card: Card) => {
    setSelectedCard(card);
    setTitle(card.title);
    setSelectedFile(card.image);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      style={{ backgroundColor: "#F6F4F6" }}
    >
      <SearchBar handleSearch={fetchCards} />

      <Grid item xs={10} spacing={2} container justifyContent="center">
        <Grid
          item
          xs={8}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant="h5"
              style={{ color: primaryColor, fontStyle: "normal" }}
            >
              Resultado de busca
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ textTransform: "none", padding: "7px 20px 7px 20px" }}
              onClick={toggleModal}
            >
              Novo Card
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={10} container justifyContent="flex-start" spacing={2}>
          {cards.map((card) => (
            <CardItem
              key={card.id}
              card={card}
              handleEditarCard={handleEditarCard}
            />
          ))}
        </Grid>
      </Grid>

      <CreateCardDrawer
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        title={title}
        setTitle={setTitle}
        selectedFile={selectedFile}
        handleFileInputChange={handleFileInputChange}
        handleCriarCard={handleCriarCard}
        isEditing={isEditing}
        selectedCard={selectedCard}
      />
    </Grid>
  );
}

export default HomeTest;
