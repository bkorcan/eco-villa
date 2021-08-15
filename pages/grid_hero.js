import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Style from '../styles/grid_hero.module.css'
import Destination from './destination';
import Guest from './guest';
import Day from './day';
import { useCallback, useState } from 'react';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 610,
            md: 768,
            lg: 1280,
            // xl: 1200
        }
    }
});

export default function GridHero() {
    const [disabled, setDisabled] = useState([])
    const [month, setMonth] = useState(new Date())

    const getDate = useCallback(
        (date) => {
            let c = new Date(date.split('/')[2], date.split('/')[0] - 1, date.split('/')[1])
            let d = c.setDate(c.getDate() + 1)
            setMonth(new Date(date.split('/')[2], date.split('/')[0] - 1))
            setDisabled({ before: d })
        }
    )

    return (
        <MuiThemeProvider theme={theme}>
            <div style={{ flexGrow: 1, }} >
                <Grid container className={Style.container} >

                    <Grid item xs={6} sm={3} style={{ backgroundColor: '#fafafa', textAlign: 'center', padding: 8,order:0 }} >
                        <Destination />
                    </Grid>
                    <Grid item xs={6} sm={3} style={{ backgroundColor: '#fafafa', textAlign: 'center', padding: 8, order:2 }}>
                        <Day title={'Check In'} disabled={[]} getDate={getDate} month={new Date()} />
                    </Grid>
                    <Grid item xs={6} sm={3} style={{ backgroundColor: '#fafafa', textAlign: 'center', padding: 8,order:3 }} >
                        <Day title={'Check Out'} disabled={disabled} month={month} />
                    </Grid>
                    <Grid item xs={6} sm={3} style={{ backgroundColor: '#fafafa', textAlign: 'center', padding: 8,order:1 }} >
                        <Guest />
                    </Grid>

                </Grid>
            </div>
        </MuiThemeProvider>

    );
}
