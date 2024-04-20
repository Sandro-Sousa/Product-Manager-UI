import PhotoDTO  from "./PhotoDTO ";

interface CardDTO  {
    id: number;
    idPhoto: number;
    photo: PhotoDTO  | null;
    name: string | null;
    status: string | null;
  }
  
  export default CardDTO;