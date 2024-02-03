import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, NavLink, Outlet } from 'react-router-dom';


const drawerWidth = 240;

const arr = [
  {
    lable: "Dashboard",
    link: '/'
  },
  {
    lable: "OrderList",
    link: '/orderlist'
  },
  {
    lable: "OrderDetails",
    link: '/orderdetail'
  },
  {
    lable: "Customer",
    link: '/customer'
  },
  {
    lable: "Analytics",
    link: '/analytics'
  },
  {
    lable: "Reviews",
    link: '/reviews'
  },
  {
    lable: "Foods",
    link: '/food'
  },
  {
    lable: "FoodsDetails",
    link: '/fooddetail'
  },
  {
    lable: "CustomerDetails",
    link: '/customerdetail'
  },

  {
    lable: "Calender",
    link: '/calender'
  },

  {
    lable: "Chat",
    link: '/chat'
  },
  {
    lable: "Wallet",
    link: '/wallet'
  },


]

 const  Sidebar=()=> {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ 
        backgroundColor: 'green',
         zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
           Owais Raza
          </Typography>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {arr.map((text,i) => {

              const { link, lable } = text

              return (
                <ListItem key={i} disablePadding>


                  <ListItemButton>
     
                  <NavLink to={link}>
                 
                 
             

               
                <ListItemText primary={lable} />
         

             
                  </NavLink>
               
                  </ListItemButton>
                </ListItem>
              )

            }

            )}


          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet/>

      </Box>
    </Box>
  );
}
export {Sidebar}