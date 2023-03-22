import React from 'react';
import './widgetsm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = () => {
  return (
    <div className='widgetsmall'>
      <span className="userTitle">New Join Members</span>
        <ul className="memberList">
            <li className="memberListItem">
                <img src="https://media.licdn.com/dms/image/D5603AQG1XhWaX9ZKrw/profile-displayphoto-shrink_800_800/0/1663572180327?e=1684972800&v=beta&t=GeOtUMnArN8aB3dFqFdMWllyLToqb2yc6eBtqzZq2OA" alt="" className="profile" />
                <div className="userDetails">
                    <span className="userName">Dipak Mandal</span>
                    <span className="userSubName">Frontend Developer</span>
                </div>
                <button className='visibleBtn'>
                <VisibilityIcon/>
                Display
                </button>
            </li>
        </ul>
        <ul className="memberList">
            <li className="memberListItem">
                <img src="https://media.licdn.com/dms/image/D5603AQG1XhWaX9ZKrw/profile-displayphoto-shrink_800_800/0/1663572180327?e=1684972800&v=beta&t=GeOtUMnArN8aB3dFqFdMWllyLToqb2yc6eBtqzZq2OA" alt="" className="profile" />
                <div className="userDetails">
                    <span className="userName">Dipak Mandal</span>
                    <span className="userSubName">Frontend Developer</span>
                </div>
                <button className='visibleBtn'>
                <VisibilityIcon className='visibleIcon'/>
                Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm
