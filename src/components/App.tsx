import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import Summary from './Summary';
import Country from './Country';

const Route: FC<RouteComponentProps & { component: FC<RouteComponentProps> }> =
  ({ path, component: Comp }) => <Comp path={path} />

const App: FC = () =>
  <Router>
    <Route path="/covid19-dashboard" component={Summary} />
    <Route path="/covid19-dashboard/country/:slug" component={Country} />
  </Router>

export default hot(App);
