import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

// function createData(UID, name, email, address, employee) {
//     return { UID, name, email, address, employee };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function DenseTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://20.46.127.30:5000/doc/Api/auth/register")
            .then((res) => {
                console.log(res);
                // setData(res.data);
                setData(data.filter((data) => data.id < 10));
            })
            .catch((err) => {
                console.log(err);
            });
    }, [data]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>UID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Employee</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((data) => (
                        <TableRow
                            key={data.fullname}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="data">
                                {data.fullname}
                            </TableCell>
                            {/* <TableCell align="right">{data.UID}</TableCell> */}
                            <TableCell align="right">{data.email}</TableCell>
                            {/* <TableCell align="right">{data.address}</TableCell>
                            <TableCell align="right">{data.employee}</TableCell> */}
                            <TableCell align="right">{data.password}</TableCell>
                            <TableCell align="right">{data.role_id}</TableCell>
                            <TableCell align="right">
                                <Button>
                                    Update
                                </Button>
                                <Button>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}