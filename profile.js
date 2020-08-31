class MyProfile extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this._shadowRoot.innerHTML = `
        <img src="" alt="photo">
        <h1 id="name"></h1>
        <p id="age"></p>
        <p id="address"></p>
        `;

        this.$name = this.shadowRoot.querySelector('#name')
        this.$age = this.shadowRoot.querySelector('#age')
        this.$address = this.shadowRoot.querySelector('#address')
        this.$photo = this.shadowRoot.querySelector('img')
    }

    static get observedAttributes() {
        return ['name', 'age', 'address', 'photo'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`giá trị của thuộc tính ${name} đã chuyển sang ${oldValue}`);
        if (name === 'name') {
            this.$name.innerHTML = newValue;
        }  else if (name === 'age') {
            this.$age.innerHTML = newValue;
        } else if (name === 'address') {
            this.$address.innerHTML = newValue;
        } else if (name === 'photo') {
            this.$photo.setAttribute('src', newValue)
        }
    }
}

window.customElements.define('my-profile', MyProfile);