import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

  return(
    <header className="container_header">
      <NavLink to="/"><h1>BLOG</h1></NavLink>
      <nav className="container_nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/post">Blog Posts</NavLink>
        <NavLink to="/projects">Projetos</NavLink>
      </nav>
    </header>
  )
}


// Por padrão, uma classe ativa é adicionada a um componente <NavLink>
// quando ele está ativo para que você possa usar CSS para estilizá-lo.
// porém ela NÃO FUNCIONA com o CSS modules
// Por esse motivo aqui usei o css normal