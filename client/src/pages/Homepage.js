import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled, { keyframes} from 'styled-components';
import TiangongB from "../assets/TiangongB.png";
import { LightPurpleButton } from '../components/buttonStyles';
import Footer from './Footer';
import TGU from '../assets/TGUBF.jpg'
//import './Homepage.css';
//import './App.css';

const Homepage = () => {

  const backgroundStyles = {
    backgroundImage: `url(${TGU})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the background image
    minHeight: '100vh', // Set a minimum height to fill the viewport
    // Add other styles as needed
  };

    return (
      <div style={backgroundStyles}>
        <HeaderContainer>
        <SlidingText>Tiangong University〈-〉天津工业大学</SlidingText>
        <StyledImage src={TiangongB} alt="TiangongB" />
            </HeaderContainer>
       <StyledContainer>
       
       <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to International Student Management System
                        </StyledTitle>
                        <StyledText>
                        Tiangong University Student Management System is an integrated platform
                         designed to streamline administrative tasks 
                        related to student enrollment, academic records,
                         and communication. It provides efficient tools 
                        for managing student data, course registration, grades,
                         and facilitates communication between students, faculty,
                          and administration for enhanced academic experiences.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3,
                                        color: "white", borderColor: "#7f56da",
                                    fontWeight:"900", marginBottom:'6px', backgroundColor:'#194064'
                                      }}
                                    >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText style={{color:"white"}}>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"pink"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
            <Footer />
        </StyledContainer>
      </div>
    );
};

export default Homepage;

//const div = styled.backgroundImager`
//width: fit-content;
//`;
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //color: #edf5ef;
  width: 80%; /* Set the width of the container */
  margin-left: auto; /* Center the container horizontally */
  margin-right: auto; /* Center the container horizontally */
`;
const slideRightToLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;


const HeaderContainer = styled.header`
  background-color: #194064;
  color: #fff;
  padding: 15px;
  text-align: center;
  border-radius:1px;
  margin-top:10px;
  //width: 80%; /* Increase the width by 40px on both left and right sides */
  //width:fit;
`;

const SlidingText = styled.h1`
  display: left to right;
  animation: ${slideRightToLeft} 22s linear infinite;
`;
//const Grid = styled.img`
  //padding: 24px;
  //margin-top:30px;
  //height: 100vh;
//`;
const StyledImage = styled.img`
    position: absolute; // Position the image absolutely within its container
    top: 0; // Position the image at the top
    left: 0; // Position the image at the left corner
    transform: translate(0, 100%); // Move the image to the bottom of the container
    width: 100px; // Set the width of the image to your desired size
    height: auto; // Maintain the aspect ratio of the image
    border-radius: 1px; // Apply border radius for rounded corners
    //z-index: 0; // Ensure the image is behind other content
    margin-top: 0;
`;
const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

// const StyledTitle = styled.h1`
//   font-size: 2rem;
//   color: black;
//   /* font-family: "Manrope"; */
//   font-weight: bold;
//   padding-top: 0;
//   letter-spacing: normal;
//   line-height: normal;
//   justify-content:center;
//   display:flex;
//   align-items:center;
// `;
const StyledTitle = styled.h1`
  font-size: 2rem;
  color: black;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
  white-space: nowrap; // Ensure the title stays on one line
   text-align:center;
`;

const StyledText = styled.p`
  margin-top: 15px;
  margin-bottom: 10px;
  letter-spacing: normal;
  line-height: normal;
  color: purple;
  font-size: bold;
  font-weight: 900;
  text-align: center; // Center the text horizontally
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0;
`;
//const StyledLink = styled(Button)`
  //text-align: center;
  //background-color: #1f1f38;
  //color:rgba(255, 255, 255, 0.6);
  //cursor:pointer;

  //&:hover {
   // background-color: #2c2c6c;
    //color:white;
  //}
//`;