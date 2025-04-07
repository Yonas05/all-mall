import React from "react";

//import category

import ManDisplay from "./Category/Man";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import MUI components    
import {
    Card, CardContent, Grid, ThemeProvider, Typography, createTheme, Box} from "@mui/material";
import WomenDisplay from "./Category/Women";
import KidDisplay from "./Category/Kids";
import DisplayElectronic from "./Category/Electronics";
import HomeDisplay from "./Category/HomeFurniture";
import PetDisplay from "./Category/Pets";
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
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Card sx={{ width: '100%', border: "none" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" sx={{ paddingLeft: "20%", fontWeight: "bold" }} component="div">Man</Typography>
                                <br />
                                <ManDisplay />
                                <Typography variant="body2" color="text.secondary">List on man category will be displayed here</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Women</Typography>
                                <WomenDisplay />
                                <Typography variant="body2" color="text.secondary">List of women category will be displayed here.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Electronic</Typography>
                               
                               <DisplayElectronic />

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
                                <KidDisplay />
                                <Typography variant="body2" color="text.secondary">Kids products will be displayed here.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Home and Furniture</Typography>
                                <HomeDisplay />
                                <Typography variant="body2" color="text.secondary">List of Home and Furniture items will be displayed here.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Pets</Typography>
                                <PetDisplay/>
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
