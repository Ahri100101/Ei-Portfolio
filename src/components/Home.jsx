import Ariz from "../assets/Ariz-Pic.png"

const Home = () => {
    return (
        <div className="p-5">
            <div className="text-center text-2xl font-font1 text-white font-bold">
                <p>HOME</p>
            </div>
            <div className="flex justify-center items-center py-5">
                <img src={Ariz} alt="Ariz Ann's Photo" className="w-80 h-auto" />
            </div>
            <div className="flex flex-col text-center">
                <p className="text-2xl font-font1 text-white font-bold">WELCOME! My name is</p>
                <p className="text-6xl font-font2 text-light py-3">Ariz Ann C. Salazar</p>
                <p className="text-sm font-font1 text-white font-bold">UI/UX/Graphic Designer and Frontend Developer</p>
            </div>
            <div className="text-center font-font1 text-white font-bold py-5">
                <button className="bg-gradient-to-b from-light to-dark rounded-full px-5 py-1">View Curriculum Vitae</button>
            </div>
        </div>
    )
}

export default Home;