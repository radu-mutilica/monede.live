import {BrowserRouter} from 'react-router-dom';
import './index.css';
import Monede from "./monede";
import React from "react";
import ReactDOM from 'react-dom';

ReactDOM.render(
    (
        <BrowserRouter>
            <Monede/>
        </BrowserRouter>
    ), document.getElementById('root')
);
