import { useState } from 'react'
import './Navbar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import KeyIcon from '@mui/icons-material/Key';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const navigate = useNavigate();
  

  const navItems = [
    {label: 'Dashboard', icon: <HomeOutlinedIcon />, path: '/'},
    {label: 'Accounts', icon: <AssignmentIndOutlinedIcon />, path: '/'},
    {label: 'Brokers', icon: <GroupOutlinedIcon />},
    {label: 'Submissions', icon: <FileOpenOutlinedIcon />},
    {label: 'Organizations', icon: <ApartmentOutlinedIcon />},
    {label: 'Goal & Rules', icon: <FlagCircleIcon />},
    {label: 'Admin', icon: <KeyIcon />},
    {label: 'Admin', icon: <KeyIcon />},
    {label: 'Admin', icon: <KeyIcon />},
    {label: 'Admin', icon: <KeyIcon />},
    {label: 'Admin', icon: <KeyIcon />}
  ];
  

  return (
    <>
    <div className="main">
     <List className='navbar'>
        {navItems.map((item, index) => (
          <ListItem 
            key={index} 
            className={`nav-button ${activeItem === item.label ? 'active' : ''}`}
            sx={{textAlign: 'center'}}
            onClick={() => {
              setActiveItem(item.label);
              navigate(item.path);
            }}
          >
            <ListItemIcon 
              key={index}
              className={`icon ${activeItem === item.label ? 'active' : ''}`}
              sx={{ color: activeItem === item.label ? '#1976d2' : 'rgb(86, 139, 232)', minWidth:'5px'}}
            >{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
       <div className="pagination">
        <button className='pag-button'>
          <KeyboardBackspaceIcon sx={{ color: 'rgb(250, 250, 250)' }} />
        </button>
        <button className='pag-button'> 
          <EastIcon sx={{ color: 'rgb(250, 250, 250)'}} />
        </button>
      </div>
    </div>
    </>
  )
}

export default Navbar