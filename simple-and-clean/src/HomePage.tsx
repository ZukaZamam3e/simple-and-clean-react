import { Box, Card, CardMedia } from "@mui/material";
import home_bg from "./assets/home/home_bg.png";
import { GameModel } from "./models/GameModel";
import { GameCard } from "./components/HomePage/GameCard";

export const HomePage = () => {
  const games: GameModel[] = [
    {
      name: "Kingdom Hearts",
      buttons: ["Synthesis", "Materials", "Treasures", "Trinities", "Puppies"],
    },
    {
      name: "Kingdom Hearts II",
      buttons: ["Synthesis", "Materials", "Treasures", "Puzzles"],
    },
    {
      name: "Kingdom Hearts: Birth By Sleep",
      buttons: [
        "Command Melding",
        "Command Collection",
        "Treasures",
        "Stickers",
      ],
    },
    {
      name: "Kingdom Hearts III",
      buttons: ["Synthesis", "Lucky Emblems", "Treasures", "Classic Kingdom"],
    },
  ];
  // document.body.style.backgroundImage = "url('./assets/home_bg.jpg')";
  // document.body.style.backgroundRepeat = "no-repeat";
  // document.body.style.backgroundAttachment = "fixed";
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: 2,
        rowGap: 2,
      }}
    >
      {games.map((game) => (
        <GameCard game={game} />
      ))}
    </Box>
  );
};
