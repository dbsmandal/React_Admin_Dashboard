import React from 'react';
import "./singleuser.css"
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
const SingleUser = () => {
  return (
    <>
      <div className='singleuser'>
        <h3 className='heading' >Edit User</h3>
        <button className='create_btn'>Create New User</button>
      </div>
      <div className="user_container">
        <div className="user_container_left">
          <div className="user_container_left_profile">
            <img src="https://media.licdn.com/dms/image/D5603AQG1XhWaX9ZKrw/profile-displayphoto-shrink_800_800/0/1663572180327?e=1684972800&v=beta&t=GeOtUMnArN8aB3dFqFdMWllyLToqb2yc6eBtqzZq2OA" alt="" />
            <div className="user_container_left_info">
              <span className="user_container_left_username">
                Dipak Mandal
              </span>
              <span className="user_container_left_profession">
                Software Engineer
              </span>
            </div>
          </div>
          <div className="acountDetails">
            <span className='acountDetails_title'>Acount Details</span>
            <div className="acountDetails_info">
              <span className='acountDetails_info_icons'>
                <PersonIcon className='icons'/>
                <span className="acountDetails_info_icons_data">
                  dbsmandal
                </span>
              </span>
              <span className='acountDetails_info_icons'>
                <CalendarMonthIcon className='icons'/>
                <span className="acountDetails_info_icons_data">
                  18.12.1996
                </span>
              </span>
            </div>
          </div>
          <div className="acountDetails">
            <span className='acountDetails_title'>Contact Details</span>
            <div className="acountDetails_info">
              <span className='acountDetails_info_icons'>
                <PhoneAndroidIcon className='icons' />
                <span className="acountDetails_info_icons_data">
                  +919734078407
                </span>
              </span>
              <span className='acountDetails_info_icons'>
                <EmailIcon className='icons'/>
                <span className="acountDetails_info_icons_data">
                  dipakmandal@gmail.com</span>
              </span>
              <span className='acountDetails_info_icons'>
                <GpsFixedIcon className='icons'/>
                <span className="acountDetails_info_icons_data">
                  Ratua | Malda                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="user_container_right">
          right
        </div>
      </div>
    </>
  )
}

export default SingleUser
