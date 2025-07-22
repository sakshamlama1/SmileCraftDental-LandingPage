import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  LandingPage,
  PrivacyPolicy,
} from './Screens';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
