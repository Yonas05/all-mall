import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typography, Button, Box } from "@mui/material";



import easy_dogs from "../../assets/Images/pet/easy-dog-sweater-coat-2.jpg.png";
import petout from "../../assets/Images/pet/petout.png";
import petspatric from "../../assets/Images/pet/petspatr.png";
import range from "../../assets/Images/pet/r.png";

const pet_display = [
    {
        id: 1,
        image: easy_dogs,
        brand: "Louvi velloton",
        description: "This is the new product from Louvis Velloton",
        price: '$70'
    },
    {
        id: 2,
        image: petout,
        brand: "Gucci",
        description: "This is the new product from Gucci",
        price: '$3'
    },
    {
        id: 3,
        image: petspatric,
        brand: "Louis Vuitton",
        description: "This is the new product from Louis Vuitton",
        price: '$16'
    },
    {
        id: 4,
        image: range,
        brand: "Adidas",
        description: "This is the new product from Adidas", price: '$60'

    },
]

export default function PetDisplay() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            style={{ marginBottom: "20px" }}>
            {
                pet_display.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Box sx={{
                            width: "100%",
                            height: "400px",
                            position: "relative",
                            overflow: "hidden",
                        }}>
                            <img src={slide.image} alt={slide.brand} style={{ width: "80%", height: "200px", objectFit: "contain" }} />


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
    );
}