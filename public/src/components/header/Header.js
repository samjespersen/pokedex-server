import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
                <div id='main-header'>
                    <div id='logo'><img src="./assets/pokeball.png"
                            alt="pokeball"></div>
                    <div><h1>The PokeDex</h1></div>
                </div>
        `;
    }
}

export default Header;