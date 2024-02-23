import { useNavigate } from "react-router-dom";

export const MyApp = () => {
    const navigate = useNavigate();

    return <h1 className='text-purple font-bold text-2xl cursor-pointer' onClick={() => navigate('/home')}>My app</h1>
}