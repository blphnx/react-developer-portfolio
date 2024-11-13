

const Card = (props) => {

    console.log(props)
    return (
        <div className={'w-[373px] h-[567px] rounded-[20px] bg-dark-card shadow-2xl'}>
            <img src={props.item.src} alt="Card" className={'h-[260px]'}/>
            <div className="p-4">
            <h3 className="text-[28px] font-semibold mt-4  text-center">Project Tile goes here</h3>
            <p className="mt-5 text-[18px] font-light">This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
            <p className="mt-5 "> <span className="font-bold">Tech stack</span> : HTML , JavaScript, SASS, React</p>
                <div className="flex justify-between m-5">
                    <a className="cursor-pointer">🔗Live Preview</a>
                    <a className="cursor-pointer"><img src="Icons/github.png" className="w-5 h-5 inline"/> View  Code</a>
                </div>
            </div>
        </div>
    );
}

export default Card;