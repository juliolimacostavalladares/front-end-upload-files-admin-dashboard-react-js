import React from 'react';

import Header from '../../components/Header';

// import { Container } from './styles';

function Dashboard() {
  return (
      <>
        <Header/>
         <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>
          <h2>Olá, Usuário</h2>
        </main>
      </>

  );
}

export default Dashboard;