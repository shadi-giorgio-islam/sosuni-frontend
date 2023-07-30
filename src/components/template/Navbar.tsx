import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import './Navbar.css';
export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
            <AppBar position="static">
                <Container maxWidth="xl" className="container">
                    <Toolbar disableGutters>
                        <Typography
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" }
                            }}
                        >
                            <img
                                src="./logo.png"
                                alt="logo non trovato"
                                height="50px"/>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >

                                <MenuItem key='Home' onClick={handleCloseNavMenu}>
                                    <Link to="/">Home</Link>
                                </MenuItem>
                                <MenuItem key='Gruppi' onClick={handleCloseNavMenu}>
                                    <Link to="/Gruppi">Gruppi</Link>
                                </MenuItem>
                                <MenuItem key='Tools' onClick={handleCloseNavMenu}>
                                    <Link to="/Tools">Tools</Link>
                                </MenuItem>
                                <MenuItem key='Blog' onClick={handleCloseNavMenu}>
                                    <Link to="/Blog">Blog</Link>
                                </MenuItem>
                                <MenuItem key='About' onClick={handleCloseNavMenu}>
                                    <Link to="/About">About</Link>
                                </MenuItem>

                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1
                            }}
                        >
                            <img
                                src="./logo.png"
                                alt="logo non trovato"
                                height="50px"/>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            <Link to="/">Home</Link>
                            <Link to="/Gruppi">Gruppi</Link>
                            <Link to="/Tools">Tools</Link>
                            <Link to="/Blog">Blog</Link>
                            <Link to="/About">About</Link>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
    );
}