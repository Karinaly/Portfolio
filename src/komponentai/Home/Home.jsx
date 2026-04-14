import './Home.css';

function Home (){
    return(
        <>
            <div id="home">
                <div className='centrastx'>
                    <h1 >Sveiki atvykę į mano</h1>
                    <p id='fancy'>portfolio.</p>
                </div>
                <a  href="#about" className='arrow'>
                    <img src="/Nuotraukos/Arrow.png" alt="arrow"  />
                </a>
            </div>
        </>
    )
};
export default Home;