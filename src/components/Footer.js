import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div>
                    <h4>Raghu Rocks</h4>
                    <p>16-1-25, Gandhi Chowk<br />Tenali, Andhra Pradesh 522201</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>Phone: 8143577577<br />Email: raghuram.jasti@gmail.com</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <p>Home | About | Gallery | Contact</p>
                </div>
            </div>
            <div className="footer-bottom">
    <p className="copyright">© {new Date().getFullYear()} Dulam Rocks. All rights reserved.</p>
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
