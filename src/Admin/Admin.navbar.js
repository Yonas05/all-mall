import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Images/J-Mart-logo-300x126.png'; // Adjust the path to your logo image

import {
    AppBar,
    Toolbar,
    Button,
    Box,
    Typography,
    createTheme,
    ThemeProvider,
    useMediaQuery,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
    typography: {
        fontFamily: "'Ubuntu', sans-serif",
        fontSize: 10,
    },
});

const AdminNavBar = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setDrawerOpen(false); // close drawer on mobile after selection

        const routeMap = {
            'Men': '/men-collections',
            'Women': '/women-collections',
            'Electronics': '/electronics-collections',
            'Home & Furniture': '/furnitures-collections',
            'Kids': '/kids-collections',
            'Pets': '/pets-collections',
        };

        if (routeMap[category]) {
            navigate(routeMap[category]);
        }
    };

    const categories = ["Men", "Women", "Electronics", "Home & Furniture", "Kids", "Pets"];

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: "#f5f5f5",
                    boxShadow: "none",
                    borderBottom: "1px solid #1ed14b",
                    width: "100%",
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Logo and Brand */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                            component="img"
                            src={logo}
                            alt="JMART Logo"
                            sx={{ height: 40, marginRight: 1 }}
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            JMART
                        </Typography>
                    </Box>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    sx={{
                                        color: "black",
                                        textTransform: "none",
                                        fontWeight: selectedCategory === category ? "bold" : "normal",
                                        borderBottom: selectedCategory === category ? "2px solid #1ed14b" : "none",
                                        borderRadius: 0
                                    }}
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Mobile Hamburger Menu */}
                    {isMobile && (
                        <>
                            <IconButton onClick={() => setDrawerOpen(true)} edge="end">
                                <MenuIcon sx={{ color: "black" }} />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={drawerOpen}
                                onClose={() => setDrawerOpen(false)}
                            >
                                <List sx={{ width: 250 }}>
                                    {categories.map((category) => (
                                        <ListItem
                                            button
                                            key={category}
                                            onClick={() => handleCategorySelect(category)}
                                        >
                                            <ListItemText primary={category} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default AdminNavBar;
