import React from "react";

import { Button, Grid } from "@mui/material";

let cards = [
    {
        img: require('../../assets/images/1.png'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Mens"
    },
    {
        img: require('../../assets/images/2.png'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Mens"
    },
    {
        img: require('../../assets/images/3.png'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Mens"
    },
    {
        img: require('../../assets/images/4.png'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Womans"
    },
    {
        img: require('../../assets/images/5.png'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Womans"
    },
    {
        img: require('../../assets/images/6.png'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Mens"
    },


    {
        img: require('../../assets/images/acsesuar 1.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Accessories"
    },
    {
        img: require('../../assets/images/acsesuar 2.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Accessories"
    },
    {
        img: require('../../assets/images/acsesuar 3.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Accessories"
    },
    {
        img: require('../../assets/images/acsesuar 4.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Accessories"
    },
    {
        img: require('../../assets/images/acsesuar 5.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Accessories"
    },
    {
        img: require('../../assets/images/acsesuar 6.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Accessories"
    },


    {
        img: require('../../assets/images/Trend 1.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Trendy"
    },
    {
        img: require('../../assets/images/Trend 2.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Trendy"
    },
    {
        img: require('../../assets/images/trend3.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Trendy"
    },
    {
        img: require('../../assets/images/trend4.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Trendy"
    },
    {
        img: require('../../assets/images/trend5.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Trendy"
    },
    {
        img: require('../../assets/images/trend6.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "Trendy"
    },

    {
        img: require('../../assets/images/T-shirt1.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "T-Shirt"
    },
    {
        img: require('../../assets/images/T-shirt2.webp'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "T-Shirt"
    },
    {
        img: require('../../assets/images/T-shirt3.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "T-Shirt"
    },
    {
        img: require('../../assets/images/T-shirt4.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "T-Shirt"
    },
    {
        img: require('../../assets/images/T-shirt5.jpg'),
        title: "Man Sweet Hoodie",
        url: "https//texno-city.uz",
        price: "150",
        status: "T-Shirt"
    },
  
]

const OurProduct = () =>{
    const [ value , setValue] = React.useState(1);

    return (
        <div>
            <div className="btns">
                <Button style={{border:"none", textTransform:"none", backgroundColor:`${value === 1 ? "#023047" : "transparent"}`, color : `${value ===1 ? "#fff" : "#023047"}`}} onClick={()=> setValue(1)}>Hoodie</Button> 
                <Button style={{border:"none", textTransform:"none", backgroundColor:`${value === 2 ? "#023047" : "transparent"}`, color : `${value ===2 ? "#fff" : "#023047"}`}} onClick={()=> setValue(2)}>Accessories</Button> 
                <Button style={{border:"none", textTransform:"none", backgroundColor:`${value === 3 ? "#023047" : "transparent"}`, color : `${value ===3 ? "#fff" : "#023047"}`}} onClick={()=> setValue(3)}>Mens</Button> 
                <Button style={{border:"none", textTransform:"none", backgroundColor:`${value === 4 ? "#023047" : "transparent"}`, color : `${value ===4 ? "#fff" : "#023047"}`}} onClick={()=> setValue(4)}>Womans</Button> 
                <Button style={{border:"none", textTransform:"none", backgroundColor:`${value === 5 ? "#023047" : "transparent"}`, color : `${value ===5 ? "#fff" : "#023047"}`}} onClick={()=> setValue(5)}>Trendy</Button> 
                <Button style={{border:"none", textTransform:"none", backgroundColor:`${value === 6 ? "#023047" : "transparent"}`, color : `${value ===6 ? "#fff" : "#023047"}`}} onClick={()=> setValue(6)}>T-shirt</Button> 
            </div>

        <div className="driver_web_site">
            {
                value === 1 ? (
                    <div className="Hoodie">
                    <Grid container spacing={3}>
                        {
                            cards && cards
                            // .filter(filt => filt?.status ==="Hoodie")
                            .map((card, index) => {
                                return (
                                    <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                                        <div className='card'>
                                            <div className='card-img'>
                                                <img src={card?.img} alt="error" />
                                            </div>
                                            <div className='card-content'>
                                                <div>
                                                    <h3>{card?.title}</h3>
                                                    <span>Star</span>
                                                </div>
                                                <div className='card-content-footer'>
                                                    <a href={card?.url}>Add to card</a>
                                                    <span className="price-card">
                                                        {card?.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </div>
                    ) : value === 2 ? (
                        <div className="Hoodie">
                        <Grid container spacing={3}>
                            {
                                cards && cards
                                .filter(filt => filt?.status === "Accessories")
                                .map((card, index) => {
                                    return (
                                        <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                                            <div className='card'>
                                                <div className='card-img'>
                                                    <img src={card?.img} alt="error" />
                                                </div>
                                                <div className='card-content'>
                                                    <div>
                                                        <h3>{card?.title}</h3>
                                                        <span>Star</span>
                                                    </div>
                                                    <div className='card-content-footer'>
                                                        <a href={card?.url}>Add to card</a>
                                                        <span className="price-card">
                                                            {card?.price}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                        </div>
                    ) :  value === 3 ? ( 
                        <div className="Hoodie">
                        <Grid container spacing={3}>
                            {
                                cards && cards
                                .filter(filt => filt?.status === "Mens")
                                .map((card, index) => {
                                    return (
                                        <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                                            <div className='card'>
                                                <div className='card-img'>
                                                    <img src={card?.img} alt="error" />
                                                </div>
                                                <div className='card-content'>
                                                    <div>
                                                        <h3>{card?.title}</h3>
                                                        <span>Star</span>
                                                    </div>
                                                    <div className='card-content-footer'>
                                                        <a href={card?.url}>Add to card</a>
                                                        <span className="price-card">
                                                            {card?.price}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
    
                        </Grid>
                    </div>
                    ) : value === 4 ? (
                        <div className="Hoodie">
                        <Grid container spacing={3}>
                            {
                                cards && cards
                                .filter(filt => filt?.status === "Womans")
                                .map((card, index) => {
                                    return (
                                        <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                                            <div className='card'>
                                                <div className='card-img'>
                                                    <img src={card?.img} alt="error" />
                                                </div>
                                                <div className='card-content'>
                                                    <div>
                                                        <h3>{card?.title}</h3>
                                                        <span>Star</span>
                                                    </div>
                                                    <div className='card-content-footer'>
                                                        <a href={card?.url}>Add to card</a>
                                                        <span className="price-card">
                                                            {card?.price}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
    
                        </Grid>
                    </div>
                    ) : value === 5 ? (
                        <div className="Hoodie">
                        <Grid container spacing={3}>
                            {
                                cards && cards
                                .filter(filt => filt?.status === "Trendy")
                                .map((card, index) => {
                                    return (
                                        <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                                            <div className='card'>
                                                <div className='card-img'>
                                                    <img src={card?.img} alt="error" />
                                                </div>
                                                <div className='card-content'>
                                                    <div>
                                                        <h3>{card?.title}</h3>
                                                        <span>Star</span>
                                                    </div>
                                                    <div className='card-content-footer'>
                                                        <a href={card?.url}>Add to card</a>
                                                        <span className="price-card">
                                                            {card?.price}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
    
                        </Grid>
                    </div>
                    ) : ( 
                        <div className="Hoodie">
                        <Grid container spacing={3}>
                            {
                                cards && cards
                                .filter(filt=> filt?.status === "T-Shirt")
                                .map((card, index) => {
                                    return (
                                        <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                                            <div className='card'>
                                                <div className='card-img'>
                                                    <img src={card?.img} alt="error" />
                                                </div>
                                                <div className='card-content'>
                                                    <div>
                                                        <h3>{card?.title}</h3>
                                                        <span>Star</span>
                                                    </div>
                                                    <div className='card-content-footer'>
                                                        <a href={card?.url}>Add to card</a>
                                                        <span className="price-card">
                                                            {card?.price}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
    
                        </Grid>
                    </div>      
                ) 
            }
            </div>
        </div>


    )
}

export default OurProduct;