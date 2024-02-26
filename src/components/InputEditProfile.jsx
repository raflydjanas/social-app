// import axios from "axios";
// import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import FormInput from '../components/Elements/Input/FormInput';
import Button from './Elements/Button/IndexButton';

 const InputEditProfile = () => {

    const history = useNavigate();
    const InputEditProfile = async (e) => {
        e.preventDefault()

        const name = e.target.username.value;
        // const title = e.target.title.value;
        history(`/home/${name}`);
       

        alert('success to edit profile')
    }
    

    return (
        <form onSubmit={InputEditProfile}>
            <div className='flex flex-col mb-4 '>
                <h1 className='mb-3 text-2xl text-white'>Edit Profile</h1>
                <FormInput
                    name="username"
                    type="text"
                    placeholder="Update your name"/>
                <FormInput 
                    name="title" 
                    type="text" 
                    placeholder="update your status"/>
                <textarea name='description' placeholder="description your profile" className='mb-4 w-full min-h-36 p-3 text-lg bg-dark text-white focus:outline-none focus:ring-purple focus:ring-1 focus:border-purple'></textarea>
            </div>
            <div className='flex flex-col '>
                <h1 className='mb-3 text-2xl text-white'>Edit Eccount</h1>
                <FormInput 
                    name="email"
                    type="email"
                    placeholder="Update your email"/>
                <FormInput
                    name="password"
                    type="password"
                    placeholder="Update your password"/>
                <div className="flex gap-6 py-2">
                    <Button classname='bg-purple text-white rounded-2xl px-4 hover:bg-slate-500'>
                        Cancel
                    </Button>
                    <Button classname='bg-purple text-white rounded-2xl px-4 hover:bg-slate-500' type="submit">
                        Save
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default InputEditProfile;