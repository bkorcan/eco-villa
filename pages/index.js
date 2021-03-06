import Button from '@material-ui/core/Button';
import heroCss from '../styles/hero.module.css'
import Destination from './destination';
import Guest from './guest';
import SearchIcon from '@material-ui/icons/Search';
import Day from './day';
import TopNav from './top_nav'
import Image from 'next/image';
import { useCallback, useState } from 'react';
import LiveAnywhere from './live_anywhere';
import Host from './host';
import Footer from './footer';
import GridHero from './grid_hero';

export default function Home() {

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
    <>
      <TopNav />
      <div className={heroCss.container} >
        <div style={{ height: 1 }} ></div>
        <Image
          src="/img/bg.webp"
          alt="eco villa"
          layout="fill"
          objectFit="cover"
        />
        <h1 style={{ position: 'absolute', color: '#666', top: 170, right: 20 }} >Live Anywhere</h1>

        {/* <div className={heroCss.filterContainer}  >
          <Destination />
          <Day title={'Check In'} disabled={[]} getDate={getDate} month={new Date()} />
          <Day title={'Check Out'} disabled={disabled} month={month} />
          <Guest />
        </div> */}
        <GridHero />

        <Button className={heroCss.buttonSearch}
          variant='contained'
          startIcon={<SearchIcon color='primary' />}
        >
          Search
        </Button>
      </div>
      <LiveAnywhere />
      <h2 style={{maxWidth:1340, margin:'0 auto', marginTop:40, color:'#444'}} > Become A Host</h2>
      <Host/>
      <Footer/>


      <div style={{ height: 30 }} ></div>

    </>
  )
}
