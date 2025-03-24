import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/HomePage';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './styles/App.css';


const App = () => {
    return (
        <div id="root">
            <Header />
            <main>
                <Routes>
                <Route index element={<HomePage />} /> {/* ✅ default route */}
                <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
