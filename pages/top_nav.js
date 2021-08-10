import topNavCss from '../styles/top_nav.module.css'
import EcoIcon from '@material-ui/icons/Eco';
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';


export default function TopNav() {

  return (
    <div className={topNavCss.container}>

      <div className={topNavCss.navContainer} >

        {/* Top Nav Left */}
        <div>
          <IconButton aria-label="delete">
            <EcoIcon color="primary" fontSize="large" />
          </IconButton>
          <span className={topNavCss.logoTitle} > EcoVilla </span>
        </div>
        {/* Top Nav Left */}

        {/* Button Group */}
        <div className={topNavCss.buttonGroup} >
            <Button color='primary'>USD</Button>
            <Button color='primary'>EN</Button>
            <Button color='secondary' className={topNavCss.buttonNavRight}>Deals</Button>
        </div>
        {/* / Button Group */}

      </div>

    </div>
  )
}
