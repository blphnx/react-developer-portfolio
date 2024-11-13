import SocialMediaIcons from "./socialMediaIcons.jsx";
import NavList from "./navList.jsx";

const Header = () => {
    return (
        <header className="lg:flex items-center text-xs
     lg:text-lg justify-between  ">
            <div>
                <h1 className=" text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:scale-150 transition-all hover:bg-gradient-to-l duration-1000  animate-gradient-x text-transparent bg-clip-text">
                    Bluephnx
                </h1>

            </div>
            <NavList showIcons={true} textSize={"text-2xl"} />
        </header>
    );
};

export default Header;
