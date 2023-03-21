import './app.css'
import Topbar from "./Components/TopBar/Topbar";
import Sidebar from "./Components/SideBar/Sidebar";


function App() {
  return (
    <div className='home' >
   <Topbar/>
   <div className="container">
    <Sidebar/>
    <div className="others">
      others page 
    </div>
   </div>

    </div>
  );
}

export default App;
