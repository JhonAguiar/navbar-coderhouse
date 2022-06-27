// import logo from './logo.svg';
import React , { useContext } from 'react'
import logo from '../logo.svg';
import CartWidget from './CartWidget';
import { FaSearch } from 'react-icons/fa';
import { GiFlipFlops, GiHoodie, GiShorts, GiPoloShirt } from 'react-icons/gi';

import './Navbar.css';
import { Link } from 'react-router-dom';

import { MiContexto } from '../context/CartContext';

function Navbar() {

  const { totalInCart } = useContext(MiContexto)

  return (
    <div className='nav-main'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-default text-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* <img src={logo} alt="" width={75} /> */}
            <div className='blue-shop'>Tienda</div>
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className="nav navbar-nav navbar-center">
              <form className="d-flex" role="search">
                <input className="form-control me-2 searched" type="search" placeholder="Selecciona tu producto" aria-label="Search"/>
                <button className="btn btn-danger" style={{ borderRadius: '100%' , marginLeft: "-70px" , height: "40px" , width:"40px" , marginTop:'10px'}} type="submit"><FaSearch width="0.3em" height="0.3em" color="#white" style={{ marginTop: "-5px"}} fontSize="1em"/></button>
              </form>
            </div> 
            
          </div>
          <Link to='/cart' className='enlace'>
            <CartWidget valor={ totalInCart() }></CartWidget>
          </Link>
          
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
        </div>
      </nav>
      <div className='menu-sub'>
        <div className="categories">
          <div className="category">
            <Link to={`category/camisetas`} className="vinculo">
              <div className="category-elems">
                <GiPoloShirt fontSize={30} color={"#777"}></GiPoloShirt>
                <div className='vinculo'>Camisetas</div>
              </div>
            </Link>
          </div>
          <div className="category">
            <Link to={`category/sandalias`} className="vinculo">
              <div className="category-elems">
                <GiFlipFlops fontSize={30} color={"#777"}></GiFlipFlops>
                <div className='vinculo'>Sandalias</div>
              </div>
            </Link>  
          </div>
          <div className="category" >
            <Link to={`category/buzos`} className="vinculo">
              <div className="category-elems">
                <GiHoodie fontSize={30} color={"#777"}></GiHoodie>
                <div className='vinculo'>Buzos</div>
              </div>
            </Link> 
          </div>
          <div className="category">
            <Link to={`category/bermudas`} className="vinculo">
              <div className="category-elems">
                <GiShorts fontSize={30} color={"#777"}></GiShorts>
                <div className='vinculo'>
                  Bermudas
                </div>
              </div>
              
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
