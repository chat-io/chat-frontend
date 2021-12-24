import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Chat from "./components/Chat/Chat";
import ProtectedRoute from "./components/Router/ProtectedRoute";

import styles from "./App.module.css";

//font-awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
library.add(faCaretDown);

function App() {
  return (
    <Switch>
      <div className={styles.App}>
        <ProtectedRoute path="/">
          <Chat />
        </ProtectedRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        {/* <Route render={() => <h1>404 page not found</h1>} /> */}
      </div>
    </Switch>
  );
}

export default App;
