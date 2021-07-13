import React, { useState } from "react";
import Styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "react-reveal";

// import { useSelector } from "react-redux";
const Header = () => {
  const [closeOpen, setCloseOpen] = useState(false);

  // const cars = useSelector(selectCars);

  const handleMenu = () => {
    setCloseOpen(true);
  };
  const handleClose = () => {
    setCloseOpen(false);
  };
  return (
    <Container>
      <Fade center>
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </Fade>

      <Menu>
        <li>Model S</li>
        <li>Model X</li>
        <li>Model Y</li>
        <li>Model 3</li>
      </Menu>
      <RightMenu>
        <li href="#">Shop</li>
        <li href="#">Tesla Account</li>
        <CustomMenu onClick={handleMenu} />
      </RightMenu>

      {/* *******SideBar****** */}
      <BurgerMenu show={closeOpen}>
        <CloseWrapper>
          <CustomeClose onClick={handleClose} />
        </CloseWrapper>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-in</li>
        <li>CyberTruck</li>
        <li>Charging</li>
        <li>Test-Drive</li>
        <li>Utillities</li>
        <li>Roadstar</li>
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

li{
  cursor:pointer;
  text-decoration:none;
  list-style:none;
  text-transform:uppercase;
  font-weight:600;
  color:black;
 margin-left:15px;
 &:hover{
      font-weight:700;
    }
}
@media(max-width:768px){
  display:none;
}
`;
const RightMenu = Styled.div`
display:flex;
align-items: center;

li{
  cursor:pointer;
  text-decoration:none;
  list-style:none;
  text-transform:uppercase;
  font-weight:600;
  color:black;
 margin-right:8px;
 &:hover{
      font-weight:650;
    }
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
