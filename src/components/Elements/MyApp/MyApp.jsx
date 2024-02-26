import { Link } from "react-router-dom";

const MyApp = () => {
    return (
        <h1 className='text-purple font-bold text-2xl cursor-pointer' >
            <Link to='/home'>My app</Link>
        </h1>
    )
}

export default MyApp;