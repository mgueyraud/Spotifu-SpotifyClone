import Aside from "./container/Aside";
import Player from "./container/Player";
import Main from "./container/Main";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Album from "./pages/Album";

function App() {
  return (
    <div className="appContainer">
      <Aside />
      <Main>
        <Switch>
          <Route path="/play" component={Album} exact />
          <Route path="/" component={Home} exact />
          {/*ERROR COMPONENT */}
        </Switch>
      </Main>
      <Player />
    </div>
  );
}

export default App;
