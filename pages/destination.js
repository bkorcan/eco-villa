import Button from '@material-ui/core/Button';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import { useCallback, useState, useRef, useEffect } from 'react';
import Style from '../styles/grid_hero.module.css'



export default function Destination() {

    const [show, setShow] = useState('none')
    const [destination, setDestination] = useState('where to')
    const node1 = useRef();
    const node2 = useRef();

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
            setShow('none'); 
        }, [node1, node2]
    );

    const handleClick = () => {
         show === 'none' ? setShow('block') : setShow('none'); 
    console.log('clicked') }
    const handleButton = (e) => { setDestination(e.target.textContent); setShow('none') }

    return (
        <div
            style={{ display: 'inline-block', position: 'relative' }}
            ref={node2}
        >
            <Button  className={Style.button}
                onClick={handleClick}
                variant='contained'
                startIcon={<NotListedLocationIcon color='primary' />}
            >
                {destination}
            </Button>
            {/* Sub */}
            <div className={Style.destinationSub}
                style={{ display: show }}
                ref={node1}
            >
                <Button color='primary' onClick={handleButton}  >Fethiye</Button>
                <Button color='primary' onClick={handleButton} >Kalkan</Button>
                <Button color='primary' onClick={handleButton} >Kas</Button>
            </div>
        </div>
    )


}