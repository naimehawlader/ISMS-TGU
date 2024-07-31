
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub} from 'react-icons/fa';

const Footer = () => {
    return (
      <FooterContainer>
        <Container>
        <p> Follow us :</p>
          <SocialIcons>
            <SocialLink href="https://www.facebook.com/profile.php?id=100064132716512" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
            </SocialLink>
            <SocialLink href="https://en.tiangong.edu.cn/main.htm" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/nayamanf/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UC7M2nENRZ0MdvuyHWZL_P4g" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
            </SocialLink>
            <SocialLink href="https://github.com/naimehawlader" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
            </SocialLink>
          </SocialIcons>
          <p>©2024 CopyRight; Bootstrap & React</p>
        </Container>
      </FooterContainer>
    );
  };
  
  export default Footer;
  
// Styled components

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  bottom:10px;
  border-radius:8px;
  position:absolute;
  width:80%;

`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  margin-bottom:0;
`;

const SocialIcons = styled.div`
  margin-top: 10px;
  background-color:purple;
  size-adjust:200px;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 15px;
`;

