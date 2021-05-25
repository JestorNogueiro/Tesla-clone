import React, { useState } from "react";
import Styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "react-reveal";
import { PinDropSharp } from "@material-ui/icons";
const Header = () => {
  const [closeOpen, setCloseOpen] = useState(false);
  const handleMenu = () => {
    setCloseOpen(true);
  };
  const handleClose = () => {
    setCloseOpen(false);
  };
  return (
    <Container>
      <a>
        <Fade left>
          <img src="/images/logo.svg" />
        </Fade>
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={handleMenu} />
      </RightMenu>
      <BurgerMenu show={closeOpen}>
        <CloseWrapper>
          <CustomeClose onClick={handleClose} />
        </CloseWrapper>
        <li>
          <a>Existing Inventory</a>
        </li>
        <li>
          <a>Used Inventory</a>
        </li>
        <li>
          <a>Trade-in</a>
        </li>
        <li>
          <a>CyberTruck</a>
        </li>
        <li>
          <a>Charging</a>
        </li>
        <li>
          <a>Test-Drive</a>
        </li>
        <li>
          <a>Utillities</a>
        </li>
        <li>
          <a>Roadstar</a>
        </li>
      </BurgerMenu>
    </Container>
  );
};

export default Header;

const Container = Styled.div`
width:100%
min-height:50px;
object-fit:contain;
position:fixed;
padding:8px 20px;
top:0;
left:0;
right:0;
/* background:transparent; */
display:flex;
align-items: center;
justify-content:space-between;
z-index:10;
`;
const Menu = Styled.div`
display:flex;
align-items: center;

a{
  text-decoration:none;
  text-transform:uppercase;
  font-weight:600;
  color:black;
 margin-left:15px;
}
@media(max-width:768px){
  display:none;
}
`;
const RightMenu = Styled.div`
display:flex;
align-items: center;
a{
  text-decoration:none;
  text-transform:uppercase;
  font-weight:600;
  color:black;
 margin-right:8px;
}`;

const CustomMenu = Styled(MenuIcon)`
cursor:pointer;
`;

const BurgerMenu = Styled.div`
position:fixed;
background-color:white;
width:300px;
top:0;
right:0;
bottom:0;
z-index:1000 !important;
padding:20px;
transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
transition:all 0.4s ease;

li{
  text-decoration:none;
  list-style:none;
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,0.2);
    cursor:pointer;
    &:hover{
      font-weight:900;
    }

  a{
    font-weight:550;
  }
}

`;
const CloseWrapper = Styled.div`
 display:flex;
 justify-content:flex-end;
 `;
const CustomeClose = Styled(CloseIcon)`
margin-top:-8px;
 cursor:pointer;
 `;
