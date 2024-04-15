import React from "react";

const Skills = () => {
    const skills = [
        { skill: 'Attention to Details',  },
        { skill: 'Adaptive', },
        { skill: 'Collaboration', },
        { skill: 'Communication', },
        { skill: 'Fast Learner', },
        { skill: 'Flexible', },
        { skill: 'Leader', },
        { skill: 'Teamwork', },
        { skill: 'Time Management', },
        { skill: 'Willingness to Learn', },
    ];

    const software = [
        { skill: 'Canva', },
        { skill: 'Figma', },
        { skill: 'GitHub', },
        { skill: 'VS Code', },
        { skill: 'Word', },
        { skill: 'Powerpoint', },
        { skill: 'Excel', },
        { skill: 'Outlook', },
    ];

    const frontLanguage = [
        { skill: 'HTML', },
        { skill: 'Vanilla CSS', },
        { skill: 'Tailwind CSS', },
        { skill: 'React JS', },
        { skill: 'UI/UX', },
    ];

    const backLanguage = [
        { skill: 'C++', },
        { skill: 'PHP', },
        { skill: 'Python', },
    ];

    const renderSkillList = (skills) => {
        return (
            <div className="flex flex-wrap justify-center gap-x-5 text-white w-full md:justify-start">
                {skills.map((item, index) => (
                    <div key={index} className="bg-gradient-to-b from-zinc-700 to-dark border-[1px] w-[10rem] h-auto p-2 rounded-xl mb-3">
                        <p className="font-bold text-sm text-center">{item.skill}</p>
                    </div>
                ))}
            </div>
        );
    };

    const renderLanguage = (lang) => {
        return (
            <div className="flex flex-wrap justify-center gap-x-5 text-white w-full md:justify-start">
                {lang.map((item, index) => (
                    <div key={index} className="bg-gradient-to-b from-zinc-700 to-dark border-[1px] w-[7rem] h-auto p-2 rounded-xl mb-3">
                        <p className="font-bold text-sm text-center">{item.skill}</p>
                    </div>
                ))}
            </div>
        )
    };

    return (
        <div className="p-5 pt-14 w-full h-auto" id="skills">
            <div className="text-center text-2xl font-font1 text-light font-bold md:hidden">
                <p>SKILLS</p>
            </div>
            <div className="flex flex-col text-justify font-font1 text-white">
                <p className="font-bold text-xl py-2">TRANSFERABLE SKILLS</p>
            </div>
            {renderSkillList(skills)}
            <div className="flex flex-col text-justify font-font1 text-white">
                <p className="font-bold text-xl py-2">SOFTWARE</p>
            </div>
            {renderLanguage(software)}
            <div className="flex flex-col text-justify font-font1 text-white">
                <p className="font-bold text-xl py-2">FRONT-END DEVELOPMENT</p>
            </div>
            {renderLanguage(frontLanguage)}
            <div className="flex flex-col text-justify font-font1 text-white">
                <p className="font-bold text-xl py-2">BACK-END DEVELOPMENT</p>
            </div>
            {renderLanguage(backLanguage)}
        </div>
    );
};

export default Skills;
