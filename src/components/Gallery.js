import React from 'react';
import Image1 from '../Assests/SteelGray.jpg';
import SteelGrayDark from '../Assests/SteelGrayDark.jpg';
import BlackPearl from '../Assests/BlackPearl.jpg';


import './Gallery.css'; // <-- Import the CSS file

const Gallery = () => {
  const images = [
    Image1,
    SteelGrayDark,
    BlackPearl,
    "https://imgs.search.brave.com/T3toub4G0064mTAdcxeJ1aHCMPz19mOAfN-uKPp0JLY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc0/ODQ4MzE5L3Bob3Rv/L2dyYW5pdGUtY3Vi/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QzVleDdmN0tQ/MTRneDg5cGFNbkhi/NmJtdkM0dDc0N3ZZ/a1BtU25HTVE1ST0"
  ];

  return (
    <main className="gallery-wrapper">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-container">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Gallery ${index}`} 
            className="gallery-image"
          />
        ))}
      </div>
    </main>
  );
};

export default Gallery;
