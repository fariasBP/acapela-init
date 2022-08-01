import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

import './title-comp'

@customElement('title-part')
export class TitlePart extends LitElement {
  
  @property() title: string = ""
  @property() details: string = ""
  @property() align: string = "start"

  render() {
    return html`
      <style>
        :host > p {
          text-align: ${this.align};
        }
      </style>
      <title-comp title=${this.title} align=${this.align}></title-comp>
      <p>${this.details}</p>
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
        /* border: 2px solid orange; */
        display: flex;
        flex-flow: column;
        gap: 1rem;
        justify-content: center;
      }
      /* p */
      :host > p {
        padding: 0 1rem;
        font-size: 1.5rem;
      }
    `
  ];
}
