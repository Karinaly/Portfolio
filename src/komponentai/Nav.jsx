function Nav (){
    return(
        <>
            <nav className="navbar navbar-expand-lg " >
                <div className="container-fluid p-0">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav justify-content-center w-100 ">
                        <a className="nav-item nav-link text-white active me-4" href="#home">Pagrindinis</a>
                        <a className="nav-item text-white nav-link me-4" href="#about">Apie mane</a>
                        <a className="nav-item nav-link text-white me-4" href="#skills">Įgūdžiai</a>
                        <a className="nav-item nav-link text-white me-4" href="#contact">Kontaktai</a>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;