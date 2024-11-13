import icons from "../constant/iconsList";
const TechStack = () => {
  return (
    <div className="w-full mt-64 text-center  ">
      <h2 className="text-5xl font-bold">My Tech Stack</h2>
      <p className="text-3xl mt-5">
        Technologies i've been working with recently
      </p>
      <div className="grid mt-24 lg:grid-rows-2 lg:grid-cols-6 gap-16 justify-items-center items-center   ">
        {icons.map((icon) => (
          <div key={icon.name} className=" max-w-[131px] max-h-[131] flex mb-1 text-4xl  justify-center items-center ">
            <img
              
              key={icon.name}
              src={icon.Href}
              alt={icon.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
