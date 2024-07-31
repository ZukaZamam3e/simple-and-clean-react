import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { GameModel } from "../../models/GameModel";

interface GameCardProps {
  game: GameModel;
}

export const GameCard = (props: GameCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.game.name}
        </Typography>
      </CardContent>
      <Stack spacing={1}>
        {props.game.buttons.map((button) => (
          <Button
            sx={{
              textAlign: "center",
              backgroundColor: "black",
              borderRadius: "20px",
              border: "1px solid #3636b3",
              color: "white",
              fontWeight: "500",
              "&:hover": {
                background: "#f00",
                backgroundColor: "#3636b3",
                borderColor: "red",
              },
            }}
          >
            {button}
          </Button>
        ))}
      </Stack>
    </Card>
  );
};
