import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';
import Footer from './Footer';
import { AiFillStar } from 'react-icons/ai'; 

//import { getDefaultMiddleware } from '@reduxjs/toolkit';

//const customizedMiddleware = getDefaultMiddleware({
    //serializableCheck: false
  //})
  

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const password = "zxc"

  const { status, currentUser, currentRole } = useSelector(state => state.user);;

  const [loader, setLoader] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const navigateHandler = (user) => {
    if (user === "Admin") {
      if (visitor === "guest") {
        const email = "naimebhola@gmail.com"
        const fields = { email, password }
        setLoader(true)
        dispatch(loginUser(fields, user))
      }
      else {
        navigate('/Adminlogin');
      }
    }

    else if (user === "Student") {
      if (visitor === "guest") {
        const rollNum = "1"
        const studentName = "BILLAH NAYAM"
        const fields = { rollNum, studentName, password }
        setLoader(true)
        dispatch(loginUser(fields, user))
      }
      else {
        navigate('/Studentlogin');
      }
    }

    else if (user === "Teacher") {
      if (visitor === "guest") {
        const email = "tony@12"
        const fields = { email, password }
        setLoader(true)
        dispatch(loginUser(fields, user))
      }
      else {
        navigate('/Teacherlogin');
      }
    }
  }

  useEffect(() => {
    const fetchBusinesses = () =>{
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      }
      else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    }
    else if (status === 'error') {
      setLoader(false)
      setMessage("Network Error")
      setShowPopup(true)
    }
  }
    fetchBusinesses();
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <div onClick={() => navigateHandler("Admin")}>
              <StyledPaper elevation={3}>
                <Box mb={2}>
                  <AccountCircle fontSize="large" />
                </Box>
                <StyledTypography>
                  Admin
                </StyledTypography>
                Manage users, track data, ensure system integrity, and optimize performance effectively.
              </StyledPaper>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={3}>
              <div onClick={() => navigateHandler("Student")}>
                <Box mb={2}>
                  <School fontSize="large" />
                </Box>
                <StyledTypography>
                  Student
                </StyledTypography>
                Access grades, assignments, schedules, and resources conveniently for effective academic management.
              </div>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={3}>
              <div onClick={() => navigateHandler("Teacher")}>
                <Box mb={2}>
                  <Group fontSize="large" />
                </Box>
                <StyledTypography>
                  Teacher
                </StyledTypography>
                Plan lessons, assess students, manage grades, and communicate efficiently for effective teaching and learning.
              </div>
            </StyledPaper>
          </Grid>
        </Grid>
        <p className="introduction" style={{ color: 'white', fontSize: '20px', marginTop: '20px'}}> Founded in 1912, Tiangong University is a 
        renowned institution committed to academic excellence, innovation, 
        and community engagement. Offering a diverse range of undergraduate, graduate, and professional programs, Tiangong University 
        fosters a dynamic learning environment enriched by cutting-edge research and experiential opportunities. With a dedicated
         faculty of experts and state-of-the-art facilities, students at Tiangong University are equipped
         with the knowledge and skills necessary to thrive in their chosen fields and make meaningful contributions to society. Beyond academics, Tiangong University
          promotes a vibrant campus community, encouraging students to engage in extracurricular activities, volunteer work, and cultural events. With
          a focus on inclusivity and diversity, we strive to create an environment where every individual feels valued and empowered to
           reach their full potential. Join us at Tiangong University and embark on a journey of discovery and transformation.</p>
           <div className="chooseuser-stars-container" style={{justifyContent:'center', alignItems:'center', display:'flex', 
           margin: '0rem 0.20rem', fontSize: '1.5rem',color: '#fe9e0d', marginTop:'30px'}}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
     </Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
      <Footer />
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: linear-gradient(to bottom, #411d70, #19118b);
  height: 120vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #1f1f38;
  color:rgba(255, 255, 255, 0.6);
  cursor:pointer;

  &:hover {
    background-color: #2c2c6c;
    color:white;
  }
`;
//const TextField = styled.p`
//margin-top:20px;
//`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;