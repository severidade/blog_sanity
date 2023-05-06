import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return(
    <header className={ styles.container_header }>
      <NavLink to="/"><h1>BLOG</h1></NavLink>
      <nav className={ styles.container_nav }>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/post">Blog Posts</NavLink>
        <NavLink to="/projects">Projetos</NavLink>
      </nav>
    </header>
  )
}