
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import PdfToDocx from './Components/PdfToDocx';
import DocxToPdf from './Components/DocxTopdf';
import PdfToPptx from './Components/PdfToPptx';
import PptxToPdf from './Components/PptxTopdf';    {/*Please remind this file name case*/}
  
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pdf-to-docx" element={<PdfToDocx />} />
        <Route path="/docx-to-pdf" element={<DocxToPdf />} />
        <Route path="/pdf-to-pptx" element={<PdfToPptx />} />    
        <Route path="/pptx-to-pdf" element={<PptxToPdf />} />

       
        {/* We will add more routes.. */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;