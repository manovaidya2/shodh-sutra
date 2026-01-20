import React, { useState, useEffect } from "react";
import "../styles/gallery.css";
import axios from "../api/axiosInstance";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  const visibleImages = 5;

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get(
        "/gallery"
      );
      setImages(res.data);
    };
    fetchImages();
  }, []);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - visibleImages : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev >= images.length - visibleImages ? 0 : prev + 1
    );
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Gallery</h2>
          <p>Explore moments from our sessions & courses</p>
        </div>

        <div className="carousel-wrapper">
          <button className="nav-btn left" onClick={prevSlide}>
            <FiChevronLeft />
          </button>

          <div className="carousel-window">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${index * 220}px)` }}
            >
              {images.map((img) => (
                <div className="carousel-item" key={img._id}>
                  <img
                    src={`http://localhost:5007${img.imageUrl}`}
                    alt=""
                  />
                  <div
                    className="overlay"
                    onClick={() =>
                      setSelectedImg(
                        `http://localhost:5007${img.imageUrl}`
                      )
                    }
                  >
                    <span>View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-btn right" onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>
      </div>

      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <div className="modal-content">
            <button className="close-btn">
              <FiX />
            </button>
            <img src={selectedImg} alt="Preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
