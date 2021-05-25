import React from "react";
import Styled from "styled-components";
import Fade from "react-reveal";
const Section = ({ title, disc, bgImage, leftButton, rightButton }) => {
  return (
    <Wrap image={bgImage}>
      <Fade bottom>
        <SectionText>
          <h1>{title}</h1>
          <p>{disc}</p>
        </SectionText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <SectionButtons>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </SectionButtons>
          <ArrowButton src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = Styled.div`
width:100vw;
height:100vh;
background-image:${(props) => ` url('/images/${props.image}')`};
/* color:red; */
background-position:center center;
background-repeat:no-repeat;
background-size: cover;

display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;

`;
const SectionText = Styled.div`
 padding-top: 15vh;
 text-align:center;
 p{
   display:flex;
   flex-wrap:wrap;
 }
 `;
const SectionButtons = Styled.div`
  display:flex;
  margin-bottom:30px;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
`;

const LeftButton = Styled.div`
text-align:center;
text-transform:uppercase;
border-radius:20px;
width:256px;
padding:10px;
cursor:pointer;
color:white;
background-color:rgba(23,26,32,0.8);
margin:15px;

border:none;
font-weight:700;
`;
const RightButton = Styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;
`;
const ArrowButton = Styled.img`
 height:50px;
animation: downArrow infinite 1.5s;
 `;
const Buttons = Styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom:15px;
`;
