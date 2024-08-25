import React, { useEffect,  useRef } from 'react';
import './Header.css'

export default function Header() {


  const hamBurger = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('openmenu');
    }
  };

    
    const menuRef = useRef(null);

    useEffect(() => {
      menuRef.current = document.querySelector('.menu');
    }, []);


    return (
    <>
      <header className='position-sticky top-0' style={{background:'#14213d',zIndex:'999'}} >

        <nav className='navbar navbar-expand-md py-3 shadow'>

          <div className='container-fluid'>
  <a className='navbar-brand' href='#'>
              <img src="./logo.png" width={50} alt="" />
            </a>

    <div class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            <div className="menu " onClick={hamBurger}>
            <div>
              
<span className='line-1 small-line bg-white'></span>
                <span className='line-2 small-line bg-white'></span>
                <span className='line-3 small-line bg-white'></span>
            </div>
        </div>
    </div>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  me-md-auto ">
        <li class="nav-item">
          <a class="nav-link text-white"  aria-current="page" href="#resi">Resdencies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#val">
Our Value</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link text-white" href='#contact'>Contact Us</a>
        </li>
       
      </ul>

      <div class="d-flex">
      <button class="me-4 button">Sign Up</button>
        <button class="button" >Sign In</button>
      </div>

      <form class="d-flex d-sm-none mt-3" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
          </div>
        </nav>
      </header>
    </>
  );
}
