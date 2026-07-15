import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import UI from "./UI";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ui-ux" element={<UI />} />
      </Routes>
    </BrowserRouter>
  );
}