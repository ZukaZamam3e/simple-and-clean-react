import { Box } from "@mui/material";

export const KHISynthesisPage = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          alignContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 36,
            color: "green",
            fontStyle: "italic",
            padding: "0 5% 0 5%",
            alignItems: "flex-start",
          }}
        >
          WORK SHOP
        </div>
        <div
          style={{
            fontSize: 36,
            color: "green",
            fontStyle: "italic",
            padding: "0 5% 0 5%",
            alignItems: "flex-end",
          }}
        >
          WORK SHOP
        </div>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgba(0,255,0,.5)",
          display: "flex",
          border: "3px solid lightgreen",
          borderLeft: 0,
          borderRight: 0,
          height: 250,
        }}
      >
        TEst
      </Box>
    </Box>
  );
};
