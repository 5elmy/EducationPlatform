import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem,  Button } from "@nextui-org/react";
import { Avatar, Badge } from "@mui/material";
import { faker } from "@faker-js/faker";
import Style from "./Navbar.module.css"
import Logo from "./NavbarLogo";
import { LanguageIcon, NotificationsIcon } from "../../utils/icons/icon";
import { Link } from "react-router-dom";

    let token = localStorage.getItem("token")

export default function NavBar() {
    return (
        <>
            <Navbar maxWidth="full" className={`${Style.nav} py-2`} >

                <NavbarBrand className="flex gap-3   items-center" >
                    <Logo />
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
            </Navbar>
        </>
    )
}
