import heroCss from '../styles/hero.module.css'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { useCallback, useState, useRef, useEffect } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


export default function Guest() {

    const [show, setShow] = useState('none')
    const [adult, setAdult ] = useState(2)
    const [ kid, setKid ] = useState(0)
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
            setShow('none')
        }, [node1, node2]
    );

    const handleClick = () => { show === 'none' ? setShow('block') : setShow('none'); }

    const handleAdultAdd = ()=>{ setAdult(adult + 1);  }
    const handleAdultRemove = ()=>{  adult === 0 ? setAdult(0) : setAdult(adult - 1) ; }

    const handleKidAdd = ()=>{ setKid(kid + 1) ; }
    const handleKidRemove = ()=>{  kid === 0 ? setKid(0) : setKid(kid - 1);  }

    return (
        <div
            style={{ display: 'inline-block', position: 'relative' }}
            ref={node2}
        >
            <Button className={heroCss.button}
                onClick={handleClick}
                variant='contained'
                startIcon={<PeopleAltIcon color='primary' />}
            >
              Guests: {adult+kid}
            </Button>
            {/* Sub */}
            <div className={heroCss.guestSub}
                style={{ display: show }}
                ref={node1}
            >
                <div className={heroCss.action}>
                    <div> Adult : </div>  <div>
                        <IconButton   onClick={handleAdultAdd}>
                            <AddIcon className={heroCss.icon} color='primary'  /></IconButton>
                            {adult}
                    </div><div>
                        <IconButton  onClick={handleAdultRemove}>
                            <RemoveIcon className={heroCss.icon} color='primary'  />
                        </IconButton>
                    </div>
                </div>
                <div className={heroCss.action}>
                    <div> Kids : </div>  <div style={{ marginLeft: 10 }}>
                        <IconButton onClick={handleKidAdd} >
                            <AddIcon color='primary'/>
                        </IconButton>
                        {kid}
                    </div> <div>
                        <IconButton onClick={handleKidRemove}>
                            <RemoveIcon color='primary' />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )


}