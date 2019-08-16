import Component from '../Component.js';

class Card extends Component {

    renderHTML() {
        const stringToRender = this.makeString(this.props.number);
        return /*html*/`
        <div>
        ${stringToRender}
        </div>
        `;
    }

    makeString(num) {
        let newString = '';
        for(let i = 0; i < num; i++) {
            newString += `<div class="card">card ${i + 1}</div>`;
        }
        return newString;
    }

}

export default Card;