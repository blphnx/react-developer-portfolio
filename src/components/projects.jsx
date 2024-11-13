import Card from './card.jsx'
import projectList from '../constant/projectList.js'
const Projects = () => {
 console.log(projectList)

  return (
      <div className={"mt-48 "}>
      <h1 className={"text-5xl text-center font-bold"}>Projects</h1>
        <p className={"text-3xl mt-5 text-center "}> Things i&apos;ve built so far</p>
          <div className={"mt-48 p-4 px-14 grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-12 justify-items-center "}>
              {projectList.map((item) => (
                  <Card item={item} key={item.id}/>
              ))}
          </div>

      </div>
  )
}

export default Projects