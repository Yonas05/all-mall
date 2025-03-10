import React from "react";
import { Card, CardContent, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";

const theme = createTheme(); // Define a theme

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={4} sx={{ margin: 0, padding: 0 }}>
                {/* Wrap Card inside a Grid item */}
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home Page
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This is the home page.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Home;
