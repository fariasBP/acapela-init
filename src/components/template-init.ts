import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('template-init')
export class TemplateInit extends LitElement {
  
  @property() left: string = "1fr"
  @property() right: string = "1fr"

  render() {
    return html`
      <style>
        :host {
          grid-template-columns: ${this.left+" "+this.right};
        }
      </style>
      <div>
        <slot name="left"></slot>
      </div>
      <div>
        <slot name="right"></slot>
      </div>
    `;
  }
  static styles = [
    css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        /* border: 1px solid red; */
        display: grid;
        /* min-height: 500px; */
      }
      /* DIV'S */
      :host > div {
        display: flex;
        justify-content: center;
      }
      /* PRIMER DIV */
      :host > div:nth-child(1) {
        /* border: 1px solid green; */
      }
      /* SEGUNDO DIV */
      :host > div:nth-child(2) {
        /* border: 1px solid yellow; */
      }
    `
  ];
}
