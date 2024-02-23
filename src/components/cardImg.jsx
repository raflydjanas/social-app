
export const CardImg = () => {
    return (
        
        <div className="bg-slate-300 max-w-[80%] rounded-lg mx-auto mt-20">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="grid gap-4">
             <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
            </div>
             <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
            </div>
             <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
            </div>
             <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
            </div>
             </div>
           </div>
        </div>
    )
}