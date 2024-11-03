import s from "./ImageCard.module.css";
import { BiLike } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Image } from "../../types";

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <>
      <div className={s.imageWrapper}>
        <img
          src={image.urls.small}
          alt={image.alt_description}
          className={s.image}
        />
      </div>
      <ul className={s.imageDetailsList}>
        <li className={s.imageDetailsItem}>{image.alt_description}</li>
        <li className={s.imageDetailsItem}>
          <BiLike /> {image.likes}
        </li>
        <li className={s.imageDetailsItem}>
          <IoPersonCircleOutline />
          {image.user.name}
        </li>
      </ul>
    </>
  );
};

export default ImageCard;
