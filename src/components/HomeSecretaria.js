import React from 'react';
import secretaria from './../img/secretaria.png';
import './Home.css';

const HomeSecretaria = (props) => {
    const{
        handleLogout,
        nome
    } = props;
    return(
        <section className="home">    
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                <img src={secretaria} width="50" height="50" className="d-inline-block align-top" alt=""/>
                {nome}
            </a>
                <button className="" onClick={handleLogout}>Sair</button>
            </nav>
            <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar secretaria">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-calendar-day"></i>
                  Agendar Consultas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-calendar-check"></i>
                  Agendar Exames
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-calendar-plus"></i>
                  Cadastrar Pacientes
                </a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        </div>
        </section>
        
    )
}

export default HomeSecretaria;