import nextCss from '../styles/next_stay.module.css'
import Image from 'next/image';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default function NextStay() {

    return (
        <div className={nextCss.container}  >
            <h2 className={nextCss.title} >Plan Your Next Stay</h2>
            <div className={nextCss.content} >
                <div className={nextCss.box} >
                    <Image
                        src="/img/next/fethiye.jpeg"
                        alt="eco villa"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={nextCss.boxTitle} >Fethiye</div>
                    <div className={nextCss.boxNumbers} >170 Villas <NavigateNextIcon style={{ color: '#fff' }} /> </div>
                </div>
                <div className={nextCss.box} >
                    <Image
                        src="/img/next/kalkan.webp"
                        alt="eco villa"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={nextCss.boxTitle} >Kalkan</div>
                    <div className={nextCss.boxNumbers} >70 Villas <NavigateNextIcon style={{ color: '#fff' }} /> </div>
                </div>
                <div className={nextCss.box} >
                    <Image
                        src="/img/next/kas.jpeg"
                        alt="eco villa"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={nextCss.boxTitle} >Kas</div>
                    <div className={nextCss.boxNumbers} >180 Villas <NavigateNextIcon style={{ color: '#fff' }} /> </div>
                </div>

            </div>
        </div>
    )
}