import { Link } from "react-router";

export default function Game({ title, genre, imgUrl }) {
  return (
    <>
      <div className="game">
        <img src={imgUrl} alt={title} />
        <div className="details-overlay">
          <p className="name">{title}</p>
          <p className="genre">{genre}</p>
          <Link to={`/details/${title}`} className="details-button">
            Details
          </Link>
        </div>
      </div>
    </>
  );
}
