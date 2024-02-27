import React, { useState } from 'react'
import { Link } from 'react-router-dom';




const Navbar = () => {
    
const [ parity, setParity]= useState(false)
const [sapre, setSapre]= useState(false) 
const [bcone, setBcone] = useState(false)
const [emerd, setEmerd] = useState(false)
    const parityHandeler = ()=>{
        setParity(true);
        setSapre(false)
        setBcone(false);
        setEmerd(false);

    }
    const sapreHandeler = ()=>{
        setParity(false);
        setSapre(true);
        setBcone(false);
        setEmerd(false);

    }
    const bconeHandeler = ()=>{
        setParity(false);
        setSapre(false);
        setBcone(true);
        setEmerd(false);

    }

    const emerdHandeler = ()=>{
        setParity(false);
        setSapre(false);
        setBcone(false);
        setEmerd(true);

    }
  return (
    <div className="navbar_component">
        <Link  to={'/'} className="no-underline">
        <p onClick={parityHandeler} className={parity ? "navbar_components": " "}>Parity</p>
        </Link>
        <Link to={"/Sapre"}  className="no-underline">
        <p onClick={sapreHandeler} className={sapre? "navbar_components": " "}>Sapre</p>
        </Link>
        <Link to={"bcone"}  className="no-underline">
        <p onClick={bconeHandeler} className={bcone? "navbar_components": " "}>Bcone</p>
        </Link>
        <Link to={"Emred"} className="no-underline" >
        
        <p onClick={emerdHandeler} className={emerd? "navbar_components": " "}>Emerd</p>
        </Link>

    </div>
  )
}

export default Navbar