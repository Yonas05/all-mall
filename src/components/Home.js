import React from "react";
import { Card, CardContent, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";

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
            {/* Parent Grid - Full Screen Width */}
            <Grid
                container
                spacing={4}
                justifyContent="center" // Horizontally center all grid items
                alignItems="center" // Vertically center items based on content height
                sx={{
                    width: "100vw", // Full screen width
                    margin: 0,
                    padding: 2,
                    backgroundColor: "#f5f5f5" // Optional background color
                }}
            >
                {/* First Row */}
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Man
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                List on man category will be displayed here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Women
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                List of women category will be displayed here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Electronic
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Electronic will be displayed here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Second Row */}
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Kids
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Kids category will be displayed here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Home and Furniture
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                List of Home and Furniture category will be displayed here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <Typography gutterBottom variant="h5">
                                Pets
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Pets will be displayed here.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Pets will be displayed here.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Pets will be displayed here.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Pets will be displayed here.
                            </Typography>          
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Home;
