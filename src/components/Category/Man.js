import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
// Install the modules
import { Box, Button, Typography } from '@mui/material';

// Import images for the man category
import tshirt from "../../assets/Images/man/t-shirt.png";
import tshirt1 from "../../assets/Images/man/t-shist1.png";
import jacket from "../../assets/Images/man/jacket.png";
import shoe from "../../assets/Images/man/shoes.png";
import shoe1 from "../../assets/Images/man/shoes2.png";

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

function Man_Display() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Enable the modules
      pagination={{ clickable: true }} // Enable pagination
      loop // Enable infinite loop
      autoplay={{ delay: 3000, disableOnInteraction: true }} // Enable autoplay with a 3-second delay
      style={{ marginBottom: "20px" }}
    >
      {man_display.map((slide) => (
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

export default Man_Display;
