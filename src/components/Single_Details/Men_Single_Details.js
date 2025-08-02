import { Box, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material"
import MenDetails from "../Detail/Men_Details";

export default function Men_Single_Details() {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1200px",
                margin: "auto",
                paddingTop: 4,
                marginTop: 4
            }}>
            <Grid
                container spacing={0}
                justifyContent="center"
                align="center"
                border="none"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    align="center"
                    gap={20}
                    p={2}>
                    <Box>
                        <Typography
                            variant="h6">
                            Selected Image
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6">
                            Description
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid
                container
                justifyContent="space-between"
                spacing={0}
                display="flex"
                align="center"
                marginTop={"5%"}
                flexDirection="column">
                <Box>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1rem'
                        }}>
                        Related Items
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        <MenDetails />
                    </Typography>
                </Box>

            </Grid>
        </Box>
    )
}