import { useState } from "react";


export default function Login() {
    const [action, setAction] = useState('Sign up')  
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault(); 

        if(action === 'Login') {
            if(userEmail === '' && userPassword === '') {
                alert('please enter your email and password');
                return;
            }
        }
    }

    return (
        
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
            <h2 className="text-purple text-2xl mb-6 font-semibold text-center underline">{action}</h2>
            <div className="mb-5">
                {action === 'Login' ? <div></div>: <div>
                        <p className="text-purple pb-2">username</p>
                        <input type="text" placeholder="enter your username" 
                        className="py-3 px-12 bg-black text-white"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}/>
                    </div>}              
            </div>
            <div className="mb-5">
                <p className="text-purple pb-2">email</p>
                <input type="email" placeholder="enter your email"  className="py-3 px-12 bg-black text-white"
                 value={userEmail}
                 onChange={(e)=>setUserEmail(e.target.value)}/>
            </div>
            <div className="mb-5">
                <p className="text-purple pb-2">password</p>
                <input type="password" placeholder="enter your password" className="py-3 px-12 bg-black text-white"
                 value={userPassword}
                 onChange={(e)=>setUserPassword(e.target.value)}/>
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
