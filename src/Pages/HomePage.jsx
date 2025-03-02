
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../Styles/HomePage.css'; 

const conversionTypes = ["DOCX", "PDF", "PPTX", "JPG", "PNG"];

const HomePage = () => {
  const [currentConversion, setCurrentConversion] = useState(conversionTypes[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); 
      setTimeout(() => {
        setCurrentConversion(prev => {
          const currentIndex = conversionTypes.indexOf(prev);
          return conversionTypes[(currentIndex + 1) % conversionTypes.length];
        });
        setFade(false); 
      }, 500); 
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="home-page container">

      <header className="text-center mt-5">
        <h1 className="display-4">Instant File Magic</h1>
        <p className="lead">
          Transform your documents to{" "}
          <span className={`conversion-text ${fade ? 'fade-out' : 'fade-in'}`}>
            {currentConversion}
          </span>{" "}
          effortlessly. All tools are FREE and user-friendly!
        </p>
      </header>

      <div className="row justify-content-center mt-4">

        <div className="col-md-6 col-lg-4 mb-4">
          <Link to="/pdf-to-docx" className="text-decoration-none text-dark">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h3 className="card-title">PDF to DOCX</h3>
                <p className="card-text">Transfomr your Pdf To DocX</p>
              </div>
              <div className="card-footer bg-light">
                <small className="text-muted">Click to convert</small>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <Link to="/docx-to-pdf" className="text-decoration-none text-dark">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h3 className="card-title">DOCX to PDF</h3>
                <p className="card-text">Transfomr your DocX To Pdf</p>
              </div>
              <div className="card-footer bg-light">
                <small className="text-muted">Click to convert</small>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <Link to="/pdf-to-pptx" className="text-decoration-none text-dark">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h3 className="card-title">PDF to PPTX</h3>
                <p className="card-text">Create presentations from PDFs</p>
              </div>
              <div className="card-footer bg-light">
                <small className="text-muted">Click to convert</small>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <Link to="/pptx-to-pdf" className="text-decoration-none text-dark">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h3 className="card-title">PPTX to PDF</h3>
                <p className="card-text">Convert presentations to PDFs</p>
              </div>
              <div className="card-footer bg-light">
                <small className="text-muted">Click to convert</small>
              </div>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;





