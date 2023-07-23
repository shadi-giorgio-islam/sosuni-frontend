import {AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Stack, Typography} from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import React, {useState} from "react";

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
  return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <MenuBookRoundedIcon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>SOSUNI</Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Gruppi esame</Button>
                    <Button color='inherit'
                            id='resources-button'
                            onClick={handleClick}
                            aria-controls={open ? 'resources-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded= {open ? 'true' : undefined}
                            endIcon={<KeyboardArrowDown/>}
                    >Tools</Button>
                    <Button color='inherit'>Blog</Button>
                    <Button color='inherit'>About</Button>
                </Stack>
                <Menu id='resources-menu'
                      anchorEl={anchorEl}
                      open={open}
                      MenuListProps={{'aria-labelledby': 'resources-button'}}
                      onClose={handleClose}
                      anchorOrigin={{
                          vertical : 'bottom',
                          horizontal : 'right'
                      }}
                      transformOrigin={{
                          vertical : 'top',
                          horizontal : 'right'
                      }}
                >
                    <MenuItem>Sbobinator</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}