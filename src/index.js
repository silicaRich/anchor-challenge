import React, {Component} from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import ReactDOM from "react-dom";
import Player from '../src/components/player/player'
import { MainWrapper, Nav, Logo } from './index.styles'

class App extends Component {
    render() {
        return (
            <MainWrapper>
                <Nav>
                    <Link to='/'><Logo/></Link>
                </Nav>
                <Switch>
                    <Route exact path='/' component={Player}/>
                </Switch>

            </MainWrapper>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById("app"));