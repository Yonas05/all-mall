import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Furniture_Detail() {
    const [electronics, setElectronics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/furnitures-collections/${id}`);
    };

    useEffect(() => {
        axios
            .get("http://localhost:3500/inventory")
            .then((response) => {
              

                const filtered = response.data.filter(
                    (item) => item.category && item.category === "Furniture"
                );

                setElectronics(filtered);
                setError(false);
            })
            .catch((err) => {
                console.error("Error fetching electronics:", err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Loading
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={5}>
                <CircularProgress />
            </Box>
        );
    }

    // Error
    if (error) {
        return (
            <Typography textAlign="center" mt={5} color="error">
                Failed to load electronics data.
            </Typography>
        );
    }

    // No data
    if (electronics.length === 0) {
        return (
            <Typography textAlign="center" mt={5}>
                No Electronic items found.
            </Typography>
        );
    }

    // Display all items
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1400px",
                margin: "auto",
                paddingTop: 4,
                paddingBottom: 4,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 3,
            }}
        >
            {electronics.map((item) => (
                <Box
                    key={item.idno}
                    onClick={() => handleCardClick(item.idno)}
                    sx={{
                        cursor: "pointer",
                        transition: "0.3s ease",
                        "&:hover": {
                            transform: "scale(1.02)",
                            boxShadow: "0px 6px 16px rgba(0,0,0,0.25)",
                        },
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                        borderRadius: "12px",
                        padding: 2,
                        backgroundColor: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={item.image}
                        alt={item.name}
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
                        variant="body2"
                        sx={{ textAlign: "center", color: "#555", marginTop: "5px" }}
                    >
                        {item.description}
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "#333",
                            background: "#f7f7f7",
                            width: "100%",
                            padding: "8px 0",
                            borderRadius: "10px",
                            border: "1px solid #e0e0e0",
                        }}
                    >
                        ${item.price}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}
