import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";

import CreateParameter from "./components/createParameter";
import ReadParameter from "./components/readParameter";
import UpdateParameter from "./components/updateParameter";
import Critery from "./components/critery";
import ListAll from "./components/listAll";


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from "./Menu/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route>
          <div className="main">
            <h2 className="main-header">Sistema de Cadastros de Coleta</h2>
            <div>
              <Route exact path="/create" component={Create} />
            </div>

            <div style={{ marginTop: 20 }}>
              <Route exact path="/read" component={Read} />
            </div>

            <Route path="/update" component={Update} />

            <div>
              <Route
                exact
                path="/createParameter"
                component={CreateParameter}
              />
            </div>

            <div style={{ marginTop: 20 }}>
              <Route exact path="/readParameter" component={ReadParameter} />
            </div>

            <Route path="/updateParameter" component={UpdateParameter} />

            <div style={{ marginTop: 20 }}>
              <Route exact path="/listAll" component={ListAll} />
            </div>

            <div style={{ marginTop: 20 }}>
              <Route exact path="/critery" component={Critery} />
            </div>
            
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
