import React from "react";
import Slider from 'react-slick'

const Carousel = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"

    }
    return (
        <>
        <div className="carousel-back">
            <div className="carousel-back-left">

            </div>
            <div className="carousel-back-right">
                <img src={require('../../assets/images/ebRaw.png')} alt="" />

            </div>
            <div className="slider-con" >
                <Slider {...settings}>
                    <div className="item">
                        <div className="item-container">
                            <div className="item-left">
                                <span  className="small-text" >New Inspireation</span>
                                <h1>
                                    Man <br />
                                    <span>Collection 2022</span>
                                </h1>
                                <span className="small-text" >
                                    Trendy for man and woman collections
                                </span>
                                <button> 
                                    Shop Now
                                </button>
                            </div>
                            <div className="item-right">
                                <img src={require("../../assets/images/hunters-race-hNoSCxPWYII-unsplash 1.png")} alt="" />
                            </div>
                        </div>
                    </div>
                   
                    <div className="item">
                        <div className="item-container">
                            <div className="item-left">
                                <span  className="small-text" >New Inspireation</span>
                                <h1>
                                    Man <br />
                                    <span>Collection 2022</span>
                                </h1>
                                <span className="small-text" >
                                    Trendy for man and woman collections
                                </span>
                                <button> 
                                    Shop Now
                                </button>
                            </div>
                            <div className="item-right">
                                <img src={require("../../assets/images/hunters-race-hNoSCxPWYII-unsplash 1.png")} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-container">
                            <div className="item-left">
                                <span  className="small-text" >New Inspireation</span>
                                <h1>
                                    Man <br />
                                    <span>Collection 2022</span>
                                </h1>
                                <span className="small-text" >
                                    Trendy for man and woman collections
                                </span>
                                <button> 
                                    Shop Now
                                </button>
                            </div>
                            <div className="item-right">
                                <img src={require("../../assets/images/hunters-race-hNoSCxPWYII-unsplash 1.png")} alt="" />
                            </div>
                        </div>
                    </div>
                   
                   

                </Slider>
            </div>
        </div>
            
        </>
    )
}
export default Carousel;