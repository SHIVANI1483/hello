import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './header.css'
import Home from './Home'
import Jwellery from './Jwellery'
import Electronics from './Electronic'
import Footer from './Footer'


const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/jewelery">Jwellery</NavLink>
            </li>
            <li>
              <NavLink to="/Electronic">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/MenClothes">Men Cloth</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Women Cloth</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/jewelery' element={<Jwellery></Jwellery>}></Route>
        <Route path='/Electronic' element={<Electronics></Electronics>}></Route>

      </Routes>
    
    </nav>
  )
}

export default Header