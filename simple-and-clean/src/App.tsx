import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PageLayout } from "./PageLayout";
import { Pages } from "./Pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#121212",
      dark: "#272727",
    },
  },
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

function App() {
  return (
    <PageLayout>
      <Pages />
    </PageLayout>
  );
}

export default App;
