import React, {FC} from 'react';
import {Switch, Route, Redirect} from 'react-router';
import {Helmet} from 'react-helmet';

import Timer from './containers/Timer';
import Home from './components/Home';
import Members from './containers/Members';

const title = 'やぱったのReact';

const App: FC = () => (
  <>
    <Helmet htmlAttributes={{lang: 'ja'}}>
      <title>{title}</title>
    </Helmet>
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:companyName/members" exact component={Members} />
        <Route path="/timer" component={Timer} />
        <Redirect to="/" />;
      </Switch>
    </div>
  </>
);

export default App;
