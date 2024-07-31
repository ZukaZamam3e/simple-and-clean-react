import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";

export const Pages = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    {/* <Route path="/shows" element={<Shows />} /> */}
  </Routes>
);
