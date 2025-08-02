import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Typography, Box } from "@mui/material";
import televison from "../../assets/Images/electronics/television.png";
import iphone from "../../assets/Images/electronics/Iphone.png";
import samsung from "../../assets/Images/electronics/samsung.png";
import earphone from "../../assets/Images/electronics/earphone.png";
import headphone from "../../assets/Images/electronics/headphone.png";
import { useNavigate } from "react-router-dom";


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
export default function Kid_Details() {
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate(`/electronics-collections/${id}`);
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1200px",
                margin: "auto",
                paddingTop: 4,
                paddingBottom: 4,

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
                    1280: { slidesPerView: 4 }, // This ensures 4 images per slide on large screens
                }}
            >
                {
                    display_electronics.map((item) => (
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
                                    alt={item.name}
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
                                    {item.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontWeight="bold"
                                    textAlign="center"
                                    mb={2}
                                >
                                    Price: ${item.price}
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    );
}
