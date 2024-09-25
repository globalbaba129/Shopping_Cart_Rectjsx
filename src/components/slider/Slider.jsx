import React from "react";

const Slider = () => {
    return (
        <div id="garmentsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#garmentsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#garmentsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#garmentsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="https://img.freepik.com/free-photo/image-stylsh-beautiful-woman-looking-surprised-shocked-reaction-camera-posing-trench-coat_1258-120707.jpg?w=1380&t=st=1727245066~exp=1727245666~hmac=8d41fcc73233bc6a1ce06da649413f985b988d3a4b20b040156af5914cc72359"
                        className="d-block w-100"
                        alt="Garment 1"
                        style={{ height: '700px', objectFit: 'cover' }} // Set height and object fit
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Garment 1</h5>
                        <p>Description of the first garment.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-45.jpg"
                        className="d-block w-100"
                        alt="Garment 2"
                        style={{ height: '700px', objectFit: 'cover' }} // Set height and object fit
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Garment 2</h5>
                        <p>Description of the second garment.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.freepik.com/free-psd/enjoy-travel-banner-template_23-2149068755.jpg?t=st=1727245170~exp=1727245770~hmac=8db13697f7902e5c680273d1a79569e242fe203e7696edb4e93d95e8f1ee0d8d"
                        className="d-block w-100"
                        alt="Garment 3"
                        style={{ height: '700px', objectFit: 'cover' }} // Set height and object fit
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Garment 3</h5>
                        <p>Description of the third garment.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#garmentsCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#garmentsCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;
