import Component from '../Component.js';
import Header from '../header/Header.js';
import SettingsBar from '../settings/Settings.js';
import Card from '../cards/Card.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        const headerContainer = dom.querySelector('#header-container');
        headerContainer.appendChild(headerDOM);

        const settingsBar = new SettingsBar();
        const settingsBarDOM = settingsBar.renderDOM();
        const settingsContainer = dom.querySelector('#settings-container');
        settingsContainer.appendChild(settingsBarDOM);

        const card = new Card({ number: 10 });
        const cardDOM = card.renderDOM();
        const cardsContainer = dom.querySelector('#cards-container');
        cardsContainer.appendChild(cardDOM);

    }
    renderHTML() {
        return /*html*/`
        <div>
             <div id="header-container">
                <!-- header -->
                </div>
                <div id="settings-container">
                <!-- settings -->
                </div>
                <div id="cards-container">
                <!-- cards -->
                </div>
            </div>
        `;
    }
}

export default App;