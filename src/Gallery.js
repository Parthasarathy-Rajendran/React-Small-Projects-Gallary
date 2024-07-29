import React from "react";
import { Link } from 'react-router-dom';
import counterImg from './components/counter/counter-img.png';
import calculatorImg from './components/calculator/calculator-img.png'
import './Gallery.css'

const Gallery = () => {
    const items = [
        { id: 1, title: 'Counter', imageUrl: counterImg, link: '/counter' },
        { id: 2, title: 'Calculator', imageUrl: calculatorImg, link: '/calculator' },
        { id: 3, title: 'Image 2', imageUrl: 'https://via.placeholder.com/150', link: '/image2' },
        { id: 4, title: 'Image 3', imageUrl: 'https://via.placeholder.com/150', link: '/image3' },
        // Add more items as needed
      ];
      return (
        <>
        
        <div className="gallery">
          {items.map(item => (
            <Link to={item.link} key={item.id} className="gallery-item">
              <div className="gallery-item-content">
                <img src={item.imageUrl} alt={item.title} className="gallery-item-image" />
                <h3 className="gallery-item-title">{item.title}</h3>
              </div>
            </Link>
          ))}
          
        </div>
        </>
      );
}

export default Gallery