import React from 'react'
import EmailMe from '../EmailMe'
import { Wrapper, Nav, NavItem, NavLink } from './style'

const Menu = () =>
  <Wrapper>
    <Nav>
      <NavItem>
        <a href="https://www.linkedin.com/in/sumit1523/" rel="noopener noreferrer" target="_blank">Linkedin</a>
      </NavItem>
      <NavItem>
        <a href="https://codepen.io/sumit1523" rel="noopener noreferrer" target="_blank">Codepen</a>
      </NavItem>
      <NavItem>
        <a href="https://github.com/sumit1523" rel="noopener noreferrer" target="_blank">Github</a>
      </NavItem>
    </Nav>
    <Nav>
      <NavItem>
        <NavLink to='/'>Index</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/works'>Works</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/profile'>Profile</NavLink>
      </NavItem>
      <NavItem highlight><EmailMe text="Contact"/>
    </NavItem>
    </Nav>
  </Wrapper>

export default Menu
