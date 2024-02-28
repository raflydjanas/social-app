

const CardVideo = () => {
    return (
        <div className="max-w-[98%] rounded-lg mx-auto mt-[1.5rem] mb-[3rem] bg-slate-800">
            <div className="w-full flex flex-wrap h-[5rem]">
                <video autoPlay loop className="w-full pb-3 rounded-lg bg-cover bg-center bg-no-repeat">
                    <source src="/public/video/bg-lufy.mp4" type="video/mp4"></source>
                </video> 
                <video autoPlay loop className="w-full pb-3 rounded-lg bg-cover bg-center bg-no-repeat">
                    <source src="/public/video/bg-lufy.mp4" type="video/mp4"></source>
                </video> 
                <video autoPlay loop className="w-full pb-3 rounded-lg bg-cover bg-center bg-no-repeat">
                    <source src="/public/video/bg-lufy.mp4" type="video/mp4"></source>
                </video> 
                <video autoPlay loop className="w-full pb-[6rem] rounded-lg bg-cover bg-center bg-no-repeat">
                    <source src="/public/video/bg-lufy.mp4" type="video/mp4"></source>
                </video> 
            </div>
        </div>
    )
}

export default CardVideo;