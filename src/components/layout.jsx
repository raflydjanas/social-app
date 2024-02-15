import Login from "./Login";
import '../index.css';


export default function Layout() {
    return (
        <div className="container flex flex-col items-center justify-center mt-3 bg-dark h-screen">
            <h1 className="bg-purple mb-7 py-2 px-7 rounded-lg font-bold text-2xl">My App</h1>
            <Login/>
        </div>
    )
} 