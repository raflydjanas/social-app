import { Link } from 'react-router-dom';

const AuthLayouth = ({ title, children, type }) => {
   return (
      <div className='container flex flex-col items-center justify-center mt-3 bg-dark w-screen h-screen'>
         <h1 className='bg-purple mb-7 py-2 px-7 rounded-lg font-bold text-2xl'>
            My App
         </h1>
         <div className='w-full max-w-xs'>
            <div className='flex flex-col'>
               <h className='text-3xl text-purple text-center font-bold mb-2'>
                  {title}
               </h>
               <p className='font-medium text-font mb-5 text-center'>
                  Welcome please enter your details
               </p>
            </div>
            {children}
            <p className='text-center py-5 text-font'>
               {type === 'login'
                  ? "Don't have an account? "
                  : 'Already have an account? '}
               {type === 'login' && (
                  <Link to='/register' className='text-purple font-bold'>
                     Sign up
                  </Link>
               )}
               {type === 'register' && (
                  <Link to='/' className='text-purple font-bold'>
                     Sign in
                  </Link>
               )}
            </p>
         </div>
      </div>
   );
};

export default AuthLayouth;
