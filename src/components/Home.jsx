import React from "react"
import Ariz from "../assets/Ariz-Home.png"

const Home = () => {
    return (
        <div className="p-5 pt-14 w-full h-auto" id="home">
            <div className="text-center text-2xl font-font1 text-light font-bold
                            md:hidden">
                <p>HOME</p>
            </div>
            <div className="flex justify-center items-center py-6">
                <img src={Ariz} alt="Ariz Ann's Photo" className="w-96 h-auto" />
            </div>
            <div className="flex flex-col text-center">
                <p className="text-xl font-font1 text-white font-bold pb-2">WELCOME! My name is</p>
                <p className="text-6xl font-font2 text-transparent bg-clip-text bg-gradient-to-b from-light to-semi py-3">Ariz Ann C. Salazar</p>
                <p className="text-lg font-font1 text-white font-sembold">UI/UX/Graphic Designer and Frontend Developer</p>
            </div>
            <div className="text-center font-font1 text-white font-bold pt-8">
                <button className="text-xl bg-gradient-to-b from-light to-semi rounded-full px-5 py-1">View Curriculum Vitae</button>
            </div>
        </div>
    )
}

export default Home