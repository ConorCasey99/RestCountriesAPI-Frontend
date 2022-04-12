import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import CountryDetailsPage from "./pages/countryDetails/CountryDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:name" component={CountryDetailsPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
