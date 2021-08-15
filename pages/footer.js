import Style from '../styles/footer.module.css'
import Divider from '@material-ui/core/Divider';

import Grid_6_3 from './grid_footer';



export default function Footer() {

    const about = {
        title: 'About Us',
        text: 'We’re an inquisitive team of creative problem solvers,  passionate  to bring life-changing life experiences to the world.'
    }
    const list = [
        { title: 'Telephones' },
        {
            telOffice: '+90 242 555 55 55',
            whatsapp: '+90 505 55 55 55',
            mobile: '+90 532 22 22 22'
        },
        {
            title: 'Links',
            links: { home: 'ecovilla.com', about: 'ecovilla.com/about' }
        }
    ]

    return (
        <div className={Style.container} >
            <Divider /><br></br><br></br>
            <Grid_6_3 about={about} list={list} />
        </div>

    )
}