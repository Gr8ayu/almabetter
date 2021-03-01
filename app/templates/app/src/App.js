import "./App.css";
import Button from "react-bootstrap/Button";
// import leaderboard from './Leaderboard';
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a href="https://www.almabetter.com/" target="_blank">
            <img src="https://s3.amazonaws.com/thinkific-import/348209/IKsWBsZXSpSGIaIKs5mi_LogoNoBG_png"></img>
          </a>
        </div>
        <div>
          <Link to="/leaderboard">
            <Button variant="primary">LeaderBoard</Button>{" "}
          </Link>
          <Link to="/addscore">
            <Button variant="secondary">Add Marks</Button>{" "}

          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
