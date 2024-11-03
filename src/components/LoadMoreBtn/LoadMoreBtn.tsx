import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleChangePage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleChangePage }) => {
  return (
    <div className={s.loadMoreWrapper}>
      <button
        onClick={handleChangePage}
        type="button"
        className={s.loadMoreBtn}
      >
        Show more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
