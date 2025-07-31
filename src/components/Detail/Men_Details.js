import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Typography, Box } from "@mui/material";
import tshirt from "../../assets/Images/man/t-shirt.png";
import tshirt1 from "../../assets/Images/man/t-shist1.png";
import jacket from "../../assets/Images/man/jacket.png";
import shoe from "../../assets/Images/man/shoes.png";
import shoe1 from "../../assets/Images/man/shoes2.png";
import { useNavigate } from "react-router-dom";

const man_display = [
    {
        id: 1,
        name: "T-shirt",
        image: tshirt,
        price: 1000,
        rating: 4.5,
        description: "This is a t-shirt made of cotton.",
    },
    {
        id: 2,
        name: "T-shirt",
        image: tshirt1,
        price: 1200,
        rating: 4.7,
        description: "This is a t-shirt made of cotton.",
    },
    {
        id: 3,
        name: "Jacket",
        image: jacket,
        price: 2000,
        rating: 4.8,
        description: "This is a jacket made of leather.",
    },
    {
        id: 4,
        name: "Shoes",
        image: shoe,
        price: 3000,
        rating: 4.9,
        description: "These are shoes made of leather.",
    },
    {
        id: 5,
        name: "Shoes",
        image: shoe1,
        price: 3500,
        rating: 4.6,
        description: "These are shoes made of leather.",
    }
];

export default function Men_Details() {
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate(`/men/${id}`);
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
                    man_display.map((item) => (
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
