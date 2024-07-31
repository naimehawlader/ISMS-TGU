import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import Teachers from '../../assets/PBN.png'; // Assuming PBN.png is in the assets folder
import { Paper } from '@mui/material';

// Define keyframes for the bright coloring animation
const brightAnimation = keyframes`
    0% { background-color: #FFD700; } /* Start with a bright color */
    50% { background-color: #FFA500; } /* Transition to another bright color */
    100% { background-color: #FFD700; } /* Transition back to the initial color */
`;

const AdminProfile = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <StyledContainer>
            <StyledProfile>
                <img src={Teachers} alt="Teachers" />
                <div className="profile-info">
                    Name: {currentUser.name}
                    <br />
                    Email: {currentUser.email}
                    <br />
                    School: {currentUser.schoolName}
                    <br />
                </div>
            </StyledProfile>
            <StyledBackground />
        </StyledContainer>
    );
};

export default AdminProfile;

// Styled component for the container with bright coloring animation
const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

// Styled component for the profile content
const StyledProfile = styled(Paper)`
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9); /* Adjust opacity as needed */
    z-index: 1; /* Ensure profile content is above the background */
    position: relative;
`;

// Styled component for the animated background
const StyledBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FFD700; /* Initial background color */
    animation: ${brightAnimation} 3s ease-in-out infinite; /* Apply the bright coloring animation */
    z-index: 0; /* Ensure background is behind profile content */
`;
