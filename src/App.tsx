import { useEffect, useState } from "react";
import { fetchImagesWithValue } from "./services/api";
import { Toaster } from "react-hot-toast";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Image } from "./types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImagesWithValue(page, query);
        console.log(data);

        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [page, query]);

  const handleSearch = (searchValue: string): void => {
    setImages([]);
    setQuery(searchValue);
    setPage(0);
    setTotalPages(0);
  };

  const handleChangePage = (): void => {
    setPage((prev) => prev + 1);
  };

  function openModal(image: Image): void {
    setIsOpen(true);
    setSelectedImage(image);
  }
  function closeModal(): void {
    setIsOpen(false);
  }
  return (
    <>
      <div>
        <Toaster position="top-left" reverseOrder={false} />
      </div>
      <SearchBar handleSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && totalPages !== page && (
        <LoadMoreBtn handleChangePage={handleChangePage} />
      )}

      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedImage={selectedImage}
      />

      {isError && <ErrorMessage />}
    </>
  );
}

export default App;
