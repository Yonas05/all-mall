import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typography, Button, Box } from "@mui/material";

import televison from "../../assets/Images/electronics/television.png";
import iphone from "../../assets/Images/electronics/Iphone.png";
import samsung from "../../assets/Images/electronics/samsung.png";
import earphone from "../../assets/Images/electronics/earphone.png";
import headphone from "../../assets/Images/electronics/headphone.png";
import { Height } from "@mui/icons-material";

const display_electronics = [

    {
        id: 2,
        image: televison,
        brand: "Samsung",
        description: "This is the new product from Samsung",
        price: '$200'
    },
    {
        id: 3,
        image: iphone,
        brand: "Apple",
        description: "This is the new product from Apple",
        price: '$1520'
    },
    {
        id: 4,
        image: samsung,
        brand: "Samsung",
        description: "This is the new product from Samsung",
        price: '$600'
    },
    {
        id: 5,
        image: earphone,
        brand: "Apple",
        description: "This is the new product from Apple",
        price: '$100'
    },
    {
        id: 6,
        image: headphone,
        brand: "Sony",
        description: "This is the new product from Sony",
        price: '$150',
    },
];
function Electronics_Display() {
    return (
        <Swiper modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            style={{ marginBottom: "20px" }}>
            {
                display_electronics.map((slide) => (
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
                            <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Description: {slide.description}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Brand: {slide.name}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Price: {slide.price}
                            </Typography>
                            <br />
                            <Button borderRadius={5} fontWeight="bold" variant="contained" color="" sx={{ margin: "auto", borderBottom: "1px solid #1ed14b", fontWeight: "bold", borderRadius: "20px", display: "block" }}>Add to Cart</Button>

                        </Box>

                    </SwiperSlide>


                ))}

        </Swiper>
    )


}
export default Electronics_Display;
