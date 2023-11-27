import { createContext, useState } from "react";


export let toggleSideNav= createContext(0)


export default function ToggleSideNavProvider({children}){

    const [toggleButton, setToggleButton] = useState(false)

    return <toggleSideNav.Provider value={{toggleButton , setToggleButton}}>
    {children}
</toggleSideNav.Provider>

}