import './app.css'
import Topbar from "./Components/TopBar/Topbar";
import Sidebar from "./Components/SideBar/Sidebar";
import Home from './Pages/Home/Home';
import UserList from './Pages/userList/UserList'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleUser from './Pages/SingleUser/SingleUser';
import NewUser from "./Pages/newUser/NewUser"
import ProductList from './Pages/ProductList/ProductList';
import SingleProduct from "./Pages/SingleProduct/SingleProduct"
import NewProduct from './Pages/NewProduct/NewProduct';


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
              <Route  path='/newUser' element={<NewUser/>} />
              <Route  path="/products" element={<ProductList/>}/>
              <Route  path="/product/:id" element={<SingleProduct/>}/>
              <Route  path="/newProduct" element={<NewProduct/>}/>



            </Routes>
            </div>

          </div>
          </div>
      </BrowserRouter>


    </>




  );
}

export default App;
