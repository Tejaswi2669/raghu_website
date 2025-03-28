import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div>
                    <h4>Haripriya granites</h4>
                    <p>Konidena Rd, K.Rajupalem<br /> Andhra Pradesh 523301</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>Phone: 8897675338<br />Email: Jasti.Raghuram@gmail.com</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <p>Home | About | Gallery | Contact</p>
                </div>
            </div>
            <div className="footer-bottom">
    <p className="copyright">© {new Date().getFullYear()} Haripriya granites. All rights reserved.</p>
    <p className="developer">
        Designed & Developed by{' '}
        <a href="https://github.com/akhiljakka" target="_blank" rel="noopener noreferrer">
            Akhil Jakka
        </a>
    </p>
</div>


        </footer>
    );
};

export default Footer;
