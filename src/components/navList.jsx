
import SocialMediaIcons from "./socialMediaIcons.jsx";

const NavList = ({showIcons,textSize}) => {
    return (
        <nav className=" flex flex-col  lg:flex-row">
            <div className="   ">
                <ul className={`flex flex-col lg:flex-row text-center ${textSize} space-x-16 mr-16`}>
                    <li className="content-center  cursor-pointer">Home</li>
                    <li className="content-center cursor-pointer">About</li>
                    <li className="content-center cursor-pointer">Tech stack</li>
                    <li className="content-center cursor-pointer">Projects</li>
                    <li className="content-center cursor-pointer">Contacts</li>
                </ul>
            </div>

            {showIcons &&  <SocialMediaIcons/>}
        </nav>
    );
};

export default NavList;