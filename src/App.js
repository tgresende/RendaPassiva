import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import pages from "./pages";


function Home() {
  return <h2>Home</h2>;
}


function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <pages.Login />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
