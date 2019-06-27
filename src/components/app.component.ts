import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./app.component.scss');

@customElement('marius-button')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  title = 'Example button';

  emit() {
    console.log('Button clicked');
    this.dispatchEvent(
      new CustomEvent('buttonClick', {
        bubbles: true
      })
    );
  }

  render() {
    return html`
          <button @click=${()=> this.emit()}>
          ${this.title}
          </button>
`;
  }

}
