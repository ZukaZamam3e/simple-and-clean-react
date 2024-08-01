import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { KHISynthesisPage } from "./components/KHI/Synthesis/KHISynthesisPage";

export const Pages = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/khisynthesis" element={<KHISynthesisPage />} />
    {/* <Route path="/shows" element={<Shows />} /> */}
  </Routes>
);
