import React from 'react'
import "../css/header.css"
import profileImage from "../images/profile-image.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header(props) { 
    const location = useLocation();

    const switchCategory = (newPage) => {
        props.selectedCategory(newPage);
    };

    const isSelected = (newPage) => {
        return location.pathname === newPage;
    }; 

    const navigate = useNavigate();

    const logout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('loggedIn');

    navigate('/login');
  };

    const loggedIn = localStorage.getItem('loggedIn') === 'true';

    return ( 
        <div className='background'>
            <header>
                    <ul className='page-navigate'> 
                    {loggedIn && <Link to="/profile"> 
                        <div className='image-box'>
                            <div className={`profile ${isSelected('/profile') ? 'selected' : ''}`} onClick={() => switchCategory('Profile')}>
                                <img className='profile-image' src={profileImage} alt=''></img>
                            </div> 
                        </div>
                        </Link>}
                        <Link to="/main_page"> 
                            <li className={`category ${isSelected('/main_page') ? 'selected' : ''}`} onClick={() => switchCategory('Main page')}> Main page </li> 
                        </Link> 
                        <Link to="/activity"> 
                            <li className={`category ${isSelected('/activity') ? 'selected' : ''}`} onClick={() => switchCategory('Activity')}> Activity </li> 
                        </Link> 
                        <Link to="/body_measurements"> 
                            <li className={`category ${isSelected('/body_measurements') ? 'selected' : ''}`} onClick={() => switchCategory('Body measurements')}> Body measurements </li> 
                        </Link> 
                        <Link to="/water"> 
                            <li className={`category ${isSelected('/water') ? 'selected' : ''}`} onClick={() => switchCategory('Water')}> Water </li> 
                        </Link> 
                        <Link to="/nutrition"> 
                            <li className={`category ${isSelected('/nutrition') ? 'selected' : ''}`} onClick={() => switchCategory('Nutrition')}> Nutrition </li> 
                        </Link> 
                        {!loggedIn && (<Link to="/login"> 
                            <li id='login' className={`category ${isSelected('/login') ? 'selected' : ''}`} onClick={() => switchCategory('LogIn')}> LogIn </li> 
                        </Link>)}
                        {loggedIn && <li id='logout' onClick={logout}> LogOut </li>}
                    </ul>
            </header>
        </div>
        
    );
}

export default Header;