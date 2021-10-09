import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "../componetns/menu/Menu";
import IndexPage from "../Pages/IndexPage";
import LoginPage from "../Pages/LoginPage";


const Layout = () => {
    return (
        <Router>
            <Menu></Menu>
            <Switch>
                <Route exact path={'/'} component = {IndexPage}/>
                <Route exact path={'/signIn'} component = {LoginPage} />
            </Switch>
        </Router>
    );
};

export default Layout;