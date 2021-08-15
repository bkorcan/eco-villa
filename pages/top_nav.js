import Style from '../styles/top_nav.module.css'
import EcoIcon from '@material-ui/icons/Eco';
import { IconButton } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import { useCallback, useState, useRef, useEffect } from 'react';



export default function TopNav() {
  const [showWhatsapp, setShowWhatsapp] = useState('none')
  const [showPhone, setShowPhone] = useState('none')
  // 
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
      if (node1.current.contains(e.target)) {
        setShowPhone('none')
        return;
      }
      if (node2.current.contains(e.target)) {
        setShowWhatsapp('none')
        return;
      }
      setShowWhatsapp('none');setShowPhone('none')
    }, [node1,node2]
  );
  //  
  const handleWhatsapp = useCallback(
    () => {
      setShowWhatsapp(showWhatsapp === 'none' ? 'inline-block' : 'none')
    }
  )

  const handlePhone = useCallback(
    () => {
      setShowPhone(showPhone === 'none' ? 'inline-block' : 'none')
    }
  )

  return (
    <div className={Style.container}>

      <div className={Style.navContainer} >

        {/* Top Nav Left */}
        <div>
          <IconButton aria-label="delete">
            <EcoIcon color="primary" fontSize="large" />
          </IconButton>
          <span className={Style.logoTitle} > EcoVilla </span>
        </div>
        {/* Top Nav Left */}

        {/* Button Group */}
        <div className={Style.buttonGroup} >

          <IconButton ref={node1} aria-label="delete" onClick={handleWhatsapp} >
            <WhatsAppIcon color='primary' fontSize='large' />
          </IconButton>
          <span style={{ display: showWhatsapp }} className={Style.sub}  >(532) 25252525</span>
          <IconButton  ref={node2} aria-label="delete" onClick={handlePhone} >
            <CallIcon color='primary' fontSize='large' />
          </IconButton>
          <span style={{ display: showPhone }} className={Style.sub} >(242) 836 1111</span>
        </div>
        {/* / Button Group */}

      </div>

    </div>
  )
}
