import { Grid, GridList, GridListTile, makeStyles } from '@material-ui/core'
import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import { motion } from 'framer-motion'
import "./imagegrid.css"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      minWidth: "100%",
      minHeight: "100%",
    },
}));

function ImageGrid() {
    const classes = useStyles();
    const { docs } = useFirestore('images')
    console.log(docs)
    return (
        <GridList className={classes.root} cols={3} cellHeight="150">
            {docs.map((doc) => (
            <GridListTile key={doc.id} className={classes.gridlist}>
                <img src={doc.url} className="image"/>
            </GridListTile>
            ))}
        </GridList>
    )
}

export default ImageGrid
