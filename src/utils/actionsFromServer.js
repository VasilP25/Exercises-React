const func = {
  getAllGames: () => {
    let games = fetch("http://localhost:3030/jsonstore/games").then(
      (result) => {
        return result.json();
      }
    );
    return games;
  },
};

export default func;
