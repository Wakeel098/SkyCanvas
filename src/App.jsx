import React from 'react'
import { useState,useEffect } from 'react'
import Title from './Components/Title';


  
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const key = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    async function FetchData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    }
    FetchData();
  }, []);

    

  const renderBackground = () => {
    if (!data) return null;

    const isYouTubeVideo = data.url?.includes("youtube.com/embed");

    if (isYouTubeVideo) {
      return (
        <iframe
          className="absolute top-0 left-0 w-full h-full z-0"
          src={`${data.url}&autoplay=1&mute=1&loop=1&playlist=msiLWxDayuA`}
          
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
        ></iframe>
      );
    }

    return (
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: `url(${data.hdurl})` }}
      ></div>
    );
  };

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center bg-black z-30 h-[100vh] w-[100vw] text-white">
          <i className="mb-4 fa-solid fa-gear text-9xl animate-spin"></i>
          <p className="font-bold text-xl">Loading....!</p>
        </div>
      ) : (
        <div className="h-[100vh] w-[100vw] relative">
          {renderBackground()}
          <div className="h-full w-full relative z-10">
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-[10%]">
              <Title data={data} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
