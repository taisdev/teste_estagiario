import React from 'react';

const Home = (props) => {
    const{
        handleLogout,
        nome,
        tipoUsuario
    } = props;
    return(
        <section className="home">
            <nav className={tipoUsuario}>
                <h2>Bem vindo {nome} </h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Home;