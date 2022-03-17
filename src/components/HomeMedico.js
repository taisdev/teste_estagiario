import React from 'react';
import medico from './../img/medico.png';
import './Home.css';

const HomeMedico = (props) => {
    const{
        handleLogout,
        nome
    } = props;
    return(
        <section className="home">    
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                <img src={medico} width="50" height="50" className="d-inline-block align-top" alt=""/>
                 {nome}
            </a>
            
                <button className="" onClick={handleLogout}>Sair</button>
            </nav>
            <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar medico">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-briefcase-medical"></i>
                  Consultas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-stethoscope"></i>
                  Exames
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-users"></i>
                  Pacientes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-clock"></i>
                  Horários
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-hospital-user"></i>
                  Plantões
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

export default HomeMedico;