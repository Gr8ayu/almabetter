import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import leaderboard from './Leaderboard';
// import ScoreForm from './ScoreForm';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Leaderboard from './Leaderboard';
import AddScore from './AddScore';
// import Routes from './routes';


const Routing = () => {
  return(
    <Router>
      
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/addscore" component={AddScore} />
      </Switch>
      
    </Router>
  )
}



ReactDOM.render(
  <React.StrictMode>
     <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
