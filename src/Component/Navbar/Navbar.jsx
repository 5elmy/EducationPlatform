import React, { useContext } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem,  Button, NavbarMenuItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import { Avatar, Badge } from "@mui/material";
import { faker } from "@faker-js/faker";
import Style from "./Navbar.module.css"
import Logo from "./NavbarLogo";
import { LanguageIcon, NotificationsIcon } from "../../utils/icons/icon";
import { Link } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import { toggleSideNav } from "../../Context/toggleSideNav";

    let token = localStorage.getItem("token")

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    let {toggleButton , setToggleButton} = useContext(toggleSideNav)


    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ];
  
    return (
        <>
            <Navbar  isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen} maxWidth="full" className={`${Style.nav} py-2`} >
            {/* <NavbarContent  justify="start">
       
      </NavbarContent> */}

                <NavbarBrand className="flex gap-3   items-center" >
                {/* <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} /> */}
                    {/* <SideNav/> */}
                    {toggleButton?   <Logo /> : <i onClick={()=>{setToggleButton(!toggleButton)}} className="fa-solid fa-bars text-[#57007B]"></i>}
                   
                    <span className="font-[400] text-inherit font-[Inspiration] text-[24px]" >E-Learning</span>
                </NavbarBrand>


                <NavbarContent justify="end">

                    {token ? <>
                        <NavbarItem>
                        <Badge badgeContent={"1"} color="secondary" size="small" >
                            <NotificationsIcon />

                        </Badge>
                    </NavbarItem>

                    <NavbarItem className="mx-3">
                        <Badge >
                            <LanguageIcon />
                        </Badge>
                    </NavbarItem>

                    <NavbarItem>
                        <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                    </NavbarItem> 
                    
                     </> :<>
                    <NavbarItem>
                        <Button className={`${Style.contact} rounded-[5px]`} style={{}} href="#" variant="flat">
                            
                           <Link to={"/login"}>Login</Link>

                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button className={`${Style.contact} rounded-[5px]`} style={{}} href="#" variant="flat">
                           <Link to={"/register"}>Sign Up</Link>
                        </Button>
                    </NavbarItem>
                    
                    
                    </>}

                </NavbarContent>
                {/* <NavbarMenu className="w-[300px] bg-red-500 " >
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="mt-5" key={`${item}-${index}`}>
            <Link
              className="w-full "
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
            </Navbar>
        </>
    )
}
