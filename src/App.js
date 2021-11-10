import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Third from "./components/Third/Third";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Jobsss">
            <Third />
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
