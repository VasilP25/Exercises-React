import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Router, Route, Routes } from "react-router";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import AddGame from "./components/AddGame";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/addGame" element={<AddGame />} />
        <Route path="/details/:title" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
