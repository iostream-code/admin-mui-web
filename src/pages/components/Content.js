import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from './Table';
import Posts from './Posts';

export default function Content() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const submitForm = () => {
        ;
    }

    return (
        <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon color="inherit" sx={{ display: 'block' }} />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search by email address, phone number, or user UID"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { fontSize: 'default' },
                                }}
                                variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ mr: 1 }} onClick={handleClickOpen}>
                                Add user
                            </Button>
                            <Dialog
                                open={open}
                                onCLose={handleClose}
                                aria-labelledby="responsive-dialog-title"
                            >
                                <DialogTitle id="responsive-dialog-title">
                                    {"Tambah Wedding Organizer"}
                                </DialogTitle>
                                <DialogContent>
                                    {/* <DialogContentText>
                                        Let Google help apps determine location. This means sending anonymous
                                        location data to Google, even when no apps are running.
                                    </DialogContentText> */}
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25inch' },
                                        }}
                                        autoComplete="off"
                                    >
                                        <TextField
                                            autoFocus
                                            margin='dense'
                                            id='uid'
                                            label='User ID'
                                            type='text'
                                            fullwidth
                                            variant='standard'
                                        />
                                        <TextField
                                            autoFocus
                                            margin='dense'
                                            id='name'
                                            label='Name'
                                            type='text'
                                            fullwidth
                                            variant='standard'
                                        />
                                        <TextField
                                            autoFocus
                                            margin='dense'
                                            id='email'
                                            label='Email'
                                            type='email'
                                            fullwidth
                                            variant='standard'
                                        />
                                        <TextField
                                            autoFocus
                                            margin='dense'
                                            id='address'
                                            label='Address'
                                            type='text'
                                            fullwidth
                                            variant='standard'
                                        />
                                        <TextField
                                            autoFocus
                                            margin='dense'
                                            id='employee'
                                            label='Jumlah Karyawan'
                                            type='text'
                                            fullwidth
                                            variant='standard'
                                        />
                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Button onClick={submitForm} autoFocus>
                                        Add New
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Table />
            {/* <Posts /> */}
            {/* <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                No users for this project yet
            </Typography> */}
        </Paper>
    );
}