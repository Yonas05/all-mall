import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
// Install the modules
import { Box, Button, Typography } from '@mui/material';

// Import images for the man category
import easy_dogs from "../../assets/Images/pet/image.png";
import petout from "../../assets/Images/pet/petout.png";
import petspatric from "../../assets/Images/pet/petspatr.png";
import range from "../../assets/Images/pet/r.png";

const pet_display = [
    {
        id: 1,
        image: easy_dogs,
        brand: "Louvi Velloton",
        description: "This is the new product from Louvi Velloton",
        price: "$70",
    },
    {
        id: 2,
        image: petout,
        brand: "Gucci",
        description: "This is the new product from Gucci",
        price: "$3",
    },
    {
        id: 3,
        image: petspatric,
        brand: "Louis Vuitton",
        description: "This is the new product from Louis Vuitton",
        price: "$16",
    },
    {
        id: 4,
        image: range,
        brand: "Adidas",
        description: "This is the new product from Adidas",
        price: "$60",
    },
    // Add more if needed
];

function Pets() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Enable the modules
            pagination={{ clickable: true }} // Enable pagination
            loop // Enable infinite loop
            autoplay={{ delay: 3000, disableOnInteraction: true }} // Enable autoplay with a 3-second delay
            style={{ marginBottom: "20px" }}
        >
            {pet_display.map((slide) => (
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
    );
}

export default Pets;
