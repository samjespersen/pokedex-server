import Component from '../Component.js';

class SettingsBar extends Component {
    renderHTML() {
        return /*html*/`
            <div id="settings">
                <div class="settings-container">
                    <div id="search"><h2>Search</h2>
                        <div
                            class="search-controls"><input
                                type="text"><input
                                type="number"></div>
                    </div></div>
                <div class="settings-container"> <div id="sort"><h2>Sort</h2><div
                            class="search-controls"><input type="text"><input
                                type="number"></div></div></div>
            </div>
        `;
    }
}

export default SettingsBar;