
import "../Skills/Skills.css";
import CarouselLib from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carousel = CarouselLib.default || CarouselLib;

function Skills ({theme}){
    const skills = [
        { id: 1, name: "HTML", desc: "Jau turiu dviejų metų patirtį su šiuo įrankiu" },
        { id: 2, name: "CSS", desc: "Jau turiu dviejų metų patirtį su šiuo įrankiu" },
        { id: 3, name: "JavaScript", desc: "Šiuo metu mokausi" },
        { id: 4, name: "React",  desc: "Šiuo metu mokausi" },
        { id: 5, name: "Bootstrap",  desc: "Naudoju projektuose" },
        { id: 6, name: "Python",  desc: "Mokausi mokykloje" },
        { id: 7, name: "Komunikabili",  desc: "Įgyta savanorystės metu" },
        { id: 8, name: "Draugiška",  desc: "Įgyta savanorystės metu" },
        { id: 9, name: "Komandiška",  desc: "Įgyta savanorystės metu" }

    ];
    const responsive = {
        largeDesktop: { breakpoint: { max: 1920, min: 1440 }, items: 4 },
        desktop:      { breakpoint: { max: 1440, min: 1224 }, items: 3 },
        smallDesktop: { breakpoint: { max: 1224, min: 960 },  items: 2 },
    };

    return(
        <>
            <div id="skills" >
                <h2 id="Igudziai">Įgūdžiai</h2>
                <Carousel responsive={responsive} centerMode={true} infinite={true}>
                    {skills.map(skill => 
                        <div key={skill.id} className="card">
                            <img className="Ikonos" src={`/Nuotraukos/${skill.name}-${theme}.png`} alt={skill.name}/>
                            <p className="subheading">{skill.name}</p>
                            <p className="text">{skill.desc}</p>
                                        
                        </div>
                    )} 
                </Carousel>
            </div>
        </>
    )
};

export default Skills;