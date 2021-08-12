import Style from '../../styles/swipe.module.css'
import Image from 'next/image';

export  default function SwipeSecond(){
    return (
    <div className={Style.main} >
        <div className={Style.child}>
            <div className={Style.imageTitle} > Sea Side </div>
            <Image
                src="/img/live_anywhere/sea_side.jpeg"
                alt="eco villa"
                layout="fill"
                objectFit="cover"
            />
        </div>

        <div className={Style.child}>
        <div className={Style.imageTitle} > Mountain View </div>

            <Image
                src="/img/live_anywhere/mountain_view.jpeg"
                alt="eco villa"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className={Style.child}>
        <div className={Style.imageTitle} > Center </div>

            <Image
                src="/img/live_anywhere/city_center.jpeg"
                alt="eco villa"
                layout="fill"
                objectFit="cover"
            />
        </div>
    </div>
    )
}