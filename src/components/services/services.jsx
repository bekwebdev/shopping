import React from "react";
import { Grid } from '@mui/material'

const Services = () => {
    return (
        <React.Fragment>
            <Grid container className="service-container">

                <Grid item lg={3} md={4} xs={12}>
                    <div className="services-item" >
                        <img src={require('../../assets/images/icons/car_icon.png')} alt="" />
                        <text>
                            <h3>Free Shipping</h3>
                            <span>Orders over $200</span>
                        </text>
                    </div>
                </Grid>

                <Grid item lg={3} md={4} xs={12}>
                    <div className="services-item" >
                        <img src={require('../../assets/images/icons/card.png')} alt="" />
                        <text>
                            <h3>Secure Payment</h3>
                            <span>Buy now $500 to $1000</span>
                        </text>
                    </div>
                </Grid>

                <Grid item lg={3} md={4} xs={12}>
                    <div className="services-item" >
                        <img src={require('../../assets/images/icons/box.png')} alt="" />
                        <text>
                            <h3>Gift Certificae</h3>
                            <span>Buy now $500 to $1000</span>
                        </text>
                    </div>
                </Grid>

                <Grid item lg={3} md={4} xs={12}>
                    <div className="services-item" >
                        <img src={require('../../assets/images/icons/contact.png')} alt="" />
                        <text>
                            <h3>24/7 Support</h3>
                            <span>Ready support</span>
                        </text>
                    </div>
                </Grid>
            </Grid>



            <Grid container className="kalleksiya-container">
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="kolleksiya-item">
                        <img src={require('../../assets/images/qiz.png')} alt="" />
                        <div className="hello">
                            <h5>Top Collection</h5>
                            <h2>SHOP WOMANS</h2>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className="kolleksiya-item">
                        <img src={require('../../assets/images/bola.png')} alt="" />
                        <div className="hello">
                            <h5>New Collection</h5>
                            <h2>SUMMER FASHION</h2>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </Grid>

                

            </Grid>
        </React.Fragment>
    )
}




export default Services;