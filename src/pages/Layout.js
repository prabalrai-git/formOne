import { Outlet, Link } from "react-router-dom";



const Layout = () => {
  return (
    <>
      <nav className="navbar" >
        <ul className='menu'>
          <li>
            <Link to="/">AppTable</Link>
          </li>
          <li>
            <Link to="/Appform">Appform</Link>
          </li>
          <li>
            <Link to="/FormOne">formOne</Link>
          </li>
          <li>
            <Link to="/Tableapi">Tableapi</Link>
          </li>
          <li>
            <Link to="/Castesort">Castesort</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;