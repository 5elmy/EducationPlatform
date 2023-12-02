import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuItem, NavbarMenu, NavbarMenuToggle, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Avatar, Badge } from "@mui/material";
import { faker } from "@faker-js/faker";
import Style from "./Navbar.module.css"
import Logo from "./NavbarLogo";
import { LanguageIcon, NotificationsIcon, NotificationsPage } from "../../utils/icons/icon";
import { HomeIcon, ProfileIcon, SettingsIcon, SignOutIcon } from '../../utils/icons/icon'
import { GraduationCap, Phone } from 'phosphor-react'
import { Link } from "react-router-dom";


let token = localStorage.getItem("token")

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        { name: "Dashboard", icon: <HomeIcon />, to: "/dashboard" },
        { name: "Courses", icon: <GraduationCap size={14} color='#57007B' />, to: "/courses" },
        { name: "Profile", icon: <ProfileIcon />, to: "/profile" },
        // { name: "Settings", icon:<SettingsIcon/> , to: "/settings" },
        { name: "Contacts", icon: <Phone color='#57007B' size={14} />, to: "/contact" },
        { name: "Sign Out", icon: <SignOutIcon />, to: "/" },
    ]

    return (
        <>
            <Navbar isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen} maxWidth="full" className={`${Style.nav} py-2`} >


                <NavbarBrand className="flex gap-3  items-center" >
                    {
                        token ? <NavbarMenuToggle className="text-[#57007B]  w-[40px] h-[40px]" aria-label={isMenuOpen ? "Close menu" : "Open menu"} /> : <Logo />
                    }
                    <span className="font-[400]  text-[#57007B] font-[Inspiration] text-[24px] " >E-Learning</span>
                </NavbarBrand>
                <NavbarContent justify="end">

                    {token ? <>
                        <NavbarItem>
                            <Badge color="secondary" size="small" >
                                

                                <Popover placement="bottom" showArrow={true}>
                                    <PopoverTrigger>
                                        <Button  className=" bg-transparent"><NotificationsIcon /></Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="px-5 py-6">
                                            <NotificationsPage/>
                                            <p style={{
                                                "color": "#344B67",
                                                "text-align": "center",
                                                "font-family": "ABeeZee",
                                                "font-size": "18px",
                                                "font-weight": "400",
                                                "line-height": "34px" 
                                            }}>No Notifications!</p>
                                        </div>
                                    </PopoverContent>
                                </Popover>

                            </Badge>
                        </NavbarItem>

                        <NavbarItem className="me-5">
                            <Badge >
                                <LanguageIcon />
                            </Badge>
                        </NavbarItem>

                        <NavbarItem>
                            <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                        </NavbarItem>

                    </> : <>
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
                <NavbarMenu className="md:w-[300px] w-[200px] " >
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem d className="mt-5" key={`${item.name}-${index}`}>
                            <Link
                                className="w-full "
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                to={item.to}
                                size="lg"
                            >
                                <div className="flex gap-5 items-center"> {item.icon} {item.name}</div>
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    )
}
