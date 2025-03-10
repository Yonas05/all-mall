import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Box, Typography } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import local images
import image1 from "../assets/Images/Image1.jpg";
import image2 from "../assets/Images/Image2.jpg";
import image3 from "../assets/Images/Image3.jpg";

const AutoSlideCarousel = () => {
  const slides = [
    {
      id: 1,
      image: image1,
      title: "Slide 1",
      subtitle: "This is the first slide",
    },
    {
      id: 2,
      image: image2,
      title: "Slide 2",
      subtitle: "This is the second slide",
    },
    {
      id: 3,
      image: image3,
      title: "Slide 3",
      subtitle: "This is the third slide",
    },
  ];

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 4 }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 3000, // 3 seconds delay for auto-slide
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        style={{ marginBottom: "20px" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              sx={{
                width: "100%",
                height: "450px", // Slightly larger for better image visibility
                position: "relative", // Needed for absolute positioning of the subtitle
                overflow: "hidden",
              }}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Subtitle in the middle of the image */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%", // Center vertically
                  left: "50%", // Center horizontally
                  transform: "translate(-50%, -50%)", // Adjust to exactly center
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold", // Makes the text bold for emphasis
                    textTransform: "uppercase", // Capitalize the subtitle
                  }}
                >
                  {slide.subtitle}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default AutoSlideCarousel;
