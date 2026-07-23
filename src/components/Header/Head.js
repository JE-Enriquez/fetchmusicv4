import React from "react";
import { HeadBg, HeadAppName, HeadNav, HeadLi } from "./style";

import { Link } from "react-router-dom";



const Header = ({appName}) => {

    return(
        <>
            <HeadBg>
                <HeadAppName>{appName}</HeadAppName>
                <HeadNav>
                        <HeadLi><Link 
                            to="/"
                            style={{
                                textDecoration: 'none',
                                color: '#e1e8ed'
                            }}    
                        >Inicio</Link></HeadLi>
                        
                        <HeadLi><Link 
                            to="/Biblioteca"
                            style={{
                                textDecoration: 'none',
                                color: '#e1e8ed'
                            }}
                        > Biblioteca</Link></HeadLi>
                </HeadNav>
            </HeadBg>
        </>
    )
}

export default Header;