import React from 'react';
import { Provider } from 'react-redux';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import HomoPage from './modules/homePage/components/cardLayout';
import store from './store';
import Routes from './Routes';

function App() {
  return (
    <Provider store= {store} >
      <div>
        {/* <HomoPage /> */}
        <Routes />

      </div>
    </Provider>
     
  );
}

export default App;
