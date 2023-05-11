import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  return(
    <header className="container_header">
      <NavLink to="/">
        <h1>BLOG</h1>
      </NavLink>
      <div
        className='hamburger'
        onClick={toggleMenu}>
        menu
      </div>
      <nav className={`container_nav ${menuOpen ? 'open' : ''}`}>
        <div
          className='close_menu'
          onClick={toggleMenu}>close
        </div>
        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/post" onClick={toggleMenu}>Blog Posts</NavLink>
        <NavLink to="/projects"onClick={toggleMenu} >Projetos</NavLink>
      </nav>
    </header>
  )
}


// Por padrão, uma classe ativa é adicionada a um componente <NavLink>
// quando ele está ativo para que você possa usar CSS para estilizá-lo.
// porém ela NÃO FUNCIONA com o CSS modules
// Por esse motivo aqui usei o css normal