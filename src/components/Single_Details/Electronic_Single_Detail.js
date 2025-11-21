import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material"
import ElectronicDetail from "../Detail/Electronic_Detail";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import axios from "axios";
export default function Pet_Single_Detail() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3500/inventory/${id}`)
            .then((response) => {
                setItem(response.data);
                setError(false);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [id]);

    // 🟡 Loading UI
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={10}>
                <CircularProgress />
            </Box>
        );
    }

    // 🔴 Error UI
    if (error || !item) {
        return (
            <Typography textAlign="center" mt={5} color="error">
                Failed to load item details.
            </Typography>
        );
    }

    return (
        <Box sx={{ maxWidth: "1200px", margin: "auto", mt: 5, p: 2 }}>
            <Grid container spacing={4} alignItems="center">
                {/* IMAGE SECTION */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "350px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "12px",
                            overflow: "hidden",
                            border: "1px solid #e0e0e0",
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                padding: "10px",
                            }}
                        />
                    </Box>
                </Grid>

                {/* DETAILS SECTION */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" fontWeight="bold">
                        {item.name}
                    </Typography>

                    <Typography mt={1} variant="subtitle1" color="text.secondary">
                        ID: {item.idno}
                    </Typography>

                    <Typography mt={2} fontWeight="bold">
                        Description:
                    </Typography>
                    <Typography>{item.description}</Typography>

                    <Typography mt={2} fontWeight="bold">
                        Brand:
                    </Typography>
                    <Typography>{item.brand}</Typography>

                    <Typography mt={2} fontWeight="bold">
                        Price:
                    </Typography>
                    <Typography>${item.price}</Typography>

                    <Typography mt={2} fontWeight="bold">
                        Rating:
                    </Typography>
                    <Typography>{item.rating} ⭐</Typography>

                    <Button
                        variant="contained"
                        sx={{
                             mt: 3,
                            borderRadius: "25px",
                            px: 4,
                            fontWeight: "bold",
                            fontSize: "10px",
                            backgroundColor: "#ffffff",
                            color: "#0d0d0dff",
                            borderBottom: "1px solid #1ed14b",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#f7f7f7",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Add to Cart
                    </Button>
                </Grid>
            </Grid>

            {/* RELATED ITEMS */}
            <Box mt={10} textAlign="center">
                <Typography variant="h5" fontWeight="bold">
                    Related Items
                </Typography>

                <Box mt={2}>
                    <ElectronicDetail /> {/* No Typography wrapper */}
                </Box>
            </Box>
        </Box>
    );
}
