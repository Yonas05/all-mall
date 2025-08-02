import React, { useState } from 'react';
import { Card, CardContent, Slide, Typography, CardActions, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto'; // Import Roboto font as an example
import SlideImage from './SlideImage';

// Create a custom theme with the desired font

function LeftCardFromEdge() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
        },
    });

    const [checked, setChecked] = useState(false);

    // Trigger the slide-in animation when the component is mounted
    React.useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={4} sx={{ margin: 0, padding: 0 }}>
                {/* Left Card - Start from the left edge of the screen */}
                <Grid item xs={12} sm={8} sx={{ paddingLeft: 0, marginLeft: 0 }}>
                    <Card sx={{ width: '100%' }}>
                        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                            <Card sx={{ width: '50%' }}>
                                <CardContent>
                                 <SlideImage/>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View Details
                                    </Button>
                                </CardActions>
                                <CardContent>
                                    Hello Home
                                </CardContent>
                            </Card>
                        </Slide>

                    </Card>
                </Grid>

                {/* Second Card (Right) */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{ width: '90%', marginRight: '100%' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Right Card Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This is the second card on the right.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default LeftCardFromEdge;
