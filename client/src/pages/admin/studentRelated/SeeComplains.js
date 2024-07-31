import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Paper, Box, Checkbox,IconButton
} from '@mui/material';
import { getAllComplains } from '../../../redux/complainRelated/complainHandle';
import TableTemplate from '../../../components/TableTemplate';
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteUser } from '../../../redux/userRelated/userHandle';
//import { getAllComplains } from '../../../redux/complainRelated/complainHandle';
//import { useNavigate } from "react-router-dom";

const SeeComplains = () => {
  //const navigate = useNavigate()
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };  
  const dispatch = useDispatch();
  const { complainsList, loading, error, response } = useSelector((state) => state.complain);
  const { currentUser } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getAllComplains(currentUser._id, "Complain"));
  }, [currentUser._id, dispatch]);

  if (error) {
    console.log(error);
  }

  const deleteHandler = (deleteID, address) => {
    dispatch(deleteUser(deleteID, address))
        .then(() => {
            dispatch(getAllComplains(currentUser._id, "Complain"));
        })
}


  const complainColumns = [
    { id: 'user', label: 'User', minWidth: 170 },
    { id: 'complaint', label: 'Complaint', minWidth: 100 },
    { id: 'date', label: 'Date', minWidth: 170 },
  ];

  const complainRows = complainsList && complainsList.length > 0 && complainsList.map((complain) => {
    const date = new Date(complain.date);
    const dateString = date.toString() !== "Invalid Date" ? date.toISOString().substring(0, 10) : "Invalid Date";
    return {
      user: complain.user?.name || 'Unknown User',
      complaint: complain.complaint,
      date: dateString,
      id: complain._id,
    };
  });

  const ComplainButtonHaver = ({ row }) => {
    return (
      <>
        <Checkbox {...label} />
        <IconButton onClick={() => deleteHandler(row.id, "Complain")}>
                    <DeleteIcon color="error" />
                </IconButton>
      </>
    );
  };

  return (
    <>
      {loading ?
        <div>Loading...</div>
        :
        <>
          {response ?
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              No Complains Right Now
            </Box>
            :
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              {Array.isArray(complainsList) && complainsList.length > 0 &&
                <TableTemplate buttonHaver={ComplainButtonHaver} columns={complainColumns} rows={complainRows} />
              }
            </Paper>
          }
        </>
      }
    </>
  );
};

export default SeeComplains;