const DescriptionAcound = () => {
   const description = localStorage.getItem('description')
   
   return (
      <div className='bg-slate-800 max-w-[80%] rounded-lg mx-auto mt-6'>
         <p className='text-base text-font p-3'>
           {description}
         </p>
      </div>
   );
};

export default DescriptionAcound;
