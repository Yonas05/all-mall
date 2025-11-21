import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typography, Box, CircularProgress } from "@mui/material";
import axios from "axios";

function Kids() {
    const [kids, setKids] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:3500/inventory")
            .then((response) => {
                console.log("Full API Data:", response.data);

                // Filter safely: trim and convert to lowercase
                const filtered = response.data.filter(
                    (item) =>
                        item.category &&
                        item.category === "Kid"
                );
          
             setKids(filtered);
                setError(false);
            })
            .catch((err) => {
                console.error("Error fetching kids:", err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={5}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography textAlign="center" mt={5} color="error">
                Failed to load electronics data.
            </Typography>
        );
    }

    if (kids.length === 0) {
        return (
            <Typography textAlign="center" mt={5}>
                No Electronic items found.
            </Typography>
        );
    }

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Enable the modules
            pagination={{ clickable: true }} // Enable pagination
            loop // Enable infinite loop
            autoplay={{ delay: 3000, disableOnInteraction: true }} // Enable autoplay with a 3-second delay
            style={{ marginBottom: "20px" }}
        >
            {kids.map((item) => (
                <SwiperSlide key={item._id}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "400px",
                            overflow: "hidden",
                            padding: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.description}
                            style={{
                                width: "80%",
                                height: "200px",
                                objectFit: "contain",
                                marginBottom: "15px",
                            }}
                        />

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                            {item.name}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{ textAlign: "center", color: "#555" }}
                        >
                            {item.description}
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", textAlign: "center", marginTop: 1 }}
                        >
                            ${item.price}
                        </Typography>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Kids;
