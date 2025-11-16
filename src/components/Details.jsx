import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import func from "../utils/actionsFromServer";

export default function Details() {
  const { title } = useParams();

  const [game, setGame] = useState([]);

  useEffect(() => {
    func
      .getAllGames()
      .then((data) => {
        return Object.values(data);
      })
      .then((result) => {
        setGame(result.filter((game) => game.title === title));
      });
  }, []);
  if (game.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
          <div className="header-and-image">
            <img
              className="game-img"
              src={game[0].imageUrl}
              alt="Elden Ring Cover Art"
            />

            <div className="meta-info">
              <h1 className="game-name">{game[0].title}</h1>

              <p className="data-row">
                <span className="label">Genre:</span>
                <span className="value">{game[0].genre}</span>
              </p>

              <p className="data-row">
                <span className="label">Active Players:</span>
                <span className="value">{game[0].players}</span>
              </p>

              <p className="data-row">
                <span className="label">Release Date:</span>
                <span className="value">{game[0].date}</span>
              </p>
            </div>
            <div className="summary-section">
              <h2>Summary:</h2>
              <p className="text-summary">{game[0].summary}</p>
            </div>
          </div>

          <div className="buttons">
            <a href="#" className="button">
              Edit
            </a>
            <Link href="#" className="button">
              Delete
            </Link>
          </div>

          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              <li className="comment">
                <p>
                  Content: A masterpiece of world design, though the boss fights
                  are brutal.
                </p>
              </li>
              <li className="comment">
                <p>
                  Content: Truly feels like a next-gen evolution of the Souls
                  formula!
                </p>
              </li>
            </ul>
            {/* <!-- <p className="no-comment">No comments.</p> --> */}
          </div>
        </div>
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      </section>
    </>
  );
}
