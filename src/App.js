import './app.css'
import Topbar from "./Components/TopBar/Topbar";
import Sidebar from "./Components/SideBar/Sidebar";
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className='home' >
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>

    </div>
  );
}

export default App;
