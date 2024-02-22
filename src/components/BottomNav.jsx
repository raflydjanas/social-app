import { CiCirclePlus } from "react-icons/ci";

const BottomNav = () => {
    return (

        <div className="flex justify-center items-center w-full bg-slate-500 p-4 fixed bottom-0 right-0 left-0 rounded-xl">
            <CiCirclePlus className="text-purple text-4xl hover:text-slate-500 font-bold "/>
        </div>
    )
}

export default BottomNav;