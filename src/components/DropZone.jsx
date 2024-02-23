import { useDropzone } from 'react-dropzone';

export const DropZone = () => {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ))

    return (
        <>  
            <div {...getRootProps({className: 'dropzone'})} className=" border-4 border-purple p-4">
                <input {...getInputProps()} className='bg-slate-50' />
                <p>Drag drop some files here, or click to select files</p>
            </div>
            <li>{files}</li>
        </>
    )
}