import {useContext}from 'react';
import "./Toggle.css";
import Sun from "../../Image/sun.png";
import Moon from "../../Image/moon.png"
import { ThemeContext } from '../../Context';
const Toggle = () =>{
    const theme  = useContext(ThemeContext);

    const handleClick  = () =>{
        theme.dispatch({type:'TOGGLE'});
    }
return(
    <div className="t">
            <img src={Sun} alt="" className="t-icon"/>
            <img src={Moon} alt="" className="t-icon"/>
        <div className="t-button" onClick={()=>handleClick()} style={{left:theme.state.darkmode?0:25}}>

        </div>
    </div>
)
}

export default Toggle