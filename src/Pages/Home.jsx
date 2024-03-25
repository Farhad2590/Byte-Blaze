
import Hero from "../Components/Hero/Hero";
import wav from '../assets/wave.svg'
const Home = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
           <Hero></Hero>
           <img className="absolute bottom-0 w-full" src={wav} alt="" />
        </div>
    );
};

export default Home;