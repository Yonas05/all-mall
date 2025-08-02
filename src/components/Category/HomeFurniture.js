import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typography, Box } from "@mui/material";


import all_in_one from "../../assets/Images/home_furniture/all_in_one.png";
import dining_table from "../../assets/Images/home_furniture/dinner_table.png";
import sofa from "../../assets/Images/home_furniture/sofa1.png";
import sofacurtain from "../../assets/Images/home_furniture/sofa_curtains.png";
import permus from "../../assets/Images/home_furniture/phermus.png";
import bed1 from "../../assets/Images/home_furniture/bed1.png";
import bed2 from "../../assets/Images/home_furniture/bed2.jpg";

const home_furniture_display = [
    { id: 1, image: permus, brand: "Puma", description: "This is the new product from Timus", price: '$180' },
    { id: 2, image: all_in_one, brand: "Timus", description: "This is the new product from Timus", price: '$900' },
    { id: 3, image: sofa, brand: "Louis Vuitton", description: "This is the new product from Louis Vuitton", price: '$520' },
    { id: 4, image: sofacurtain, brand: "Baressa", description: "This is the new product from Barressa", price: '$600' },
    { id: 6, image: bed1, brand: "Dileux", description: "This is the new product from Baressa", price: '$210' },
    { id: 7, image: bed2, brand: "Baressa", description: "This is the new product from Baressa", price: '$250' },
    { id: 8, image: dining_table, brand: "Dileux", description: "This is the new product from dileux", price: '$100' }
];

function Home_Furniture_Display() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            style={{ marginBottom: "20px" }}>
            {home_furniture_display.map((slide) => (
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

                    </Box>

                </SwiperSlide>
            ))}
        </Swiper>
    );
}


export default Home_Furniture_Display;