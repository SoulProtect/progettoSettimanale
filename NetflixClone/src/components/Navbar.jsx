

import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    console.log(isScrolled);

 
    return (
    <div className='navbar'>
        <div className='container'>
            <div className='left'>
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
            
            </div>
        

            <div className='right'>
                <SearchIcon className='icon'/>
                <span>KID</span>
                <NotificationsIcon className='icon'/>
                <img src="https://i.etsystatic.com/34685746/r/il/df02fc/3865934116/il_570xN.3865934116_2z1n.jpg" alt="" />
               <div className='profile'>
                <ArrowDropDownIcon className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Log Out</span>
                </div>
            </div>



            </div>
        </div>
      
    </div>
  )
}

export default Navbar