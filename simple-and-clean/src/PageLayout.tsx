import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
import home_bg from "./assets/home_bg.png";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <Box
    sx={{
      backgroundImage: "url('./assets/home_bg.png')",
      backgroundRepeat: "no-repeat",
      height: 400,
      width: 400,
    }}
  >
    {/* <NavigationBar /> */}

    <br />
    <Container className="app_container" component="main">
      {children}
    </Container>
  </Box>
);
