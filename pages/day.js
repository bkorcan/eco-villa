
import Button from '@material-ui/core/Button';
import { useCallback, useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { tr } from 'date-fns/locale';
import Style from '../styles/grid_hero.module.css'


export default function Day({ title, disabled, getDate, month }) {
    const [boxText, setBoxText] = useState(title)
    const [show, setShow] = useState('none')
    const node1 = useRef();
    const node2 = useRef();

    ////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        document.addEventListener("mousedown", handleClickMounted);
        return () => {
            document.removeEventListener("mousedown", handleClickMounted);
        };
    }, []);
    const handleClickMounted = useCallback(
        e => {
            if (node1.current.contains(e.target) || node2.current.contains(e.target)) {
                return;
            }
            setShow('none')
        }, [node1, node2]
    );

    const handleDayClick = useCallback(
        (day) => {
            setBoxText(day.toLocaleDateString()); setShow('none')
            if(title === 'Check In'){
                 getDate(day.toLocaleDateString())
            }
        }
    )


    const handleClick = () => { show === 'none' ? setShow('block') : setShow('none'); }

    return (
        <div
            style={{ display: 'inline-block', position: 'relative', zIndex: 10 }}
            ref={node2}
        >
            <Button  className={Style.button}
                onClick={handleClick}
                variant='contained'
                startIcon={<CalendarTodayIcon color='primary' />}
            >
                {boxText}
            </Button>
            {/* Sub */}
            <div className={ title === 'Check In' ? Style.checkInSub : Style.checkOutSub }
                style={{ display: show }}
                ref={node1}
            >
                <div>
                    <DayPicker mode="single" onDayClick={handleDayClick}
                     disabled={disabled}  
                     month={month}
                     locale={tr}
                 />
                </div>
            </div>
            {/* Sub */}

        </div>
    )
}