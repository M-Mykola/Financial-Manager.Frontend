import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import * as ReactRouterDOM from "react-router-dom";
const { Link } = ReactRouterDOM;

export default function ButtonAppBar() {
  return (
    <AppBar>
      <Toolbar className="AppBar">
        <Typography>
          {" "}
          <Link to={{ pathname: "/" }}>Income/Costs</Link>
        </Typography>
        <Button>
          <Link to={{ pathname: "/categories" }}>Categories</Link>
        </Button>
        <Button>
          <Link to={{ pathname: "/transactions" }}>Transactions</Link>
        </Button>
        <Button>
          <Link to={{ pathname: "/reportGenerator" }}>Report Generator</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
