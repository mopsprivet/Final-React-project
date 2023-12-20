import React, { useState, useEffect } from 'react'
import "../css/profile.css" 

const Profile = () => {
    const [userData, setUserData] = useState('');
    
    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        setUserData(storedUserData);
      }, []); 


    return (
        <div className='profile'> 
            <div className='profile-block'> 
                <div className='name-username'> 
                        <h1 className='name'>{`${userData.firstname} ${userData.lastname}`}</h1> 
                        <h4 className='username'>@{`${userData.username}`}</h4> 
                </div> 
                
                <ul className='personal-info'>
                    <li><div className='connected-apps'> 
                        <h3>Connected Apps</h3> 
                             <ul> 
                                <li>GoogleFit</li> 
                                <li>Zepp Life</li> 
                                <li>Damumed</li>
                            </ul>
                        </div>
                    </li> 
                    <li><div className='connected-devices'>
                        <h3>Connected Devices</h3> 
                            <ul> 
                                <li>MacBook Air (13-inch, Early 2015)</li> 
                                <li>iPhone (Anastasiya)</li> 
                            </ul> 
                        </div>
                    </li>
                </ul>

            </div> 
        </div>
        
    )
}

export default Profile