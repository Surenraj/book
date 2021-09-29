import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "../src/components/Pages/Home";
import course from "../src/components/Pages/course_modules";
import compiler from "../src/components/Pages/Compiler";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/course-modules" exact component={course} />
        <Route path="/compiler" exact component={compiler} />
      </Switch>
    </Router>
  );
}

export default App;
