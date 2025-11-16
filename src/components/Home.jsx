import logo from "/images/logo.png";
import { useEffect, useState } from "react";
import func from "../utils/actionsFromServer";
import { Link } from "react-router";

export default function Home() {
  const [games, setGames] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    func.getAllGames().then((result) => {
      setGames(Object.values(result));

      if (result) {
        setIsEmpty(false);
      }
    });
  }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in </h3>
        <img id="logo-left" src={logo} alt="logo" />
      </div>

      <div id="home-page">
        <h1>Latest Games</h1>
        <div id="latest-wrap">
          <div className="home-container">
            {isEmpty || (
              <>
                <div className="game">
                  <img src={games[0].imageUrl} alt="Elden Ring" />
                  <div className="details-overlay">
                    <p className="name">{games[0].title}</p>
                    <p className="genre">{games[0].genre}</p>
                    <Link
                      to={`/details/${games[0].title}`}
                      className="details-button"
                    >
                      Details
                    </Link>
                  </div>
                </div>
                <div className="game">
                  <img src={games[1].imageUrl} alt="Elden Ring" />
                  <div className="details-overlay">
                    <p className="name">{games[1].title}</p>
                    <p className="genre">{games[1].genre}</p>
                    <Link
                      to={`/details/${games[1].title}`}
                      className="details-button"
                    >
                      Details
                    </Link>
                  </div>
                </div>
                <div className="game">
                  <img src={games[2].imageUrl} alt="Elden Ring" />
                  <div className="details-overlay">
                    <p className="name">{games[2].title}</p>
                    <p className="genre">{games[2].genre}</p>
                    <Link
                      to={`/details/${games[2].title}`}
                      className="details-button"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </>
            )}
            {isEmpty && <p className="no-articles">No games yet</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
