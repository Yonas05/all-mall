import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Typography, Box } from "@mui/material";
import i1 from "../../assets/Images/kids/1.png";
import i2 from "../../assets/Images/kids/2.png";
import i3 from "../../assets/Images/kids/3.png";
import i4 from "../../assets/Images/kids/4.png";
import i5 from "../../assets/Images/kids/5.png";
import { useNavigate } from "react-router-dom";

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
export default function Kid_Details() {
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate(`/kids-collections/${id}`);
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
                    kid_display.map((item) => (
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
