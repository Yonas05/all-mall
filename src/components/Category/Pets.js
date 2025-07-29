import React from "react";
import { Typography, Button, Box, Grid } from "@mui/material";

import easy_dogs from "../../assets/Images/pet/easy-dog-sweater-coat-2.jpg.png";
import petout from "../../assets/Images/pet/petout.png";
import petspatric from "../../assets/Images/pet/petspatr.png";
import range from "../../assets/Images/pet/r.png";

const pet_display = [
    {
        id: 1,
        image: easy_dogs,
        brand: "Louvi velloton",
        description: "This is the new product from Louvis Velloton",
        price: '$70'
    },
    {
        id: 2,
        image: petout,
        brand: "Gucci",
        description: "This is the new product from Gucci",
        price: '$3'
    },
    {
        id: 3,
        image: petspatric,
        brand: "Louis Vuitton",
        description: "This is the new product from Louis Vuitton",
        price: '$16'
    },
    {
        id: 4,
        image: range,
        brand: "Adidas",
        description: "This is the new product from Adidas",
        price: '$60'
    },
     {
        id: 5,
        image: range,
        brand: "Adidas",
        description: "This is the new product from Adidas",
        price: '$60'
    },
     {
        id: 4,
        image: range,
        brand: "Adidas",
        description: "This is the new product from Adidas",
        price: '$60'
    },
     {
        id: 4,
        image: range,
        brand: "Adidas",
        description: "This is the new product from Adidas",
        price: '$60'
    },
     {
        id: 4,
        image: range,
        brand: "Adidas",
        description: "This is the new product from Adidas",
        price: '$60'
    },
     {
        id: 4,
        image: range,
        brand: "Adidas",
        description: "This is the new product from Adidas",
        price: '$60'
    },
     {
        id: 4,
        image: range,
        brand: "Adidas",
        description: "This is the new product from Adidas",
        price: '$60'
    },
];

export default function PetGridView() {
    return (
        <Box sx={{ width: '90%', margin: 'auto', paddingTop: 4, marginBottom:"10%"}}>
            <Grid container spacing={4} justifyContent="center">
                {pet_display.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Box
                            sx={{
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                borderRadius: 2,
                                marginTop:"20px",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: 2,
                                height: "auto",
                                backgroundColor: "#fff"
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.brand}
                                style={{ width: "100%", height: 150, objectFit: "contain" }}
                            />
                            <Typography variant="body2" fontWeight="bold" textAlign="center" mt={1}>
                                Description: {item.description}
                            </Typography>
                            <Typography variant="body2" fontWeight="bold" textAlign="center">
                                Brand: {item.brand}
                            </Typography>
                            <Typography variant="body2" fontWeight="bold" textAlign="center" mb={2}>
                                Price: {item.price}
                            </Typography>
                           <Button borderRadius={5} fontWeight="bold" variant="contained" color="" sx={{ margin: "auto", borderBottom: "1px solid #1ed14b", fontWeight: "bold", borderRadius: "20px", display: "block" }}>Add to Cart</Button>
                           
                                    
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
        
    );
}
