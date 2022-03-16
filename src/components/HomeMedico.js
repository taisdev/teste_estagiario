import React from 'react';

const Home = ({ handleLogout }) => {
    return(
        <section>
            <nav>
                <h2>Bem vindo</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Home;