import React from 'react'
import { WebtopBar } from '../components'
import { Grid } from '@mui/material'
import './screen.css'
import Slider from '../components/slider'
import EventList from '../components/eventList'

function Events() {
  return (
    <Grid container spacing={2} className="root" >
      <WebtopBar />
      <Grid item className="component-container"   >
        <EventList />
      </Grid>
    </Grid>
  )
}

export default Events