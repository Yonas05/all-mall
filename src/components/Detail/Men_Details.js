import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Men_Details() {
    const navigate = useNavigate();
    const [menDisplay, setMenDisplay] = useState([]);

    const handleCardClick = (id) => {
        navigate(`/men-collections/${id}`);
    };

    useEffect(() => {
        axios
            .get("http://localhost:3500/inventory")
            .then((response) => {
                console.log("Full API Data:", response.data);

                // Filter safely: trim and convert to lowercase
                const filtered = response.data.filter(
                    (item) =>
                        item.category &&
                        item.category === "Men"
                );

                setMenDisplay(filtered);
              
            })
            .catch((err) => {
                console.error("Error fetching electronics:", err);
              
            }).catch(error => console.error("Error fetching men display data:", error));
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1400px",
                margin: "auto",
                padding: 4,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 3,
            }}
        >
            {menDisplay.map((item) => (
                <Box
                    key={item.idno}
                    onClick={() => handleCardClick(item.idno)}
                    sx={{
                        cursor: "pointer",
                        transition: "0.35s ease",
                        borderRadius: "16px",
                        padding: 2.5,
                        background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                        "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                            background: "linear-gradient(145deg, #fdfdfd, #ededed)",
                        },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "200px",
                            borderRadius: "14px",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "15px",
                            background: "linear-gradient(180deg, #fafafa, #eaeaea)",
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{
                                width: "80%",
                                height: "80%",
                                objectFit: "contain",
                            }}
                        />
                    </Box>

                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: "6px",
                        }}
                    >
                        {item.name}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: "center",
                            color: "#555",
                            minHeight: "40px",
                            marginBottom: "10px",
                        }}
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
