import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Typography, Box } from "@mui/material";

import w_tshirt from '../../assets/Images/women/bag.png'
import w_complete from '../../assets/Images/women/complete.png'
import w_jacket from '../../assets/Images/women/jacket.png'
import w_shoe from '../../assets/Images/women/women-sneaker.png'
import w_bag from '../../assets/Images/women/sweater.png'

const women_display = [
    {
        id: 1,
        image: w_tshirt,
        brand: "Puma",
        description: "This is the new product from Puma",
        price: '$100'
    },
    {
        id: 2,
        image: w_complete,
        brand: "Gucci",
        description: "This is the new product from Gucci",
        price: '$200'
    },
    {
        id: 3,
        image: w_jacket,
        brand: "Louis Vuitton",
        description: "This is the new product from Louis Vuitton",
        price: '$1520'
    },
    {
        id: 4,
        image: w_shoe,
        brand: "Adidas",
        description: "This is the new product from Adidas",
        price: '$600'
    },
    {
        id: 5,
        image: w_bag,
        brand: "Nike",
        description: "This is the new product from Nike",
        price: '$100'
    }
];

function Women_Display() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            Pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            style={{ marginBottom: "20px" }}
        >
            {women_display.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <Box sx={{
                        width: "100%",
                        height: "400px",
                        position: "relative",
                        overflow: "hidden",
                    }}>
                        <img src={slide.image} alt={slide.description}
                            style={{
                                width: "80%",
                                height: "200px",
                                objectFit: "contain",
                                margin: "auto",
                            }} />
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>
                            Description: {slide.description}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>
                            Brand: {slide.name}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>
                            Price: {slide.price}
                        </Typography>
                        <br />

                    </Box>

                </SwiperSlide>

            ))}

        </Swiper>
    )
}

export default Women_Display;