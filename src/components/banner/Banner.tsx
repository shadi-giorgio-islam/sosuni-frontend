import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import './Banner.css';

const Banner: React.FC = () => {
    return (
        <Box className={`bannerContainer`}>
            <img src="/banner.jpg" alt="Banner" className={`bannerImage`} />
            <div className={`bannerOverlay`} />
            <Container className={`bannerContent`}>
                <Typography variant="h2" className="bannerTitle">
                    Benvenuto in S.O.S UNI
                </Typography>
                <Typography variant="h5" className="bannerSubtitle">
                    Rendi più semplice la tua vita universitaria
                </Typography>
            </Container>
        </Box>
    );
};

export default Banner;