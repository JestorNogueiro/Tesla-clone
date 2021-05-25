import React from "react";
import Styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        @Jestor Nogueiro
        <SocialMedia>
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
            {" "}
            <FaInstagram />
          </Instagram>

          <LinkedIn
            href="https://www.linkedin.com/in/jestor-nogueiro-02467b184/"
            target="_blank"
          >
            {" "}
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
/* margin-top:100px; */
  /* z-index: 100; */
height:20vh;
width:100%;

background-color:#171717;


  color:white;

`;

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SocialMedia = Styled.div`
  display: flex;
  align-items: end;
`;
const GitHub = Styled.a`
  margin-left: 10px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;
const Facebook = Styled.a`
  margin-left: 10px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;
const Instagram = Styled.a`
  margin-left: 10px;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
`;
const LinkedIn = Styled.a`
  margin-left: 10px;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
`;
