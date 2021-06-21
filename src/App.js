import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Reports from "./components/Reports";
import News from "./components/News";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import Mentors from "./components/Mentors";
import Supervisors from "./components/Supervisors";
import GoogleForms from "./components/GoogleForms";
import TeamMembers from "./components/TeamMembers";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <Link className="nav-item" to="/news">
                    News
                  </Link>
                  <Link className="nav-item" to="/projects">
                    Projects
                  </Link>
                  <Link className="nav-item" to="/partners">
                    Partners
                  </Link>
                  <Link className="nav-item" to="teammembers">
                    Team Members
                  </Link>
                  <Link className="nav-item" to="/supervisors">
                    Supervisors
                  </Link>
                  <Link className="nav-item" to="/mentors">
                    Mentors
                  </Link>
                  <Link className="nav-item" to="/skills">
                    Skills
                  </Link>
                  <Link className="nav-item" to="/google-forms">
                    Google Forms
                  </Link>
                  <Link className="nav-item" to="/reports">
                    Reports
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <Switch>
          <Route path="/news" component={News}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/partners" component={Partners}></Route>
          <Route path="/teammembers" component={TeamMembers}></Route>
          <Route path="/supervisors" component={Supervisors}></Route>
          <Route path="/mentors" component={Mentors}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route path="/google-forms" component={GoogleForms}></Route>
          <Route path="/reports" component={Reports}></Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
