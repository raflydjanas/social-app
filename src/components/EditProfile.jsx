import BgIcons from '../assets/icons8-photo-64.png';
import { useNavigate } from "react-router-dom";
import { AiOutlineImport } from "react-icons/ai";
import { ImageEditProfile } from './ImageEditProfile';
import { InputEditProfile } from './InputEditProfile';
import { InputEditAccount } from './InputEditAccount';
import BottomNav from './BottomNav';


export const EditProfile = () => {
    const naivigate = useNavigate();

    return (
        <>
          <header className="bg-transparent p-5 rounded border-b-2 border-purple fixed top-0 right-0 left-0">
                <nav className="flex justify-between items-center">
                    <h1 className='text-purple font-bold text-2xl'>My app</h1>
                    <div onClick={() => naivigate('/home')} className="flex gap-3  text-white hover:text-purple cursor-pointer">
                        <h5 className="text-base">back to home</h5>
                        <AiOutlineImport className="mt-1"/>
                    </div>
                </nav>
            </header>
            <div className="rounded-t-lg mt-[4.8rem] w-full h-44 object-cover bg-slate-700">
                <img src={BgIcons} alt="baground" className="pt-10 mx-auto " />
            </div>
            <div className='relative mt-[24rem]'>
                <ImageEditProfile className=''/> 
            </div>
                <div className='mt-10 p-4 bg-slate-300 max-w-[90%] mx-auto mb-20'>
                    <InputEditProfile />
                    <InputEditAccount />     
                </div>  
           <BottomNav />
        </>
    )
}