import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdmins } from '../redux/adminRelated/adminHandle';
import { Paper } from '@mui/material';
import TableViewTemplate from './TableViewTemplate';

const Admin = () => {
    const dispatch = useDispatch();

    const { currentUser, currentRole } = useSelector(state => state.user);
    const { adminsList, loading, error, response } = useSelector((state) => state.admins);
    //const { adminsList } = useSelector(state => state.admins);

    useEffect(() => {
        if (currentRole === "Admin") {
            dispatch(getAllAdmins(currentUser._id, "Admin"));
        }
        else {
            dispatch(getAllAdmins(currentUser.school._id, "Admin"));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    if (error) {
        console.log(error);
    }

    const adminColumns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'email', label: 'Email', minWidth: 100 },
        //{ id: 'date', label: 'Date', minWidth: 170 },
    ];

    const adminRows = adminsList.map((admin) => {
        const date = new Date(admin.date);
        const dateString = date.toString() !== "Invalid Date" ? date.toISOString().substring(0, 10) : "Invalid Date";
        return {
            name: admin.name,
            email: admin.email,
            //date: dateString,
            id: admin._id,
        };
    });
    return (
        <div style={{ marginTop: '50px', marginRight: '20px' }}>
            {loading ? (
                <div style={{ fontSize: '20px' }}>Loading...</div>
            ) : response ? (
                <div style={{ fontSize: '20px' }}>No Admins to Show Right Now</div>
            ) : (
                <>
                    <h3 style={{ fontSize: '30px', marginBottom: '40px' }}>Admins</h3>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        {Array.isArray(adminsList) && adminsList.length > 0 &&
                            <TableViewTemplate columns={adminColumns} rows={adminRows} />
                        }
                    </Paper>
                </>
            )}
        </div>

    )
}

export default Admin