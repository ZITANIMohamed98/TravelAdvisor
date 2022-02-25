import React from 'react';

import {Autocomplete} from '@react-google-maps/api';
import { AppBar,Toolbar, Typopgraphy, InputBase, Box, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Header =() =>{
    return(
        <AppBar position="static">
             <Toolbar className={classes.toolbar}>
                 <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                 </Typography>
                 <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    <Autocomplete>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{root: classes.InputRoot,input: classes.InputInput }}/>
                        </div>
                    </Autocomplete>
                 </Box>
             </Toolbar>
        </AppBar>
    );
}

export default Header;