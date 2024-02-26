import { Link } from "react-router-dom";
import  Button  from "../components/Elements/Button/IndexButton";
import IconPhoto from '../assets/icons8-photo-64.png';

const ButtonNavigate = () => {

    return (
        <div className="bg-slate-700 mt-6 mx-auto w-[70%] rounded-full">
            <div className="flex justify-between items-center gap-4 p-4">          
                <Button classname=" rounded-full active:bg-purple">
                    <Link to="/home">
                      <img src={IconPhoto} alt="" className='h-8'/>
                    </Link>
                </Button>
                <Button classname=" rounded-full active:bg-purple">
                    <Link to="/home">
                      <img src={IconPhoto} alt="" className='h-8'/>
                    </Link>
                </Button>
                <Button classname=" rounded-full active:bg-purple">
                    <Link to="/home">
                      <img src={IconPhoto} alt="" className='h-8'/>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default ButtonNavigate;