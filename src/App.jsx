import { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import LearnMore from "./pages/LearnMore";
import Pricing from "./pages/Pricing";
import Locations from "./pages/Locations";
import BookNow from "./pages/BookNow";
function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/learnmore">
          <LearnMore />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/booknow">
          <BookNow />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
