import { Link } from "react-router-dom";
import { AiOutlineImport } from "react-icons/ai";
import  MyApp  from "../Elements/MyApp/MyApp";
// import { useState } from "react";

const NavBar = () => {

    return (
        <header className="bg-dark p-5 rounded border-b-2 border-purple fixed top-0 right-0 left-0 ">
            <nav className="flex justify-between items-center ">
                <MyApp />
                <div className="flex gap-3 text-white hover:text-purple cursor-pointer">
                    <Link to='/editProfile' className="text-base">
                         edit your profile
                    </Link>
                    <AiOutlineImport className="mt-1"/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;