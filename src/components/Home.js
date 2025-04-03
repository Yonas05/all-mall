import React from "react";

//import category

import Man_Display from "./Category/Man_Display";

// the following image is used for women category
import w_tshirt from "../assets/Images/women/sweater.png";
import w_bag from "../assets/Images/women/bag.png";
import w_complete from "../assets/Images/women/complete.png";
import w_jacket from "../assets/Images/women/jacket.png";
// the following image is used for electronic category
import lg from "../assets/Images/electronics/lgtv.png";
import televison from "../assets/Images/electronics/television.png";
import iphone from "../assets/Images/electronics/Iphone.png";
import samsung from "../assets/Images/electronics/samsung.png";
import earphone from "../assets/Images/electronics/earphone.png";
import headphone from "../assets/Images/electronics/headphone.png";
import w_shoe from "../assets/Images/women/women-sneaker.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
//kid category is displayed here
import i1 from "../assets/Images/kids/1.png";
import i2 from "../assets/Images/kids/2.png";
import i3 from "../assets/Images/kids/3.png";
import i4 from "../assets/Images/kids/4.png";
import i5 from "../assets/Images/kids/5.png";
//import home and furniture image

import tshirt from "../assets/Images/man/t-shirt.png";
import tshirt1 from "../assets/Images/man/t-shist1.png";
import jacket from "../assets/Images/man/jacket.png";
import shoe from "../assets/Images/man/shoes.png";
import shoe1 from "../assets/Images/man/shoes2.png";


import all_in_one from "../assets/Images/home_furniture/all_in_one.png";
import dining_table from "../assets/Images/home_furniture/dinner_table.png";
import sofa from "../assets/Images/home_furniture/sofa1.png";
import sofacurtain from "../assets/Images/home_furniture/sofa_curtains.png";
import permus from "../assets/Images/home_furniture/phermus.png";
import bed1 from "../assets/Images/home_furniture/bed1.png";
import bed2 from "../assets/Images/home_furniture/bed2.jpg";
//import Pets image
import easy_dogs from "../assets/Images/pet/easy-dog-sweater-coat-2.jpg.png";
import petout from "../assets/Images/pet/petout.png";
import petspatric from "../assets/Images/pet/petspatr.png";
import range from "../assets/Images/pet/r.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import MUI components    
import {
    Card, CardContent, Grid, ThemeProvider, Typography, createTheme, Box,
    Button
} from "@mui/material";

// Create a theme with Ubuntu font
const theme = createTheme({
    typography: {
        fontFamily: "'Ubuntu', sans-serif",
        fontSize: 10
    },
});

const man_display = [

    { id: 1, image: tshirt, brand: "Puma", description: "This is the new product from Puma", price: '$100' },
    { id: 2, image: tshirt1, brand: "Gucci", description: "This is the new product from Gucci", price: '$200' },
    { id: 3, image: jacket, brand: "Louis Vuitton", description: "This is the new product from Louis Vuitton", price: '$1520' },
    { id: 4, image: shoe, brand: "Adidas", description: "This is the new product from Adidas", price: '$600' },
    { id: 5, image: shoe1, brand: "Nike", description: "This is the new product from Nike", price: '$100' }
];

const kid_display = [

    { id: 1, image: i1, brand: "Puma", description: "This is the new product from Puma", price: '$100' },
    { id: 2, image: i2, brand: "Gucci", description: "This is the new product from Gucci", price: '$200' },
    { id: 3, image: i3, brand: "Louis Vuitton", description: "This is the new product from Louis Vuitton", price: '$1520' },
    { id: 4, image: i4, brand: "Adidas", description: "This is the new product from Adidas", price: '$600' },
    { id: 5, image: i5, brand: "Nike", description: "This is the new product from Nike", price: '$100' }
];
const women_display = [
    { id: 1, image: w_tshirt, brand: "Puma", description: "This is the new product from Puma", price: '$100' },
    { id: 2, image: w_complete, brand: "Gucci", description: "This is the new product from Gucci", price: '$200' },
    { id: 3, image: w_jacket, brand: "Louis Vuitton", description: "This is the new product from Louis Vuitton", price: '$1520' },
    { id: 4, image: w_shoe, brand: "Adidas", description: "This is the new product from Adidas", price: '$600' },
    { id: 5, image: w_bag, brand: "Nike", description: "This is the new product from Nike", price: '$100' }
];
const electronic_display = [
    { id: 1, image: lg, brand: "LG", description: "This is the new product from Puma", price: '$8100' },
    { id: 2, image: earphone, brand: "Leneveo", description: "This is the new product from Gucci", price: '$900' },
    { id: 3, image: headphone, brand: "APPLE", description: "This is the new product from Louis Vuitton", price: '$520' },
    { id: 4, image: iphone, brand: "Apple", description: "This is the new product from Nike", price: '$740' },
    { id: 5, image: samsung, brand: "Samsung", description: "This is the new product from Nike", price: '$850' },

    { id: 6, image: televison, brand: "SONY", description: "This is the new product from Adidas", price: '$670' },
    { id: 7, image: headphone, brand: "Nokia", description: "This is the new product from Nike", price: '$520' }
];

const home_furniture_display = [
    { id: 1, image: permus, brand: "Puma", description: "This is the new product from Timus", price: '$180' },
    { id: 2, image: all_in_one, brand: "Timus", description: "This is the new product from Timus", price: '$900' },
    { id: 3, image: sofa, brand: "Louis Vuitton", description: "This is the new product from Louis Vuitton", price: '$520' },
    { id: 4, image: sofacurtain, brand: "Baressa", description: "This is the new product from Barressa", price: '$600' },
    { id: 6, image: bed1, brand: "Dileux", description: "This is the new product from Baressa", price: '$210' },
    { id: 7, image: bed2, brand: "Baressa", description: "This is the new product from Baressa", price: '$250' },
    { id: 8, image: dining_table, brand: "Dileux", description: "This is the new product from dileux", price: '$100' }
]

const pet_display = [
    { id: 1, image: easy_dogs, brand: "Louvi velloton", description: "This is the new product from Louvis Velloton", price: '$70' },
    { id: 2, image: petout, brand: "Gucci", description: "This is the new product from Gucci", price: '$3' },
    { id: 3, image: petspatric, brand: "Louis Vuitton", description: "This is the new product from Louis Vuitton", price: '$16' },
    { id: 4, image: range, brand: "Adidas", description: "This is the new product from Adidas", price: '$60' },
]
function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "90%", minHeight: "100vh", margin: '5%', border: "none", overflow: "visible", display: "flex", flexDirection: "column", gap: 4 }}>

                {/* First Grid container */}
                <Grid container spacing={4} justifyContent="center" alignItems="center" border="none">
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Card sx={{ width: '100%', border: "none" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" sx={{ paddingLeft: "20%", fontWeight: "bold" }} component="div">Man</Typography>
                                <br />
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    pagination={{ clickable: true }}
                                    loop
                                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                                    style={{ marginBottom: "20px" }}
                                >
                                 {
                                            man_display.map((slide) => (
                                                <SwiperSlide key={slide.id}>
                                                    <Box sx={{
                                                        width: "100%",
                                                        height: "400px",
                                                        position: "relative",
                                                        overflow: "hidden",
                                                    }}>
                                                        <img src={slide.image} alt={slide.description}
                                                            style={{
                                                                width: "80%", // Adjust the percentage as needed
                                                                height: "200px", // Set the desired height
                                                                objectFit: "contain", // Ensure the image doesn't get cropped
                                                                margin: "auto", // Center the image horizontally
                                                            }} />
                                                        <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Description: {slide.description}</Typography>
                                                        <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Brand: {slide.brand}</Typography>
                                                        <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Price: {slide.price}</Typography>
                                                        <br />
                                                        <Button borderRadius={5} fontWeight="bold" variant="contained" color="" sx={{ margin: "auto", borderBottom: "1px solid #1ed14b", fontWeight: "bold", borderRadius: "20px", display: "block" }}>Add to Cart</Button>
                                                    </Box>
                                                </SwiperSlide>
                                            ))
                                 }
                                </Swiper>
                                <Typography variant="body2" color="text.secondary">List on man category will be displayed here</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Women</Typography>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    pagination={{ clickable: true }}
                                    loop

                                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                                    style={{ marginBottom: "20px" }}                        >

                                    {women_display.map((slide) => (
                                        <SwiperSlide key={slide.id}>
                                            <Box sx={{
                                                width: "100%",
                                                height: "400px",
                                                position: "relative",
                                                overflow: "hidden",
                                            }}>
                                                <img src={slide.image} alt={slide.description}
                                                    style={{
                                                        width: "80%", // Adjust the percentage as needed
                                                        height: "200px", // Set the desired height
                                                        objectFit: "contain", // Ensure the image doesn't get cropped
                                                        margin: "auto", // Center the image horizontally
                                                    }} />
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Description: {slide.description}</Typography>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Brand: {slide.brand}</Typography>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Price: {slide.price}</Typography>
                                                <br />
                                                <Button borderRadius={5} fontWeight="bold" variant="contained" color="" sx={{ margin: "auto", borderBottom: "1px solid #1ed14b", fontWeight: "bold", borderRadius: "20px", display: "block" }}>Add to Cart</Button>
                                            </Box>
                                        </SwiperSlide>
                                    ))} </Swiper>

                                <Typography variant="body2" color="text.secondary">List of women category will be displayed here.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Electronic</Typography>
                                <Swiper modules={[Navigation, Pagination, Autoplay]}
                                    pagination={{ clickable: true }}
                                    loop
                                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                                    style={{ marginBottom: "20px" }}>
                                    {electronic_display.map((slide) => (
                                        <SwiperSlide key={slide.id}>
                                            <Box sx={{
                                                width: "100%",
                                                height: "400px",
                                                position: "relative",
                                                overflow: "hidden",
                                            }}>
                                                <img src={slide.image} alt="Electronic product"
                                                    style={{
                                                        width: "80%", // Adjust the percentage as needed
                                                        height: "200px", // Set the desired height
                                                        objectFit: "contain", // Ensure the image doesn't get cropped
                                                        margin: "auto", // Center the image horizontally
                                                    }} />
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Description: {slide.description}</Typography>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Brand: {slide.brand}</Typography>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Price: {slide.price}</Typography>
                                                <br />
                                                <Button borderRadius={5} fontWeight="bold" variant="contained" color="" sx={{ margin: "auto", borderBottom: "1px solid #1ed14b", fontWeight: "bold", borderRadius: "20px", display: "block" }}>Add to Cart</Button>
                                            </Box>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>


                                <Typography variant="body2" color="text.secondary">Electronic items will be displayed here.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Second Grid container */}
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ marginTop: 4 }}>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Kids</Typography>
                                <Swiper modules={[Navigation, Pagination, Autoplay]}
                                    pagination={{ clickable: true }}
                                    loop
                                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                                    style={{ marginBottom: "20px" }}>
                                    {kid_display.map((slide) => (
                                        < SwiperSlide key={slide.id}>
                                            <Box sx={{
                                                width: "100%",
                                                height: "400px",
                                                position: "relative",
                                                overflow: "hidden",
                                            }}>
                                                <img src={slide.image} alt={slide.description}
                                                    style={{
                                                        width: "80%", // Adjust the percentage as needed
                                                        height: "200px", // Set the desired height
                                                        objectFit: "contain", // Ensure the image doesn't get cropped
                                                        margin: "auto", // Center the image horizontally
                                                    }} />
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Description: {slide.description}</Typography>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Brand: {slide.brand}</Typography>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Price: {slide.price}</Typography>
                                                <br />
                                                <Button borderRadius={5} fontWeight="bold" variant="contained" color="" sx={{ margin: "auto", borderBottom: "1px solid #1ed14b", fontWeight: "bold", borderRadius: "20px", display: "block" }}>Add to Cart</Button>
                                            </Box>
                                        </SwiperSlide>

                                    ))}


                                </Swiper>
                                <Typography variant="body2" color="text.secondary">Kids products will be displayed here.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Home and Furniture</Typography>
                                <Swiper modules={[Navigation, Pagination, Autoplay]}
                                    pagination={{ clickable: true }}
                                    loop
                                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                                    style={{ marginBottom: "20px" }}>
                                    {home_furniture_display.map((slide) => (
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
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Description: {slide.description}</Typography>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Brand: {slide.brand}</Typography>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Price: {slide.price}</Typography>
                                                <br />
                                                <Button borderRadius={5} fontWeight="bold" variant="contained" color="" sx={{ margin: "auto", borderBottom: "1px solid #1ed14b", fontWeight: "bold", borderRadius: "20px", display: "block" }}>Add to Cart</Button>
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Typography variant="body2" color="text.secondary">List of Home and Furniture items will be displayed here.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Pets</Typography>
                                <Swiper modules={[Navigation, Pagination, Autoplay]}
                                    pagination={[{ clickable: true }]}
                                    loop
                                    autoplay={{ display: 3000, disableOnInteraction: true }}
                                    style={{ marginBottom: "20px" }}>
                                    {pet_display.map((slide) => (
                                        <SwiperSlide key={slide.id}>
                                            <Box sx={{
                                                width: "100%",
                                                height: "400px",
                                                position: "relative",
                                                overflow: "hidden",
                                                margin: "auto",
                                            }}
                                            >
                                                <img src={slide.image} alt={slide.description}
                                                    style={{
                                                        width: "80%",
                                                        height: "200px",
                                                        objectFit: "contain",
                                                        margin: "auto",
                                                    }}></img>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Description: {slide.description}</Typography>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Brand: {slide.brand}</Typography>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>Price: {slide.price}</Typography>
                                                <br />

                                                <Button borderRadius={5} fontWeight="bold" variant="contained" color="" sx={{ margin: "auto", borderBottom: "1px solid #1ed14b", fontWeight: "bold", borderRadius: "20px", display: "block" }}>Add to Cart</Button>


                                            </Box>

                                        </SwiperSlide>


                                    ))}

                                </Swiper>
                                <Typography variant="body2" color="text.secondary">Pet products will be displayed here.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Box>
        </ThemeProvider>
    );
}

export default Home;
