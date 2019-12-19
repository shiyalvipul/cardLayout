import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CardLayout from './modules/homePage/components/cardLayout';
import DetailsPage from './modules/detailsPage/DetailsPage';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
        <Switch>
          <Route exact path="/" component={CardLayout} />
          <Route exact path="/details-page" component={DetailsPage} />
        </Switch>
      </Fragment>
  </BrowserRouter>
)

export default Routes;