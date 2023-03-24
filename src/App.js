import './app.css'
import Topbar from "./Components/TopBar/Topbar";
import Sidebar from "./Components/SideBar/Sidebar";
import Home from './Pages/Home/Home';
import UserList from './Pages/userList/UserList'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleUser from './Pages/SingleUser/SingleUser';


function App() {
  return (
    <>
      <BrowserRouter>
      <div className="topbarApp">

     
          <Topbar />

          <div className="containerApp">
            <div className="sidebarApp">
            <Sidebar />

            </div>
            <div className="pagesApp">

            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route  path='/users' element={<UserList />} />
              <Route  path='/user/:id' element={<SingleUser/>} />

            </Routes>
            </div>

          </div>
          </div>
      </BrowserRouter>


    </>




  );
}

export default App;
