import { Image } from "../../types";
import s from "./ImageModal.module.css";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    backgroundColor: "rgb(7 7 7 / 80%)",
  },
  content: {
    padding: "0",
    borderRadius: "10px",
    backgroundColor: "#3d3d3d",
  },
};

interface ImageModalProps {
  closeModal: () => void;
  selectedImage: Image | null;
  modalIsOpen: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  closeModal,
  selectedImage,
  modalIsOpen,
}) => {
  if (selectedImage === null) {
    return;
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={s.modalWrapper}>
        <button onClick={closeModal} className={s.modalCloseBtn}>
          <IoCloseOutline className={s.modalIcon} />
        </button>
        <img
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
          className={s.image}
        />
        <p className={s.imageDescription}>{selectedImage.alt_description}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
