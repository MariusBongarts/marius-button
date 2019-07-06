import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';

const componentCSS = require('./app.component.scss');

@customElement('marius-button')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @query('button')
  btnElement!: HTMLButtonElement;

  @property()
  content: string = 'mb-button';

  emit() {
    // const element: HTMLElement = document.activeElement as HTMLElement;
    // element.tagName === 'MARIUS-BUTTON' ? this.btnElement.blur() : '';
    this.dispatchEvent(
      new CustomEvent('buttonClick', {
        bubbles: true
      })
    );
  }

  render() {
    return html`
          <button @click=${() => this.emit()}>
            <span>${this.content}</span>
          </button>
`;
  }

}
