import PhotoDTOInsert  from "./PhotoDTOInsert";

interface CardDTOInsert {
    photo: PhotoDTOInsert | null;
    name: string | null;
    status: string | null;
  }

  export default CardDTOInsert ;