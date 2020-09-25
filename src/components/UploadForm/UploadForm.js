import { Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './uploadform.css'

function UploadForm() {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const allowedFileTypes = ['image/png', 'image/jpeg']

    const changeHandler = event => {
        let selectedFile = event.target.files[0]
        console.log(selectedFile)

        if(selectedFile && allowedFileTypes.includes(selectedFile.type)){
            setFile(selectedFile)
            setError('')
        } else {
            setFile(null)
            setError("Please select an image file (png or jpeg)")
        }
    }
    
    return (
        <Grid container className="output" direction="row">
            <Grid container item >
                <form style={{width: "inherit"}}>
                    <input accept="image/*" id="icon-button-file" type="file" style={{display: 'none'}} onChange={changeHandler} />
                    <label  htmlFor="icon-button-file">
                        <IconButton component="span" style={{opacity: "0.8"}} >
                            <AddCircleIcon/>
                        </IconButton>
                    </label>   
                </form>
            </Grid>
            { error && <Grid item className="error"> {error} </Grid> }
            { file && <Grid item className="error"> Uploading, please wait.. </Grid> }
            { file && <Grid item container><ProgressBar file={file} setFile={setFile} /></Grid> }
        </Grid>

    )
}

export default UploadForm
