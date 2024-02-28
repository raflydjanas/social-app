import { useDropzone } from 'react-dropzone';

const DropZone = () => {
   const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
   const files = acceptedFiles.map((file) => (
      <li key={file.path}>
         {file.path} - {file.size} bytes
      </li>
   ));

   return (
      <>
         <div
            {...getRootProps({ className: 'dropzone' })}
            className=' border-4 border-purple p-4'
         >
            <input {...getInputProps()} className='bg-slate-700' />
            <p className='text-white'>
               Drag drop some files here, or click to select files
            </p>
         </div>
         <li>{files}</li>
      </>
   );
};

export default DropZone;
