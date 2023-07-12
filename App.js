import './App.css';
import { Outlet, Link } from "react-router-dom";
import { Header } from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      {/*<nav>
        <ul>
          <li> <Link to="/Home">Home</Link> </li>
          <li> <Link to="/Contactus">Contactus</Link> </li>
          <li> <Link to="/ListEmployee">ListEmployee</Link> </li>
        </ul>
      </nav>*/}
      <Header/>
      <Outlet />
    </div>
  );
}
export default App;

