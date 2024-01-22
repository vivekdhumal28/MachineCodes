import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ApiFetch.css";

const ApiFech = () => {
  const [data, setData] = useState(null);
  const [currentImages, setCurrentImages] = useState(0);
  const [error, setError] = useState(false);
  const [autoplay, setAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentImages((current) =>
          current === data.length - 1 ? 0 : current + 1
        );
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [currentImages, data, autoplay]);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        const responce = await axios.get(
          "https://api.slingacademy.com/v1/sample-data/photos"
        );
        console.log(responce.data.photos);
        console.log(responce.data);
        setData(responce.data.photos);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    })();
  }, []);

  const prevImage = () => {
    setAutoPlay(false);
    setCurrentImages((current) =>
      current === 0 ? data.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setAutoPlay(false);
    setCurrentImages((current) =>
      current === data.length - 1 ? 0 : current + 1
    );
  };

  const handleAutoplay = () => {
    setAutoPlay(!autoplay);
  };

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <div className="carousel-container1">
        <button onClick={prevImage} className="nav-button1">
          &lt;
        </button>
        <div>
          {data && (
            <div key={data[currentImages].id}>
              <img
                className="carousel-image1"
                alt="photosession"
                src={data[currentImages].url}
              />
            </div>
          )}
        </div>

        <button onClick={nextImage} className="nav-button1">
          &gt;
        </button>
      </div>
      <button className="autoPlay" onClick={handleAutoplay}>
        {autoplay ? "Pause" : "Play"}
      </button>
    </>
  );
};

export default ApiFech;
