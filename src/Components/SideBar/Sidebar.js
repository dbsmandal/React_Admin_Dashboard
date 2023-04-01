import './sidebar.css'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_Wrapper">
        <div className="sidebar_Menu">
          <h3 className="sidebar_Title">Dashboard</h3>
          <ul className="sidebar_List">
            <Link to="/" className='links'>
            <li className="sidebar_List_Item active">
              <LineStyle className="sidebar_Icon" />
              Home
            </li>
            </Link>
            <li className="sidebar_List_Item">
              <Timeline className="sidebar_Icon" />
              Analytics
            </li>
            <li className="sidebar_List_Item">
              <TrendingUp className="sidebar_Icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar_Menu">
          <h3 className="sidebar_Title">Quick Menu</h3>
          <ul className="sidebar_List">
           <Link to="/users" className='links'>
           <li className="sidebar_List_Item">
              <PermIdentity className="sidebar_Icon" />
              Users
            </li>
           </Link>
           <Link to="/products" className='links'>

            <li className="sidebar_List_Item">
              <Storefront className="sidebar_Icon" />
              Products
            </li>
            </Link>
            <li className="sidebar_List_Item">
              <AttachMoney className="sidebar_Icon" />
              Transactions
            </li>
            <li className="sidebar_List_Item">
              <BarChart className="sidebar_Icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar_Menu">
          <h3 className="sidebar_Title">Notifications</h3>
          <ul className="sidebar_List">
            <li className="sidebar_List_Item">
              <MailOutline className="sidebar_Icon" />
              Mail
            </li>
            <li className="sidebar_List_Item">
              <DynamicFeed className="sidebar_Icon" />
              Feedback
            </li>
            <li className="sidebar_List_Item">
              <ChatBubbleOutline className="sidebar_Icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar_Menu">
          <h3 className="sidebar_Title">Staff</h3>
          <ul className="sidebar_List">
            <li className="sidebar_List_Item">
              <WorkOutline className="sidebar_Icon" />
              Manage
            </li>
            <li className="sidebar_List_Item">
              <Timeline className="sidebar_Icon" />
              Analytics
            </li>
            <li className="sidebar_List_Item">
              <Report className="sidebar_Icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}