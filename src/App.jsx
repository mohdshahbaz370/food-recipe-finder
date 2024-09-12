import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./components/search/Search";
import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
