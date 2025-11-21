import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
// Install the modules
import { Box, Typography } from '@mui/material';

// Import images for the man category
import { useState,useEffect } from 'react';
import axios from 'axios';
function Man_Display() {
  const [man_display, setManDisplay] = useState([]);
  useEffect(() => {
    axios
            .get("http://localhost:3500/inventory")
            .then((response) => {
                
                // Filter safely: trim and convert to lowercase
                const filtered = response.data.filter(
                    (item) =>
                        item.category &&
                        item.category === "Men"
                );


                setManDisplay(filtered);
               
            })
            .catch((err) => {
                console.error("Error fetching electronics:", err);
                
            })
    // Fetch data for man_display here and update state
  }, []);
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
              Price: ${slide.price}
            </Typography>
            <br />
           
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Man_Display;
