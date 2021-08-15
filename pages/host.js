import Image from 'next/image';
import Style from '../styles/host.module.css'


export default function Host() {

    return (

        <div className={Style.container} >
            <Image
                src="/img/host.jpg"
                alt="eco villa"
                layout="fill"
                objectFit="cover"
            />
            <div className={Style.titleContainer}>
                <h2 className={Style.title} >Host With Us</h2>
                <span className={Style.tel} >Call Us : +90 555 555 55 55</span>
            </div>
        </div>
    )
}
