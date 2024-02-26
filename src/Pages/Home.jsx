import  NavBar  from "../components/Fragments/NavBar";
import  LayoutHome  from "../components/LayoutHome"; 
import { useParams } from "react-router-dom"; 

const Home = () => {
    const { name } = useParams();
    return (
        <>         
            <NavBar />
            <LayoutHome name={name} />
        </>
    )
}

export default Home;