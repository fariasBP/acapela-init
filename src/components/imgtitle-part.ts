import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('imgtitle-part')
export class ImgtitlePart extends LitElement {
  
  @property() height:number = 500;

  render() {
    return html`
      <style>
        img {
          height: ${this.height}px;
        }
      </style>
      <img src="./assets/img/img1.svg" />
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
        display: block;
      }
    `
  ];
}
