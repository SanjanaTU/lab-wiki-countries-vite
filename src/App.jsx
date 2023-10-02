import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:countryId' element={<CountryDetails />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;