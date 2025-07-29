import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    createTheme,
    Menu,
    MenuItem,
    InputBase,
    Button,
    Box,
    Badge,
    IconButton,
    ThemeProvider
} from '@mui/material';
import {
    Search,
    ExpandMore,
    Home,
    Favorite,
    ShoppingCart,
    AccountCircle
} from '@mui/icons-material';

// Import your logo image
import logo from '../assets/Images/J-Mart-logo-300x126.png'; // Adjust the path to your logo image

const theme = createTheme({
    typography: {
        fontFamily: "'Ubuntu', sans-serif",
        fontSize: 10,
    },
});

const Navbar = () => {
    const navigate = useNavigate(); // For navigation
    const [anchorEl, setAnchorEl] = useState(null);
    const [categoriesAnchorEl, setCategoriesAnchorEl] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Categories');

    const handleCategoryMenuOpen = (event) => setCategoriesAnchorEl(event.currentTarget);
    const handleCategoryMenuClose = () => setCategoriesAnchorEl(null);
    const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleProfileMenuClose = () => setAnchorEl(null);
    const handleSearchChange = (event) => setSearchQuery(event.target.value);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        handleCategoryMenuClose();

        const routeMap = {
            'Men': '/men',
            'Women': '/women',
            'Electronics': '/electronics',
            'Home & Furniture': '/home-furniture',
            'Kids': '/kids',
            'Pets': '/pets',
        };

        if (routeMap[category]) {
            navigate(routeMap[category]);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: "white",
                    boxShadow: "none",
                    borderBottom: "1px solid #1ed14b",
                    width: "100%",
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/* Logo */}
                    <Box component="img" src={logo} alt="JMART Logo" sx={{ height: 40, marginRight: 2 }} />

                    {/* Brand Name */}
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", textDecoration: "none" }}>
                        JMART
                    </Typography>

                    {/* Search Box */}
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "white",
                        borderRadius: 1,
                        padding: "0 8px",
                        border: "1px solid grey",
                        width: "300px"
                    }}>
                        <Search sx={{ color: "gray" }} />
                        <InputBase
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            sx={{ marginLeft: 1 }}
                        />
                    </Box>

                    {/* Categories Dropdown */}
                    <Button
                        sx={{ color: "black", marginLeft: 2 }}
                        endIcon={<ExpandMore />}
                        onClick={handleCategoryMenuOpen}
                    >
                        {selectedCategory}
                    </Button>
                    <Menu
                        anchorEl={categoriesAnchorEl}
                        open={Boolean(categoriesAnchorEl)}
                        onClose={handleCategoryMenuClose}
                    >
                        <MenuItem onClick={() => handleCategorySelect("Men")}>Men</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect("Women")}>Women</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect("Electronics")}>Electronics</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect("Home & Furniture")}>Home & Furniture</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect("Kids")}>Kids</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect("Pets")}>Pets</MenuItem>
                    </Menu>

                    {/* Icon Buttons */}
                    <IconButton sx={{ color: "black", marginLeft: 2 }} onClick={() => navigate("/")}>
                        <Home />
                        <Typography variant="body2" sx={{ marginLeft: 1 }}>Home</Typography>
                    </IconButton>

                    <IconButton sx={{ color: "black", marginLeft: 2 }} onClick={() => navigate("/wishlist")}>
                        <Favorite />
                        <Typography variant="body2" sx={{ marginLeft: 1 }}>Wishlist</Typography>
                    </IconButton>

                    <IconButton sx={{ color: "black", marginLeft: 2 }} onClick={() => navigate("/cart")}>
                        <Badge badgeContent={4} color="error">
                            <ShoppingCart />
                        </Badge>
                        <Typography variant="body2" sx={{ marginLeft: 1 }}>Cart</Typography>
                    </IconButton>

                    <IconButton sx={{ color: "black", marginLeft: 2 }} onClick={handleProfileMenuOpen}>
                        <AccountCircle />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleProfileMenuClose}>
                        <MenuItem onClick={handleProfileMenuClose}>Sign In</MenuItem>
                        <MenuItem onClick={handleProfileMenuClose}>Register</MenuItem>
                        <MenuItem onClick={handleProfileMenuClose}>Log Out</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navbar;
