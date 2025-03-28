
import './HomePage.css';
import Slider from 'react-slick';
import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SteelGray from '../Assests/SteelGray.jpg';
import SteelGrayDark from '../Assests/SteelGrayDark.jpg';
import BlackPearl from '../Assests/BlackPearl.jpg';




const products = [
    { name: 'Black Pearl', image: BlackPearl },
    { name: 'Steel Gray', image: SteelGray },
    { name: 'Steel Gray Dark', image: SteelGrayDark },
    { name: 'Steel Gray Dark', image: SteelGrayDark },
    { name: 'Steel Gray Dark', image: SteelGrayDark },
    { name: 'Steel Gray Dark', image: SteelGrayDark },
    { name: 'Steel Gray Dark', image: SteelGrayDark },
    { name: 'Steel Gray Dark', image: SteelGrayDark },
];

Modal.setAppElement('#root');

const HomePage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [imagesLoaded, setImagesLoaded] = useState(false);


    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };
    useEffect(() => {
        let loaded = 0;
        const total = products.length;
    
        products.forEach((product) => {
            const img = new Image();
            img.src = product.image;
            img.onload = () => {
                loaded++;
                if (loaded === total) {
                    setImagesLoaded(true);
                }
            };
        });
    }, []);

    const closeModal = () => setModalIsOpen(false);

    const sliderSettings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <main>
        <h2>Welcome to Haripriya granites</h2>
        <p>Premium quality crafted stones for all your needs.</p>
    
        <section className="product-showcase">
    <h2 className="section-title">OUR PRODUCTS</h2>

    <div className="products-row">
        <div className="feature-box">
            <h3>NATURAL STONES</h3>
            <p>
            Haripriya granites offers a comprehensive list of natural stone products,
                including granite, marble, and other natural stones.
            </p>
        </div>

        <div className="slider-wrapper">
            {imagesLoaded && (
                <Slider {...sliderSettings} className="product-slider">
                    {products.map((product, index) => (
                        <div className="product-card" key={index} onClick={() => openModal(product.image)}>
                            <img src={product.image} alt={product.name} />
                            <p>{product.name.toUpperCase()}</p>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    </div>
</section>

    
        {/* Modal */}
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
            <img src={selectedImage} alt="Enlarged" className="modal-image" />
            <button onClick={closeModal} className="close-btn">×</button>
        </Modal>
    </main>
    
    );
};
export default HomePage;
