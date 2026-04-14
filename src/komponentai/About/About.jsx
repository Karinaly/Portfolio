import "../About/About.css"


function About(){
    return(
        <>
            <div id="about">
                <div className="con1">
                    <img id="image" src="/Nuotraukos/mazesne.jpg" alt="Mano fotkė" />
                </div>
                
                <div className="con2">
                    <h2 id="apie" >Apie mane</h2>
                    <p className="bio">Sveiki! Esu Karina, man 17 metų. Du metus mokiausi vartotojo sąsajų projektavimo (HTML, CSS, JavaScript) „Techin“ mokymosi centre. Mokykloje įgijau Python programavimo ir kitų IT pagrindų žinių. Per savanorystes išmokau dirbti komandoje ir ugdžiau komunikacijos įgūdžius. Esu kūrybinga, smalsi ir mėgstu ieškoti inovatyvių sprendimų.</p>
                    <div>
                        <a href="https://www.instagram.com/kari_naly_/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src="/Nuotraukos/instagram.png" alt="Instagram" />
                        </a>
                        <a href="https://www.facebook.com/karina.Sutoviciute" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src="/Nuotraukos/kvad.png" alt="Facebook" />
                        </a>
                        
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;