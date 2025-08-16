import { Grid } from '@mui/material'
import { WebtopBar } from '../components'
import Slider from '../components/slider'
import '../screens/screen.css'
import CardList from '../components/cardList'

function Home() {
    return (

        <Grid container spacing={2} className="root" >
            <WebtopBar />
            <Grid item className="slider-window-container"   > 
                <Slider />
            </Grid>
            <Grid className="cardlist-container">
                <CardList />
            </Grid>
        </Grid>
    )
}


export default Home