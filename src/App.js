import { Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import Description from './components/Description/Description';
import Header from './components/Header/Header'
import ImageGrid from './components/ImageGrid/ImageGrid';
import UploadForm from './components/UploadForm/UploadForm';

function App() {
  return (
    <div className="App" >
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={6}
      >
        <Grid 
        justify="center"
        alignItems="center"
        container 
        item 
        sm={2}>
          <Header/>
        </Grid>
        <Grid container item sm={4}>
          <Description/>
        </Grid>
        <Grid container item sm={6}>
          <UploadForm/>
        </Grid>
        <Grid container item sm={6}>
          <ImageGrid/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
