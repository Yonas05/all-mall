import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import ManDisplay from "./Category/Man";
import WomenDisplay from "./Category/Women";
import KidDisplay from "./Category/Kids";
import DisplayElectronic from "./Category/Electronics";
import HomeDisplay from "./Category/HomeFurniture";
import PetDisplay from "./Category/Pets";

// Import MUI components    
import {
    Card, CardContent, Grid, ThemeProvider, Typography, createTheme, Box
} from "@mui/material";

// Create a theme with Ubuntu font
const theme = createTheme({
    typography: {
        fontFamily: "'Ubuntu', sans-serif",
        fontSize: 10
    },
});

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "90%", minHeight: "100vh", margin: '5%', border: "none", overflow: "visible", display: "flex", flexDirection: "column", gap: 4 }}>

                {/* First Grid container */}
                <Grid container spacing={4} justifyContent="center" alignItems="center" border="none">
                    {/* Man Card */}
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Link to="/men-collections" style={{ textDecoration: 'none' }}>
                            <Card sx={{ width: '100%', border: "none" }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" sx={{ paddingLeft: "20%", fontWeight: "bold" }} component="div">Man</Typography>
                                    <ManDisplay />
                                  
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>

                    {/* Women Card */}
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Link to="/women-collections" style={{ textDecoration: 'none' }}>
                            <Card sx={{ width: '100%' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">Women</Typography>
                                    <WomenDisplay />
                                
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>

                    {/* Electronic Card */}
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Link to="/electronics-collections" style={{ textDecoration: 'none' }}>
                            <Card sx={{ width: '100%' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">Electronic</Typography>
                                    <DisplayElectronic />
                                    
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>

                {/* Second Grid container */}
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ marginTop: 4 }}>
                    {/* Kids Card */}
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Link to="/kids-collections" style={{ textDecoration: 'none' }}>
                            <Card sx={{ width: '100%' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">Kids</Typography>
                                    <KidDisplay />
                                    
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>

                    {/* Home & Furniture Card */}
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Link to="/furnitures-collections" style={{ textDecoration: 'none' }}>
                            <Card sx={{ width: '100%' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">Home and Furniture</Typography>
                                    <HomeDisplay />
                                  
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>

                    {/* Pets Card */}
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Link to="/pets-collections" style={{ textDecoration: 'none' }}>
                            <Card sx={{ width: '100%' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">Pets</Typography>
                                    <PetDisplay />
                                   
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>

            </Box>
        </ThemeProvider>
    );
}

export default Home;
