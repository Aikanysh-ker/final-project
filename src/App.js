import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Mentors from "./pages/Mentors";
import Skills from "./pages/Skills";
import "./App.css";
import logo from "./img/logo.png";

function App() {
  return (
    <>
      <header className="header navbar sticky-top  flex-md-nowrap p-0 shadow">
        <a
          class="header-name navbar-brand col-md-3 col-lg-2 me-0 px-3"
          href="#"
        >
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </header>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-3 col-lg-2 sidebar  bg-light collapse d-md-block">
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  {/* <Link className="nav-item" to="/news">
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
                  </Link> */}
                  <Link className="btn btn-nav" to="/mentors">
                    Mentors
                  </Link>
                  <Link className="btn btn-nav " to="/skills">
                    Skills
                  </Link>
                  {/* <Link className="nav-item" to="/google-forms">
                    Google Forms
                  </Link>
                  <Link className="nav-item" to="/reports">
                    Reports
                  </Link> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <Switch>
          {/* <Route path="/news" component={News}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/partners" component={Partners}></Route>
          <Route path="/teammembers" component={TeamMembers}></Route>
          <Route path="/supervisors" component={Supervisors}></Route> */}
          <Route path="/mentors" component={Mentors}></Route>
          <Route path="/skills" component={Skills}></Route>
          {/* <Route path="/google-forms" component={GoogleForms}></Route>
          <Route path="/reports" component={Reports}></Route> */}
        </Switch>
      </Router>
    </>
  );
}
export default App;
