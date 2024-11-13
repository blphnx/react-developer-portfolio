import React from "react";

const Hero = () => {
  return (
    <div className="my-48 lg:flex justify-between">
      <p className="text-6xl font-bold leading-[70px]">
        hi 👋, <br />
        My name is <br />
       <span className="font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Bluephnx</span>  <br />I build things for web
      </p>
      <div class="w-[360px] h-[360px] p-2.5 content-center  
       rounded-full bg-gradient-to-r
        from-green-400 to-blue-500 ">
      <img
        src="/profile.jpg"
        alt="profile"
        className=" rounded-full mx-auto  "
      />

      </div>

    </div>
  );
};

export default Hero;
