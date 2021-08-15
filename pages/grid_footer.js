import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import CallIcon from '@material-ui/icons/Call';
import EcoIcon from '@material-ui/icons/Eco';
import LinkIcon from '@material-ui/icons/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Grid_6_3(props) {
    console.log(props.list[0].title)

    return (
        <div style={{ flexGrow: 1,backgroundColor:'#fff', padding:10 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: 5, fontSize:20,  }} > <EcoIcon color="primary" /> {props.about.title} </div>
                        <Divider />
                        <div style={{ marginTop: 10,letterSpacing:1, lineHeight:1.6 }}>   {props.about.text} </div>
                </Grid>
                <Grid item xs={12} sm={6}  md={3}>
                    <div style={{ display: 'flex', alignItems: 'center', padding: 5 , fontSize:20}} > <CallIcon color="primary" /> {props.list[0].title} </div>
                    <Divider />
                    <div style={{textAlign:'center'}} ></div>
                    <div style={{ marginTop: 10 }}> Office:  {props.list[1].telOffice} </div>
                    <div style={{ marginTop: 10 }}> Whatsapp:  {props.list[1].whatsapp} </div>
                    <div style={{ marginTop: 10 }}> Mobile:  {props.list[1].mobile} </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <div style={{ display: 'flex', alignItems: 'center', padding: 5 , fontSize:20}} > <LinkIcon color="primary" /> {props.list[2].title} </div>
                    <Divider />
                    <div style={{textAlign:'center'}} ></div>

                    <div style={{ marginTop: 10 }}> Home:   {props.list[2].links.home}  </div>
                    <div style={{ marginTop: 10 }}> About:  {props.list[2].links.about} </div>               
                     </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <div style={{padding:10,display:'flex', justifyContent:'space-around'}}><FacebookIcon  fontSize='large' color='primary' /><InstagramIcon  fontSize='large' color='primary'/><TwitterIcon  fontSize='large' color='primary'/> <LinkedInIcon fontSize='large' color='primary'/></div>
                </Grid>
            </Grid>
        </div>
    );
}
