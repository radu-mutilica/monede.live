import logo from './logo-white200.png';
import './monede.css';

function Monede() {
    return (
        <div className="monede">
            <header className="monede-header centered">
                <img src={logo} className="monede-logo" alt="logo"/>
                <p>A cryptocurrency trends aggregator.</p>
            </header>
            <div className="monede-footer centered">
                {/*<a href={constants.website}>{constants.website}</a>*/}
            </div>
        </div>
    );
}


export default Monede;
