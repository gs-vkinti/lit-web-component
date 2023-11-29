import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lit-web-component")
export class LitWebComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lit-web-component-text-color, #000);
    }
  `;

  @property({ type: String }) header = "Hey there";

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter < 10 && (this.counter += 1);
  }

  __decrement() {
    this.counter > 1 && (this.counter -= 1);
  }

  render() {
    return html`
      <h2>${this.header}</h2>
      <h1>counter: ${this.counter}</h1>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__decrement}>decrement</button>

      <div><timer-component minutes=${5}> </timer-component></div>
    `;
  }
}
