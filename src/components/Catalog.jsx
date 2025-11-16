import { useEffect, useState } from "react";
import Game from "./GameComp";
import func from "../utils/actionsFromServer";

export default function Catalog() {
  const [games, setGames] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    func.getAllGames().then((result) => setGames(result));
    if (games) {
      setIsEmpty(false);
    }
  }, []);
  return (
    <>
      <section id="catalog-page">
        <h1>Catalog</h1>
        {isEmpty || (
          <div className="catalog-container">
            {Object.values(games).map((game) => (
              <Game
                key={game.title}
                title={game.title}
                genre={game.genre}
                imgUrl={game.imageUrl}
              />
            ))}
          </div>
        )}

        {isEmpty && <h3 className="no-articles">No Added Games Yet</h3>}
      </section>
    </>
  );
}
