import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Leaderboard from './Leaderboard';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
       <Route path="/leaderboard" component={Leaderboard} />
       <Route path="*" component={Leaderboard} />
   </Route>
 </Router>
);
export default Routes;