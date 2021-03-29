import logo from './assets/img/logo-white.svg';
import './monede.css';

function Monede() {
    return (
        <div className="monede">
            <header className="monede-header centered">
                <img src={logo} className="monede-logo" alt="logo"/>
                <p>A cryptocurrency trends aggregator</p>
            </header>
            <div className="monede-footer centered">
            </div>
        </div>
    );
}

export default Monede;
