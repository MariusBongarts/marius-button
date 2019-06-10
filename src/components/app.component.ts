import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./app.component.scss');

@customElement('app-starter')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  title = 'This title can be overwritten in the custom element by the attribute "title"';

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
          <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">Web Component</div>
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <button @click=${() => this.emit()} class="btn btn-primary">Emit Event 'buttonClick'</button>
            </div>
          </div>`;
  }

}
