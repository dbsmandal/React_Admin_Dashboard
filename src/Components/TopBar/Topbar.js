import React from 'react';
import './topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarwraper">
                <div className="topleft">
                    <span className='top_left_logo'>Dbsmandal</span>
                </div>
                <div className="topright">
                    <div className="topbar_icons">
                        <NotificationsNoneIcon />
                        <span className='icons_badge'>5</span>
                    </div>
                    <div className="topbar_icons">
                        <LanguageIcon />
                        <span className='icons_badge'>5</span>
                    </div>
                    <div className="topbar_icons">
                        <SettingsIcon />
                    </div>
                    <img src="https://media.licdn.com/dms/image/D5603AQG1XhWaX9ZKrw/profile-displayphoto-shrink_800_800/0/1663572180327?e=1684972800&v=beta&t=GeOtUMnArN8aB3dFqFdMWllyLToqb2yc6eBtqzZq2OA" alt="" className='profile_img'/>
                </div>
            </div>

        </div>
    )
}

export default Topbar
