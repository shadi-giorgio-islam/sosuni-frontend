import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./GroupSection.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

const GroupSection: React.FC = () => {
    return (
        <Box className="groupSection">
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Box className="description">
                            <Typography variant="h6">Connettiti subito con gli altri studenti che stanno preparando il tuo stesso esame</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box className="buttonContainer" textAlign='center'>
                            <Button variant="contained" className="sectionButton" endIcon={<SearchIcon />}>
                                Cerca esame
                            </Button>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GroupSection;