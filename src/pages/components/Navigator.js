import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
// import GroupsIcon from '@mui/icons-material/Groups';
import BarChartIcon from '@mui/icons-material/BarChart';

// const categories = [
//     {
//         id: 'Client List',
//         icon: <LogoutIcon />,
//         children: [
//             { id: 'Rasdhan WO', icon: <GroupsIcon />, active: true, },
//             { id: 'Dhimaz WO', icon: <GroupsIcon /> },
//             { id: 'Rahayu Wedding', icon: <GroupsIcon /> },
//         ],
//     },
// ];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props) {
    const { ...other } = props;

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/dashboard');
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    const handleAnalitycs = () => {
        navigate('/analitycs');
    }

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    Marriage Story
                </ListItem>
                {/* <ListItem sx={{ ...item, ...itemCategory }}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                </ListItem> */}
                {/* {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: '#101F33' }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton selected={active} sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))} */}
                <Box sx={{ bgcolor: '#101F33' }}>
                    <ListItem sx={{ py: 2, px: 3 }}>
                        <ListItemText sx={{ color: '#fff' }}>
                            Menu
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={item} onClick={handleHome}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>Dashboard</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={item} onClick={handleAnalitycs}>
                            <ListItemIcon>
                                <BarChartIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Analytics
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={item} onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Logout
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Divider sx={{ mt: 2 }} />
                </Box>
            </List>
        </Drawer >
    );
}