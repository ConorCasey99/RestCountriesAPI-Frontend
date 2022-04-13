import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import CountryDetailsPage from "./pages/countryDetails/CountryDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/countries/:name" element={<CountryDetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
