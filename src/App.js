import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Categories from "./Categories/categories";
import ButtonAppBar from "./Component/appBar";
import addEditCategories from "./Component/editCategories";
import AddNewCategories from "./Component/addNewCategories";
import Tranzactions from "./Categories/transactions";
import AddEditTranzactions from "./Component/addNewTranzactions";
import Error from "./Pages/error";
import Home from "./Pages/homePage";
import EditTranzaction from "./Component/editTransactions";
import ReportGenerator from "./Pages/report_generator";

function App() {
  return (
    <Router>
      <div className="App-header">
        <ButtonAppBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/editCategories" exact component={addEditCategories} />
          <Route path="/createCategories" exact component={AddNewCategories} />
          <Route
            path="/createTranzactions"
            exact
            component={AddEditTranzactions}
          />
          <Route path="/transactions" exact component={Tranzactions} />
          <Route path="/editTransactions" exact component={EditTranzaction} />
          <Route path="/reportGenerator" exact component={ReportGenerator} />
          <Route exact component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
