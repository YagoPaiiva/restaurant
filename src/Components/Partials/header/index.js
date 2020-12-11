import React from 'react';
import {HeaderArea} from './styled';
import {Link} from 'react-router-dom'
import img from './img/favicon-512.jpg'

const Header = () => {
    return(
    <HeaderArea>
        
        <div className="area--image">
            <img className='imagelogoOne' src={img} />
            <img className='imagelogoTwo' src={img}></img>
        </div>
        
        <div className="area--header">                    

            <div className="area--title">            
                <Link className="home" to="/">Restaurant</Link>
            </div>  
            
             
            <div className="area--menu">
                <ul>
                    <li>
                        <Link to="/appetizer">
                            <p>Entradas</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/maincourse">
                            <p>Prato Principal</p>  
                        </Link>
                    </li>
                        
                    <li>
                        <Link to="/snack">
                            <p>Petiscos</p>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/dessert">
                            <p>Sobremessa</p>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/drinks">
                            <p>Bebidas</p>
                        </Link>
                    </li>
                </ul>
            </div>
            
        </div>
    </HeaderArea>
    )
}

export default Header;