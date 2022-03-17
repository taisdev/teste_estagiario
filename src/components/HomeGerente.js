import React from 'react';
import gerente from './../img/gerente.png';
import './Home.css';

const HomeGerente = (props) => {
    const{
        handleLogout,
        nome,
    } = props;
    return(
        <section className="home">    
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                <img src={gerente} width="50" height="50" className="d-inline-block align-top" alt=""/>
                {nome}
            </a>            
                <button className="" onClick={handleLogout}>Sair</button>
            </nav>
            <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar gerente">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-users"></i>
                  Clientes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-file"></i>
                  Relatórios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-handshake"></i>
                  Integrações
                </a>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Relatórios salvos</span>
              <a className="d-flex align-items-center text-muted" href="#">
             
              </a>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-calendar-day"></i>
                  Neste mês
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-calendar-star"></i>
                  Último trimestre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-thumbs-up"></i>
                  Engajamento social
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-dollar-sign"></i>
                  Vendas anual
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

export default HomeGerente;