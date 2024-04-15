import React, { useState, useEffect } from "react";
import ArizAbt from "../assets/Ariz-About.png";

const About = () => {
    const calculateAge = () => {
        const birthDate = new Date('2001-10-01');
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDiff = currentDate.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const [age, setAge] = useState(calculateAge());

    useEffect(() => {
        const interval = setInterval(() => {
            const newAge = calculateAge();
            setAge(newAge);
        }, 86400000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-5 pt-14 w-full h-auto" id="about">
            <div className="text-center text-2xl font-font1 text-light font-bold
                            md:hidden">
                <p>ABOUT</p>
            </div>
            <div className="flex justify-center items-center py-6">
                <img src={ArizAbt} alt="Ariz Ann's Photo" className="w-80 h-auto" />
            </div>
            <div className="flex flex-col text-justify font-font1 text-white">
                <p>Hello! My name is Ariz Ann C. Salazar. My family and friends call me Ei.
                    Presently, I am residing in Imus City, Cavite, Philippines. I am {age} years
                    old and a Bachelor of Science in Information Technology student at
                    Pamantasan ng Lungsod ng Maynila.</p>
                <br />
                <p>In my 4th year of college, 2nd semester, I have been a frontend developer and
                    UI/UX/Graphic Designer trainee at Monheim Distributors, Inc. for almost 4 months,
                    completing 486 hours of training.</p>
                <br />
                <p className="font-bold text-xl mb-2">IN SUMMARY</p>
            </div>
            <div className="w-[100%] flex font-font1 text-white">
                <div className="w-[25%] flex flex-col">
                    <p>Name:</p>
                    <p>Nickname:</p>
                    <p>Address:</p>
                    <p>Age:</p>
                    <p>Sex:</p>
                    <p>School:</p>
                    <p>Course:</p>
                    <p>Training:</p>
                    <p>Company:</p>
                </div>
                <div className="w-[75%] flex flex-col">
                    <p>Ariz Ann C. Salazar</p>
                    <p>Ei</p>
                    <p>Imus City, Cavite, Philippines</p>
                    <p>{age}</p>
                    <p>Female</p>
                    <p>Pamantasan ng Lungsod ng Maynila</p>
                    <p>(BSIT) B.S. in Information Technology</p>
                    <p>Frontend Dev & UI/UX/Graphic Designer</p>
                    <p>Monheim Distributors, Inc.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
