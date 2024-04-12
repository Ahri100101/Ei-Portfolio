import React from "react"
import Ariz from "../assets/Ariz-Home.png"

const Home = () => {
    return (
        <div className="p-5 pt-14 w-full h-screen" id="home">
            <div className="text-center text-xl font-font1 text-white font-bold
                            md:hidden">
                <p>HOME</p>
            </div>
            <div className="flex justify-center items-center py-4">
                <img src={Ariz} alt="Ariz Ann's Photo" className="w-80 h-auto" />
            </div>
            <div className="flex flex-col text-center">
                <p className="text-xl font-font1 text-white font-bold pb-2">WELCOME! My name is</p>
                <p className="text-6xl font-font2 text-transparent bg-clip-text bg-gradient-to-b from-light to-semi py-2">Ariz Ann C. Salazar</p>
                <p className="font-font1 text-white font-bold">UI/UX/Graphic Designer and Frontend Developer</p>
            </div>
            <div className="text-center font-font1 text-white font-bold py-5">
                <button className="text-lg bg-gradient-to-b from-light to-semi rounded-full px-5 py-1">View Curriculum Vitae</button>
            </div>
        </div>
    )
}

export default Home