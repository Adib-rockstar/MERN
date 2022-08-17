import React from 'react';
import {Container , AppBar, Typography, Grow,Grid} from '@material-ui/core';
import memory from './images/memory1.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyle from './style'
const App = () => {
    const classes = new useStyle();
    return( 
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image}src={memory} alt="memories" height="100"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid items xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid items xs={12} sm={4}>
                            <Form />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
}

export default App;