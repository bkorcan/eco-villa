import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    label: 'hello',
    div:<div style={{ display:'flex', justifyContent:'space-between'  }} ><div style={{width:'30%', border:'1px solid #666', height:350}} >1-1</div><div style={{width:'30%', border:'1px solid #666', height:350}} >1-2</div><div style={{width:'30%', border:'1px solid #666', height:350}} >1-3</div></div>,
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=1340&h=350&q=60',
  },
  {
    label: 'Bird',
    div:<div style={{ display:'flex', justifyContent:'space-between'  }} ><div style={{width:'30%', border:'1px solid #666', height:350}} >2-1</div><div style={{width:'30%', border:'1px solid #666', height:350}} >2-2</div><div style={{width:'30%', border:'1px solid #666', height:350}} >2-3</div></div>,
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=1340&h=350&q=60',
  },
  {
    label: 'Bali, Indonesia',
    div:<div style={{ display:'flex', justifyContent:'space-between'  }} ><div style={{width:'30%', border:'1px solid #666', height:350}} >3-1</div><div style={{width:'30%', border:'1px solid #666', height:350}} >3-2</div><div style={{width:'30%', border:'1px solid #666', height:350}} >3-3</div></div>,
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1340&h=350&q=80',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1340,
    margin: '0 auto',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    textAlign: 'center',
    height: 355,
    maxWidth: 1340,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      {/* <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      /> */}


      <div className={classes.img}>

        {/* {tutorialSteps[activeStep].label} */}
        {tutorialSteps[activeStep].div}
      </div>


      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}
