import { Grid, TextField } from '@mui/material'
import '../components/index.css';
import React from 'react'

function CoustomSearchBar(props) {
    const {onChange } = props;
    return (
        <Grid>
            <TextField 
            placeholder='Search...'
            Variant='outlined'
            size='small'
            fullWidth
            className="searchBar"
            onChange={onChange}
            />
        </Grid>
    )
}


export default CoustomSearchBar