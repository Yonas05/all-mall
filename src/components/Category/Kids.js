import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typography, Box } from "@mui/material";

//kid category is displayed here
import i1 from "../../assets/Images/kids/1.png";
import i2 from "../../assets/Images/kids/2.png";
import i3 from "../../assets/Images/kids/3.png";
import i4 from "../../assets/Images/kids/4.png";
import i5 from "../../assets/Images/kids/5.png";
const kid_display = [

    {
        id: 1,
        image: i1,
        brand: "Puma",
        description: "This is the new product from Puma", price: '$100'
    },
    {
        id: 2,
        image: i2,
        brand: "Gucci",
        description: "This is the new product from Gucci",
        price: '$200'
    },
    {
        id: 3,
        image: i3,
        brand: "Louis Vuitton",
        description: "This is the new product from Louis Vuitton",
        price: '$1520'
    },
    {
        id: 4,
        image: i4,
        brand: "Adidas",
        description: "This is the new product from Adidas",
        price: '$600'
    },
    {
        id: 5,
        image: i5,
        brand: "Nike",
        description: "This is the new product from Nike", price: '$100'
    }
];

    function Kid_Display() {
        return (
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                style={{ marginBottom: "20px" }}>
                {
                    kid_display.map((slide) => (
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
                          
                                    </Box>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        )
    }


export default Kid_Display;
