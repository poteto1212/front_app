import React, { useState } from "react";
import styled from "styled-components";

interface HeaderProps {
  // Add any necessary prop types here
}

const Namber: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledHeader>
      <Logo>My Logo</Logo>
      <NavMenu open={menuOpen}>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </NavMenu>
      <MenuToggle onClick={toggleMenu}>
        {menuOpen ? "Close" : "Menu"}
      </MenuToggle>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavMenu = styled.nav<{ open: boolean }>`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const NavItem = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Namber;
