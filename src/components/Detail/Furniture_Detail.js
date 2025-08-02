import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Typography, Box } from "@mui/material";
import all_in_one from "../../assets/Images/home_furniture/all_in_one.png";
import dining_table from "../../assets/Images/home_furniture/dinner_table.png";
import sofa from "../../assets/Images/home_furniture/sofa1.png";
import sofacurtain from "../../assets/Images/home_furniture/sofa_curtains.png";
import permus from "../../assets/Images/home_furniture/phermus.png";
import bed1 from "../../assets/Images/home_furniture/bed1.png";
import bed2 from "../../assets/Images/home_furniture/bed2.jpg";
import { useNavigate } from "react-router-dom";
const display_furnitures = [
    {
        id: 1,
        image: permus,
        brand: "Puma",
        description: "This is the new product from Timus",
        price: '$180'
    },
    {
        id: 2,
        image: all_in_one,
        brand: "Timus",
        description: "This is the new product from Timus",
        price: '$900'
    },
    {
        id: 3,
        image: sofa,
        brand: "Louis Vuitton",
        description: "This is the new product from Louis Vuitton",
        price: '$520'
    },
    {
        id: 4,
        image: sofacurtain,
        brand: "Baressa",
        description: "This is the new product from Barressa",
        price: '$600'
    },
    {
        id: 6,
        image: bed1,
        brand: "Dileux",
        description: "This is the new product from Baressa",
        price: '$210'
    },
    {
        id: 7,
        image: bed2,
        brand: "Baressa",
        description: "This is the new product from Baressa",
        price: '$250'
    },
    {
        id: 8,
        image: dining_table,
        brand: "Dileux",
        description: "This is the new product from dileux",
        price: '$100'
    }
];
export default function Kid_Details() {
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate(`/furnitures-collections/${id}`);
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
                    display_furnitures.map((item) => (
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
