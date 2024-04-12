import React, { useState } from "react";
import Logo from "../assets/Ariz-Logo.png"

const Nav = () => {
    let Links = [
        { name: "Home", link: "/#home" },
        { name: "About", link: "/#about" },
        { name: "Skills", link: "/#skills" },
        { name: "Designs", link: "/#designs" },
        { name: "Certificates", link: "/#certs" },
        { name: "Contact", link: "/#contact" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className="w-full fixed top-0 left-0">
            <div className="items-center justify-between bg-black px-5 py-4 
                            md:px-7 md:py-3 md:flex">
                <div className="flex items-center cursor-pointer">
                    <img src={Logo} alt="Ariz Logo" className="w-16" />
                </div>
                <div onClick={() => setOpen(!open)} className="text-light text-2xl right-5 absolute top-4 cursor-pointer
                              md:hidden">
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>
                <ul className={`absolute z-[-1] left-0 w-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg text-end pt-7 p-5 transition-all duration-500 ease-in ${open ? "top-10" : "top-[-500px]"}
                               md:flex md:items-center md:static md:z-auto md:w-auto md:bg-transparent md:p-0`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className="text-lg py-3 
                                                           md:ml-12 md:my-0 md:pt-0">
                                <a href={link.link} className="font-font1 font-medium text-white hover:text-mid duration-500">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav