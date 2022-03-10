import React,{useContext} from 'react';
import Toggle from '../Toggle/Toggle';
import "./NavBar.css"
import Logo from "../../Image/nameLogo.png";
import { ThemeContext } from '../../Context';
import { Link } from "react-router-dom";
const NavBar = () =>{
    const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;

    return(
        <div className="n-main-container" style={{backgroundColor:darkmode && "#242B2E"}}>
            <div className="n-wrapper">
                    <a className="logo">
                            <img className="n-logo" src={Logo} alt="Govind Maheshwari"/>
                    </a>
                    <nav>
                        {/* <ul className="nav-ul-container">
                                <li className="nav-li-item">
                                    <a style={{color:darkmode && "#fff"}} >Home</a>
                                </li>
                                <li className="nav-li-item">
                                    <a style={{color:darkmode && "#fff"}}>About Me</a>
                                </li>
                                <li className="nav-li-item">
                                    <a style={{color:darkmode && "#fff"}}>Contact</a>
                                </li>
                                
                        </ul> */}
                          {/* <Link style={{color:darkmode && "#fff"}} className="nav-li-item" to="/">Home</Link> 
                             <Link style={{color:darkmode && "#fff"}} className="nav-li-item" to="/project">Project</Link>
                             <Link style={{color:darkmode && "#fff"}} className="nav-li-item" to="/contact">Contact</Link> */}
     
                            <Toggle/>
                       
                    </nav>
            </div>
        </div>
    )
}

export default NavBar;