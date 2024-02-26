import  DropZone  from "../components/DropZone";
import  Headers  from "../components/Headers";
import  NavBar  from "../components/Fragments/NavBar";


const AploadPost = () => {

    return (
        <div className="bg-dark h-screen">
            <NavBar />
            <Headers />
            <div className='mt-[10rem] p-4 bg-slate-800 max-w-[90%] mx-auto mb-20'>
                <h1 className="text-2xl text-purple mb-3">Apload your post</h1>
                <input type="text" className="p-4 w-full bg-slate-700 text-white focus:outline-none focus:ring-purple focus:ring-1 focus:border-purple mb-10" placeholder="Title here"/>
               <DropZone />
            </div>
        </div>
    )
}

export default AploadPost;