import React, { useContext } from 'react'
import "./style.css"
import { ChartsIcon, HomeIcon, ProfileIcon, SettingsIcon, SignOutIcon } from '../../utils/icons/icon'
import { GraduationCap, Phone } from 'phosphor-react'
import { Link, Outlet } from 'react-router-dom'
import { toggleIcon } from '../../Redux/slice/Toggle.slice'
import { useDispatch } from 'react-redux'
import { toggleSideNav } from '../../Context/toggleSideNav'

export default function SideNav() {
      let {toggleButton , setToggleButton} = useContext(toggleSideNav)
  // let dispatch = useDispatch()
  console.log({toggleButton});
  return (
          
      <div className='h-screen bg-main  w-[250px] py-5 flex flex-col justify-between items-center  fixed z-10 left-0 bottom-0 top-0  '>
        <div>
        <div className='flex justify-start gap-12 items-center '><i onClick={()=>{setToggleButton(!toggleButton)}} className="fa-solid fa-bars text-[#57007B]"></i></div>
        <div className=' flex flex-col gap-5 mt-5'>
            <Link to={"/dashboard"} className='flex gap-5 items-center mt-5'> <HomeIcon/> <span className='element '>Dashboard</span></Link>
            <Link to={"/courses"} className='flex gap-5 items-center mt-5'> <GraduationCap size={14} color='#57007B' /> <span className='element '>Courses</span></Link>
            <Link to={"/profile"} className='flex gap-5 items-center mt-5'> <ProfileIcon/> <span className='element '>Profile</span></Link>
            <Link to={"/settings"}   className='flex gap-5 items-center mt-5'> <SettingsIcon/> <span className='element '>Settings</span></Link>
            <Link to={"/contact"}  className='flex gap-5 items-center mt-5'> <Phone color='#57007B' size={14} /> <span className='element '>Contacts</span></Link>
           
            
        </div>
        </div>
            <div className='flex gap-5 items-center mt-5'> <SignOutIcon/> <span className='element'>Sign Out</span></div>
      
    </div>
    
  )
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';

// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Button } from '@nextui-org/react';

// export default function SideNav() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {['left'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button className='bg-transparent' isIconOnly onClick={toggleDrawer(anchor, true)}><i  className="fa-solid fa-bars"></i></Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }



