import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./components/search/Search";
import NoPage from "./components/noPage/NoPage";
import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
