import { useState } from "react";
import axios from 'axios';


export default function Login() {
    const [action, setAction] = useState('Sign up') ; 
    const [dataUser, setDataUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setDataUser({...dataUser, [e.target.name]: e.target.value });

        console.log(dataUser);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const baseurl = 'https://documenter.getpostman.com/view/16770115/2sA2r6ZQrt'

            let url = `${baseurl}/auth/login`;
            let paylod = {
                username: dataUser.username,
                email: dataUser.email,
                password: dataUser.password
            }

            const ress = await axios.post(url, paylod);
            console.log(ress.data);

        } catch (err) {
            console.log(err);
        }

    } 

    return (
        
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
            <h2 className="text-purple text-2xl mb-6 font-semibold text-center underline">{action}</h2>
            <div className="mb-5">
                {action === 'Login' ? <div></div> : <div>
                        <p className="text-purple pb-2">username</p>
                        <input type="text" placeholder="enter your username" 
                        className="py-3 px-12 bg-black text-white"
                        value={dataUser.username}
                        onChange={handleChange}
                        name='username'/>
                    </div>}              
            </div>
            <div className="mb-5">
                <p className="text-purple pb-2">email</p>
                <input type="email" placeholder="enter your email"  className="py-3 px-12 bg-black text-white"
                 value={dataUser.email}
                 onChange={handleChange}
                 name='email'/>
            </div>
            <div className="mb-5">
                <p className="text-purple pb-2">password</p>
                <input type="password" placeholder="enter your password" className="py-3 px-12 bg-black text-white"
                value={dataUser.password}
                onChange={handleChange}
                name='password'/>
            </div>   
            <div className="mt-7 flex items-center justify-around">
                <button className={ action === 'Login' ? 'bg-gray-500 py-2 px-7 rounded-2xl' : 'bg-purple py-2 px-7 rounded-2xl' } onClick={() => {setAction('Sign up')}} > Sign UP </button>
                <button className={ action === 'Sign up' ? 'bg-gray-500 py-2 px-7 rounded-2xl' : 'bg-purple py-2 px-7 rounded-2xl' } onClick={() => {setAction('Login')}}> Login </button>
            </div> 
        </div>
      </form>
    </div>
    </>
    )
}
