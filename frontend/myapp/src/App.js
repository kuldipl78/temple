// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './Context/LanguageContext';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Donation from './components/Donation';
import Events from './components/Events';
import Gallery from './components/Gallery';
import SocialWork from './components/SocialWork';
import NotFound from './components/NotFound';
import News from './components/News';

import AyurvedicGuidance from "./components/AyurvedicGuidance";
import GoshAla from "./components/GoshAla";
import KurshiUdyog from "./components/KurshiUdyog";
import MassMarriage from "./components/MassMarriage";


import './App.css';

function App() {
   
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/socialWork" element={<SocialWork />} />
          <Route path="/news" element={<News/>} />

          <Route path="/guidence" element={<AyurvedicGuidance/>} />
          <Route path="/goshAla" element={<GoshAla/>} />
          <Route path="/kurshiudyog" element={<KurshiUdyog/>} />
          <Route path="/massmarriage" element={<MassMarriage/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
