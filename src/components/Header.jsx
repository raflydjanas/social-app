import { useNavigate } from "react-router-dom";
import { AiOutlineImport } from "react-icons/ai";
// import { useState } from "react";

export const Header = () => {
    const navigate = useNavigate();

  
    

    return (
        <header className="bg-transparent p-5 rounded border-b-2 border-purple fixed top-0 right-0 left-0">
                <nav className="flex justify-between items-center">
                    <h1 className='text-purple font-bold text-2xl'>My app</h1>
                    <div onClick={() => navigate('/editProfile')} className="flex gap-3  text-white hover:text-purple cursor-pointer">
                        <h5 className="text-base">edit your profile</h5>
                        <AiOutlineImport className="mt-1"/>
                    </div>
                </nav>
        </header>
    )
}