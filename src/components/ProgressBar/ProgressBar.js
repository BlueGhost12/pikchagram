import React, { useEffect } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import useStorage from '../../hooks/useStorage'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: '100%',
      margin: "5px 0px"
    },
  });

function ProgressBar({ file, setFile }) {
    const classes = useStyles()
    const { url, progress } = useStorage(file)

    useEffect(() => {
      if(url){
        setFile(null)
      }
    }, [url, setFile])
    console.log(progress)
    return (
        <LinearProgress variant="determinate" value={progress} className={classes.root}/>
    )
}

export default ProgressBar
