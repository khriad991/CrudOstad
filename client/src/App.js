import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReadPage from "./Page/ReadPage";
import createPage from "./Page/CreatePage";
import updatePage from "./Page/UpdatePage";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" component={ReadPage}/>
                        <Route exact path="/create" component={createPage}/>
                        <Route exact path="/update" component={updatePage}/>
                    </Routes>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;