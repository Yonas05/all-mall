import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";
import logo from "../assets/Images/J-Mart-logo-300x126.png"; // Import your logo

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                position: "fixed",  // Fixes the footer to the bottom
                bottom: 0,
                left: 0,
                width: "100%",  // Ensure the footer spans the entire width
                backgroundColor: "#f8f8f8",
                padding: "20px",
                borderTop: "1px solid #1ed14b",
                fontFamily: "'Ubuntu', sans-serif",
                textAlign: "center",
                fontSize: 10,
                zIndex: 999,  // Make sure it's above other content
            }}
        >
            <Grid container spacing={3} justifyContent="center">
                {/* Logo Section */}
                <Grid item xs={12} sm={4}>
                    <Box
                        component="img"
                        src={logo}
                        alt="JMART Logo"
                        sx={{ height: 50, marginBottom: "10px" }}
                    />
                    <Typography variant="body1" sx={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 10, fontWeight: 'bold' }}>
                        Your Trusted Shopping Destination
                    </Typography>
                </Grid>

                {/* Links Section */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" fontSize={10} fontWeight="bold" sx={{ fontFamily: "'Ubuntu', sans-serif" }}>
                        Quick Links
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: "'Ubuntu', sans-serif" }}>About Us</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "'Ubuntu', sans-serif" }}>Contact</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "'Ubuntu', sans-serif" }}>Terms & Conditions</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "'Ubuntu', sans-serif" }}>Privacy Policy</Typography>
                </Grid>

                {/* Social Media Icons */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "'Ubuntu', sans-serif" }}>
                        Follow Us
                    </Typography>
                    <Box>
                        <IconButton color="primary"><Facebook /></IconButton>
                        <IconButton color="primary"><Twitter /></IconButton>
                        <IconButton color="primary"><Instagram /></IconButton>
                        <IconButton color="primary"><YouTube /></IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Copyright */}
            <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ marginTop: "10px", fontFamily: "'Ubuntu', sans-serif" }}
            >
                © {new Date().getFullYear()} <span style={{ color: "#1ed14b" }}>JMART</span>. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
