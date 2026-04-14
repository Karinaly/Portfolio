import '../Footer/footer.css'
function Footer(){
    return(
        <>
            <div id="contact">
                <div className='pagrindine'>
                    <div className='pirmas'>
                        <h2 id='kontaktai'>Kontaktai</h2>
                        <p className='info'>Email: karinasutoviciute@gmail.com</p>
                        <p className='info'>Phone: +37060344645</p>
                        <p className='info'>Instragram: kari_naly_</p>
                        <p className='info'>Facebook: Karina Sutovic</p>
                            
                    </div>
                    <div className='antras'>
                        <h2 id='thankyou'>
                            Ačiū, kad <br />
                            peržiūrėjote!
                        </h2>
                    </div>
                </div>
                
                <hr />
                
                <p id='rights'>© 2026 Karina Šutovičiūtė. All rights reserved.</p>
            </div>
        </>
    )
};

export default Footer;