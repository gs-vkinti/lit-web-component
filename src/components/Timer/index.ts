import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("timer-component")
export class TimerComponent extends LitElement {
  timerId: any;

  constructor() {
    super();
    this.timerId = "";
  }

  @state()
  private counter: any = "00:00";

  @property({ type: Number }) minutes = 10;

  startInterval() {
    this.timerId = setInterval(() => {
      if (this.counter === 0) clearInterval(this.timerId);
      else {
        this.counter -= 1;
      }
    }, 1000);
  }

  attributeChangedCallback(name: any, oldVal: any, newVal: any) {
    super.attributeChangedCallback(name, oldVal, newVal);

    if (name === "minutes" && oldVal !== newVal) {
      if (this.timerId) clearInterval(this.timerId);
      this.counter = this.minutes * 60;
      this.startInterval();
    }
  }

  formatTime() {
    const minutes = Math.floor(this.counter / 60);
    const seconds = this.counter - minutes * 60;

    return `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  }

  render() {
    return html`<div>Timer : ${this.formatTime()}</div> `;
  }
}
