import Style from '../../styles/swipe.module.css'
import Image from 'next/image';


export default function SwipeFirst() {
    return (
    <div className={Style.main} >
        <div className={Style.child}>
            <div className={Style.imageTitle} > Villa </div>
            <Image
                src="/img/live_anywhere/villa.jpeg"
                alt="eco villa"
                layout="fill"
                objectFit="cover"
            />
        </div>

        <div className={Style.child}>
        <div className={Style.imageTitle} > Condo </div>

            <Image
                src="/img/live_anywhere/condo.jpeg"
                alt="eco villa"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className={Style.child}>
        <div className={Style.imageTitle} > Bungalow </div>

            <Image
                src="/img/live_anywhere/bungalow.jpeg"
                alt="eco villa"
                layout="fill"
                objectFit="cover"
            />
        </div>
    </div>
    )
}