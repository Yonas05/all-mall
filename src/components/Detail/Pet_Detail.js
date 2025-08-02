import React from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export default function Pet_Detail() {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/pets-collections/${id}`);        
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1200px",
                margin: "auto",
                paddingTop: 4,
                paddingBottom: 4,
                marginTop:4,
                marginBottom:4,
            }}
        >
             <br /> <br /> 
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    600: { slidesPerView: 2 },
                    960: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {pet_display.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Box
                            onClick={() => handleCardClick(item.id)}
                            sx={{
                                cursor: "pointer",
                                transition: "0.3s",
                                "&:hover": {
                                    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                                    transform: "scale(1.02)",
                                },
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                borderRadius: 2,
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: 2,
                                backgroundColor: "#fff",
                                height: "100%",
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.brand}
                                style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "contain",
                                }}
                            />
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                textAlign="center"
                                mt={1}
                            >
                                Description: {item.description}
                            </Typography>
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                textAlign="center"
                            >
                                Brand: {item.brand}
                            </Typography>
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                textAlign="center"
                                mb={2}
                            >
                                Price: {item.price}
                            </Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
