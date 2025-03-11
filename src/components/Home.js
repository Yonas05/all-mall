import React from "react";
import {
    Card, CardContent, Grid, ThemeProvider, Typography, createTheme
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
            {/* First Grid container */}
            <Grid
                container
                spacing={4}
                justifyContent="center" // Horizontally center the grid items
                alignItems="center" // Vertically center the grid items
                sx={{ margin: 0, padding: 0 }}
            >
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Man
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                List on man category will be displayed here
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Women
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                List of women category will be displayed here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={3.54}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Electronic
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Electronic will be displayed here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Second Grid container */}
            <Grid
                container
                spacing={4}
                justifyContent="center" // Horizontally center the grid items
                alignItems="center" // Vertically center the grid items
                sx={{ margin: 0, padding: 0 }}
            >
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Kids
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Kids on man category will be displayed here
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home and Furniture
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                List of Home and Furniture category will be displayed here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={3.54}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center', // Vertically center the content
                                alignItems: 'center', // Horizontally center the content
                                textAlign: 'center' // Ensure the text is centered horizontally
                            }}
                        >
                            <Typography gutterBottom variant="h5" component="div">
                                Pets
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Pets will be displayed here.
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default Home;
