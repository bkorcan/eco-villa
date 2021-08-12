import Style from '../styles/live_anywhere.module.css'
import Swipe from './swipe'


export default function LiveAnywhere() {

    return (
        <div className={Style.container} >
            <h2 className={Style.h2} >Live AnyWhere</h2>
            <Swipe />
        </div>
    )
}