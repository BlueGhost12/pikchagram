import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import './description.css'

function Description() {
    return (
        <Grid container item sm={12} justify="center">
            <Typography className="major_header" variant="h3">Your Pictures</Typography>
            <Typography className="minor_header" variant="h6"> Add and save your pictures online with ease </Typography> 
        </Grid>
    )
}

export default Description
