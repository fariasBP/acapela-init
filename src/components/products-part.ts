import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('products-part')
export class ProductsPart extends LitElement {

  @property({type: Array}) srcs: string[] = [
    "./assets/img/img3.jpg",
    "./assets/img/img2.jpg",
    "./assets/img/img4.jpg",
  ]

  render() {
    return html`
      <img src=${this.srcs[0]} />
      <img src=${this.srcs[1]} />
      <img src=${this.srcs[2]} />
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
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr;
        align-items: center;
        gap: 1rem;
        padding: 0 1rem !important;
      }
      img {
        width: 100%;
        max-height: 500px;
        object-fit: cover;
        border-radius: 1rem;
      }
    `
  ];
}
