import "bootstrap/dist/css/bootstrap.min.css";
import "./monede.css";
import React from "react";
import MonedeNavbar from "./components/navbar";
import Main from "./components/main";


class Monede extends React.Component {
    render() {
        return (
            <div id="monede">
                <div id="monedeBody">
                    <MonedeNavbar/>
                    <Main/>
                </div>
            </div>
        )
    }
}

export default Monede;


