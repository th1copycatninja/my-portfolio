import React,{useContext} from 'react';
import Toggle from '../Toggle/Toggle';
import "./NavBar.css"
import Logo from "../../Image/logo.svg";
import { ThemeContext } from '../../Context';
const NavBar = () =>{
    const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;

    return(
        <div className="n-main-container" style={{backgroundColor:darkmode && "rgb(35, 35, 35)"}}>
            <div className="n-wrapper">
                    <a className="logo">
                            <img className="n-logo" src={Logo} alt="Govind Maheshwari"/>
                    </a>
                    <nav>
                        <ul className="nav-ul-container">
                                <li className="nav-li-item">
                                    <a style={{color:darkmode && "#fff"}} >Home</a>
                                </li>
                                <li className="nav-li-item">
                                    <a style={{color:darkmode && "#fff"}}>About Me</a>
                                </li>
                                <li className="nav-li-item">
                                    <a style={{color:darkmode && "#fff"}}>Contact</a>
                                </li>
                        </ul>
                       
                            <Toggle/>
                       
                    </nav>
            </div>
        </div>
    )
}

export default NavBar;