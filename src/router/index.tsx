import { Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import App from "../App";

export const Router = () => {
  return (
    <Routes>
     <Route index path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
