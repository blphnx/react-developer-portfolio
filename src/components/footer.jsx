import SocialMediaIcons from "./socialMediaIcons.jsx";
import NavList from "./navList.jsx";
const GradientText = ({text}) => {
    return <span className='font-bold bg-gradient-to-l from-green-400 to-blue-500 bg-clip-text text-transparent '>{text}</span>
}
const Footer = () => {
    return (
        <div className="mt-40">
            <div className="text-center flex justify-between">
                <div>
                    <h1 className=" text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:scale-150 transition-all hover:bg-gradient-to-l duration-1000  animate-gradient-x text-transparent bg-clip-text">
                        Bluephnx
                    </h1>
                </div>
                <div className="text-center flex justify-between gap-x-20">
                    <h4>0993333313141</h4>
                    <h4>info@example.com</h4>
                    <SocialMediaIcons/>
                </div>
            </div>
            <hr className="mt-10 border-[#42446E] border-[1.5px] opacity-30"/>
            <div className="text-center flex justify-between mt-10">
                <div>
                    <NavList showIcons={false} />
                </div>
                <div>
                    Designed and built by <GradientText text="Bluphnx"/>  with Love & Coffee
                </div>
            </div>
        </div>
    );
};

export default Footer;