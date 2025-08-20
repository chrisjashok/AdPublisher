import { Grid } from '@mui/material'
import { ContentCard, WebtopBar } from '../components'
import Slider from '../components/slider'
import '../screens/screen.css'
import CardList from '../components/cardList'

function Home() {
    return (

        <Grid container spacing={2} className="root" >
            <WebtopBar />
            <Grid item className="component-container"   > 
                <Slider />
            </Grid>
            <Grid className="component-container">
                <CardList />
            </Grid>
            <Grid item xs={12} sm={12} md={12} className="component-container">
                <ContentCard />
            </Grid>
        </Grid>
    )
}


export default Home