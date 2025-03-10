import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, InputBase, Button, Box, Badge, IconButton } from '@mui/material';
import { Search, ExpandMore, Home, Favorite, ShoppingCart, AccountCircle } from '@mui/icons-material';

// Import your logo image
import logo from '../assets/Images/J-Mart-logo-300x126.png'; // Adjust the path to your logo image

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoriesAnchorEl, setCategoriesAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Categories');

  const handleCategoryMenuOpen = (event) => {
    setCategoriesAnchorEl(event.currentTarget);
  };

  const handleCategoryMenuClose = () => {
    setCategoriesAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    handleCategoryMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo Image */}
        <Box
          component="img"
          src={logo}
          alt="JMART Logo"
          sx={{
            height: 40, // Adjust height of the logo
            marginRight: 2,
          }}
        />

        {/* Brand Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          JMART
        </Typography>

        {/* Search Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 1,
            padding: '0 8px',
            border: '1px solid grey',
            width: '300px',
          }}
        >
          <Search sx={{ color: 'gray' }} />
          <InputBase
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ marginLeft: 1 }}
          />
        </Box>

        {/* Categories Dropdown */}
        <Button
          sx={{ color: 'black', marginLeft: 2 }}
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
          <MenuItem onClick={() => handleCategorySelect('Men')}>Men</MenuItem>
          <MenuItem onClick={() => handleCategorySelect('Women')}>Women</MenuItem>
          <MenuItem onClick={() => handleCategorySelect('Electronics')}>Electronics</MenuItem>
          <MenuItem onClick={() => handleCategorySelect('Home & Furniture')}>Home & Furniture</MenuItem>
          <MenuItem onClick={() => handleCategorySelect('Home & Furniture')}>Kids</MenuItem>
          <MenuItem onClick={() => handleCategorySelect('Home & Furniture')}>Pets</MenuItem>
        </Menu>

        {/* Icon Buttons */}
        <IconButton sx={{ color: 'black', marginLeft: 2 }}>
          <Home />
        </IconButton>

        <IconButton sx={{ color: 'black', marginLeft: 2 }}>
          <Favorite />
        </IconButton>

        <IconButton sx={{ color: 'black', marginLeft: 2 }}>
          <Badge badgeContent={4} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>

        <IconButton sx={{ color: 'black', marginLeft: 2 }} onClick={handleProfileMenuOpen}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={handleProfileMenuClose}>Sign In</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Register</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Log Out</MenuItem>
        </Menu>
      </Toolbar>

      {/* Green Border Underline */}
      <Box
        sx={{
          width: 'calc(100% - 32px)',
          marginLeft: '16px',
          marginBottom: '-4px',
          borderBottom: '4px solid #1ed14b',
        }}
      />
    </AppBar>
  );
};

export default Navbar;
