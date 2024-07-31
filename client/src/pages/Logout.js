import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../redux/userRelated/userSlice';
import styled, {keyframes} from 'styled-components';
import Footer from './Footer';
import { AiFillStar } from 'react-icons/ai';

const Logout = () => {
    const currentUser = useSelector(state => state.user.currentUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authLogout());
        navigate('/');
    };

    const handleCancel = () => {
        navigate(-1);
    };
    //const BottomContainer = ()=>{
    //navigate();
    //}

    return (
     <StyleContainer>
        <LogoutContainer>
            <h1>{currentUser.name}</h1>
            <LogoutMessage>Are you sure you want to log out?</LogoutMessage>
            <LogoutButtonLogout onClick={handleLogout}>Log Out</LogoutButtonLogout>
            <LogoutButtonCancel onClick={handleCancel}>Cancel</LogoutButtonCancel>
            <Footer />
            <div className="logout-stars-container" style={{justifyContent:'center', alignItems:'center', display:'flex', 
           margin: '0rem 0.20rem', fontSize: '1.5rem',color: '#fe9e0d', marginTop:'30px'}}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
            </LogoutContainer>
       <SlidingText>"Explore limitless possibilities at our university. 
        Embark on a journey of knowledge and discovery. Logout refreshed, ready to conquer new horizons"</SlidingText>
      </StyleContainer>
    );
};

export default Logout;


const LogoutContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #85769f66;
  color: black;
  height:40vh;
  //margin-top:10px;
`;

const slideRightToLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const StyleContainer = styled.header`
  background-color: #194064;
  color: #fff;
  padding: 15px;
  text-align: center;
  border-radius:5px;
  margin-top:10px;
  height:62vh;
`;

const SlidingText = styled.h1`
  display: right to left;
  animation: ${slideRightToLeft} 35s linear infinite;
`;

const LogoutMessage = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #333;
  }
`;

const LogoutButtonLogout = styled(LogoutButton)`
  background-color: #ea0606;
`;

const LogoutButtonCancel = styled(LogoutButton)`
  background-color: rgb(99, 60, 99);
`;
