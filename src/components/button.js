class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = <button type="button">Click Me!</button>;
  }
}

window.customElements.define("custom-button", CustomButton);
