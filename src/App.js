import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Learn from "./components/Learn/Learn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Learn">
            <Learn />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
