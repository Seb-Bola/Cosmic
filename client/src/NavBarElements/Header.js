import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import { useNavigate, NavLink } from "react-router-dom";

const Header = () => {
  // const { currrentUser, } = useContext(UserContext);
  const [user, setUser] = useState(true);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  // console.log(user);
  console.log(dropdownMenu);
  const navigate = useNavigate();

  const displayList = () => {
    if (dropdownMenu === false) {
      setDropdownMenu(true);
    } else {
      setDropdownMenu(false);
    }
  };

  return (
    <HeaderLayout>
      <NavBar>
        <NavItem>Cosmic NRG</NavItem>
        <NavItem>by Blast Of Beatz</NavItem>
        <NavItem> Blasty Rockets icon</NavItem>
        <Menu onClick={displayList}>
          <WrapList>
            <p>Menu</p>
            <Dropdown show={dropdownMenu ? true : false}>
              {user && (
                <NavLink to="/adminpage">
                  <ItemList>ADMIN</ItemList>
                </NavLink>
              )}

              <NavLink to="/contact">
                <ItemList>CONTACT</ItemList>
              </NavLink>
              <NavLink to="/lineup">
                <ItemList>LINEUP AND ARTIST</ItemList>
              </NavLink>

              <NavLink to="/terms">
                <ItemList>TERMS AND CONDITIONS </ItemList>
              </NavLink>
            </Dropdown>
          </WrapList>
        </Menu>
      </NavBar>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  background-color: aliceblue;
  /* border: 2px solid blue; */
  display: flex;
  align-items: left;
`;
const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #383737;
`;
const NavItem = styled.li`
  padding: 12px 16px;
`;
const Menu = styled.li`
  width: 50px;
`;
const WrapList = styled.button`
  all: unset;
`;
const ItemList = styled.li`
  background-color: purple;
  color: white;
  padding: 12px 16px;
  &:hover {
    background-color: aqua;
  }
`;
const Dropdown = styled.ul`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  right: 0;
  top: 10vh;
`;
