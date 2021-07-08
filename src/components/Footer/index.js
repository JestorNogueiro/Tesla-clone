import React from "react";
import Styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Names>
          <h6>Developed By</h6>
          @Jestor Nogueiro
        </Names>
        <SocialMedia>
          <Names>
            <h6>Contact Me:</h6>
          </Names>
          <Facebook
            href="https://www.facebook.com/jestor.nogueiro/"
            target="_blank"
          >
            <FaFacebook />
          </Facebook>
          <Instagram
            href="https://www.instagram.com/jestor_nogueiro/"
            target="_blank"
          >
            <FaInstagram />
          </Instagram>

          <LinkedIn
            href="https://www.linkedin.com/in/jestor-nogueiro-02467b184/"
            target="_blank"
          >
            <FaLinkedin />
          </LinkedIn>
          <GitHub href="https://github.com/JestorNogueiro" target="_blank">
            <FaGithub />
          </GitHub>
        </SocialMedia>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = Styled.div`
display:flex;
align-items:center;
justify-content:center;
bottom:0;
padding:0 2rem;

height:14vh;
width:100%;
background-color:#171717;
color:white;

`;

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  /* justify-content: ; */
  /* padding:2px 15px; */
`;
const Names = Styled.div`
margin-left:15px;

  /* display: flex;
  align-items: center;
  justify-content: flex-end; */
  h6{
    font-size:10px;
    color:grey;
  }
`;
const SocialMedia = Styled.div`
  /* display: flex; */
  /* flex-direction:column; */
  align-items: center;
  margin-left:8px;

`;
const GitHub = Styled.a`
  margin-left: 10px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 420ms ease-in;
  &:hover{
    color:grey;
    transform: scale(1);
  }
`;
const Facebook = Styled(GitHub)`

`;
const Instagram = Styled(Facebook)`

`;
const LinkedIn = Styled(Instagram)`
  
`;
