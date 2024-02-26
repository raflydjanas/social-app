import  ImageProfile  from "./ImageProfile";

const DescriptionProfile = ({ name }) => {
    // const email = localStorage.getItem('email');

    return (
        <>
            <ImageProfile />
                <div className="ml-[5.5rem] pt-5">    
                    <div className="text-center text-md text-white ml-10">
                        {name}
                    </div>
                    <p className="text-base text-center text-font pt-1 pl-[3rem]">
                        apalah
                    </p>
                </div>
        </>
    
    )
}

export default DescriptionProfile;