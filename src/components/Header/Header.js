import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import '../../index.css'

function Header() {

    return (
        <AppBar style={{backgroundColor: 'white'}}>
            <Toolbar variant="dense">
                <Typography variant="h5" style={{color: "#696969"}}> PikchaGram </Typography>
            </Toolbar>
        </AppBar>    
    )
}

export default Header
