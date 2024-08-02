import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
import home_bg from "./assets/home_bg.png";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <Container
    className="app_container"
    sx={{
      height: "100vh",
      p: {
        xs: 0,
      },
    }}
    component="main"
    maxWidth={false}
  >
    <div style={{ width: "100%" }}>{children}</div>
  </Container>
);
