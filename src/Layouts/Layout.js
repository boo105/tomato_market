import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "../componetns/menu/Menu";
import IndexPage from "../Pages/IndexPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";


const Layout = () => {
    return (
        <Router>
            <Menu></Menu>
            <Switch>
                <Route exact path={'/'} component = {IndexPage}/>
                <Route exact path={'/signIn'} component = {LoginPage} />
                <Route exact path={'/signUp'} component = {RegisterPage} />
            </Switch>
        </Router>
    );
};

export default Layout;