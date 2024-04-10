import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './header.css'
import Home from './Home'
import Jwellery from './Jwellery'
import Electronics from './Electronic'
import Footer from './Footer'
import Item from './Item'


import MenClothes from './MenClothes'
import WomenCloth from './WomenCloth'


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
              <NavLink to="/womenCloth">Women Cloth</NavLink>
            </li>
            
          </ul>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/jewelery' element={<Jwellery></Jwellery>}></Route>
        <Route path='/Electronic' element={<Electronics></Electronics>}></Route>
        <Route path='/MenClothes' element={<MenClothes></MenClothes>}></Route>
        <Route path='/womenCloth' element={<WomenCloth></WomenCloth>}></Route>
        <Route path='/item' element={<Item></Item>}></Route>
        
        

      </Routes>
    
    </nav>
  )
}

export default Header