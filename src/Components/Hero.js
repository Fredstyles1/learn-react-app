import React from "react";

function Hero() {
    return (
        <section className="hero">
            <div className="row">
                {/* <img src={require('../image/photo-grid/splash fruit.jpg')} alt="fruit" className="hero--photo" /> */}
                <img src={require('../image/photo-grid/berries1.jpg')} alt="berries" className="hero--photo1" />
                <img src={require('../image/photo-grid/splash fruit.jpg')} alt="splash" className="hero--photo5" />
                <img src={require('../image/photo-grid/berries1.jpg')} alt="berries" className="hero--photo5" />
                <img src={require('../image/photo-grid/splash fruit.jpg')} alt="splash" className="hero--photo1" />
            </div>
            <div className="row">
                <img src={require('../image/photo-grid/berries1.jpg')} alt="berry" className="hero--photo2" />
                <img src={require('../image/photo-grid/splash fruit.jpg')} alt="splash fruit" className="hero--photo4" />
                <img src={require('../image/photo-grid/berries1.jpg')} alt="berries1" className="hero--photo4" />
                <img src={require('../image/photo-grid/splash fruit.jpg')} alt="splash fruit" className="hero--photo4" />
                <img src={require('../image/photo-grid/berries1.jpg')} alt="berries1" className="hero--photo2" />
            </div>
            <div className="row">
                {/* <img src={require('../image/photo-grid/berries1.jpg')} alt="berry" className="hero--photo2" /> */}
                <img src={require('../image/photo-grid/splash fruit.jpg')} alt="splash fruit" className="hero--photo1" />
                <img src={require('../image/photo-grid/berries1.jpg')} alt="berries1" className="hero--photo3" />
                <img src={require('../image/photo-grid/splash fruit.jpg')} alt="splash fruit" className="hero--photo3" />
                <img src={require('../image/photo-grid/berries1.jpg')} alt="berries1" className="hero--photo1" />
            </div>
            <div className="hero-header-text">
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activity one of a kind hosts all without leaving home</p>
            </div>
            
        </section>
    )
}
 export default Hero;