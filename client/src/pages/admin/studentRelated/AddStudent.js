import React, { useEffect, useState } from 'react';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/userRelated/userHandle';
import Popup from '../../../components/Popup';
import { underControl } from '../../../redux/userRelated/userSlice';
import { getAllSclasses } from '../../../redux/sclassRelated/sclassHandle';
import { CircularProgress } from '@mui/material';

const AddStudent = ({ situation }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const userState = useSelector(state => state.user);
    const { status, currentUser, response, error } = userState;
    const { sclassesList } = useSelector((state) => state.sclass);

    const [name, setName] = useState('');
    const [rollNum, setRollNum] = useState('');
    const [password, setPassword] = useState('');
    const [className, setClassName] = useState('');
    const [country, setCountry] = useState('');
    const [fees, setFees ] = useState('');
    const [sclassName, setSclassName] = useState('');

    const adminID = currentUser._id
    const role = "Student"
    const attendance = []

    useEffect(() => {
        if (situation === "Class") {
            setSclassName(params.id);
        }
    }, [params.id, situation]);

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        dispatch(getAllSclasses(adminID, "Sclass"));
    }, [adminID, dispatch]);

    const changeHandler = (event) => {
        if (event.target.value === 'Select Class') {
            setClassName('Select Class');
            setSclassName('');
        } else {
            const selectedClass = sclassesList.find(
                (classItem) => classItem.sclassName === event.target.value
            );
            setClassName(selectedClass.sclassName);
            setSclassName(selectedClass._id);
        }
    }

    const fields = { name, rollNum, password, country,fees,sclassName, adminID, role, attendance }

    const submitHandler = (event) => {
        event.preventDefault()
        if (sclassName === "") {
            setMessage("Please select a classname")
            setShowPopup(true)
            
        }
        else {
            setLoader(true)
            dispatch(registerUser(fields, role))
            
        }
    }

    useEffect(() => {
        if (status === 'added') {
            dispatch(underControl())
            navigate("http://localhost:3000/Admin/students")
            
             //setLoader(false)
            // dispatch(registerUser(fields, role))
            
        }
        else if (status === 'failed') {
            setMessage(response)
            setShowPopup(true)
            setLoader(false)
        }
        else if (status === 'error') {
            setMessage("Network Error")
            setShowPopup(true)
            setLoader(false)
        }
    }, [status, navigate, error, response, dispatch]);

    return (
        <>
            <div className="register">
                <form className="registerForm" onSubmit={submitHandler}>
                    <span className="registerTitle">Add Student</span>
                    <label>Name</label>
                    <input className="registerInput" type="text" placeholder="Enter student's name..."
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        autoComplete="name" required />

                    {
                        situation === "Student" &&
                        <>
                            <label>Department</label>
                            <select
                                className="registerInput"
                                value={className}
                                onChange={changeHandler} required>
                                <option value='Select Class'>Select Departemnt</option>
                                {sclassesList.map((classItem, index) => (
                                    <option key={index} value={classItem.sclassName}>
                                        {classItem.sclassName}
                                    </option>
                                ))}
                            </select>
                        </>
                    }

                    <label>ID Number</label>
                    <input className="registerInput" type="number" placeholder="Enter student's ID Number..."
                        value={rollNum}
                        onChange={(event) => setRollNum(event.target.value)}
                        required />

                    <label>Country</label>
                    <input className="registerInput" type="text" placeholder="Enter student's Country..."
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        autoComplete="country" required /> 

                     <label>Student Fees</label>
                    <input className="registerInput" type="text" placeholder="Enter student's Fees..."
                        value={fees}
                        onChange={(event) => setFees(event.target.value)}
                        autoComplete="fees" required /> 

                    <label>Password</label>
                    <input className="registerInput" type="password" placeholder="Enter student's password..."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="new-password" required />

                    <button className="registerButton" type="submit" disabled={loader}>
                        {loader ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Add'
                        )}
                    </button>
                </form>
            </div>
            {/* <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} /> */}
            
        </>
    )
}

export default AddStudent