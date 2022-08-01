import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('title-comp')
export class TitleComp extends LitElement {

  @property({type: Boolean}) bold: boolean = false;
  @property({type: String}) align: string = "start";
  @property() title: string = "";

  render() {
    return html`
      <style>
        h5 {
          font-weight: ${this.bold ? 'bold' : '400'};
          text-align: ${this.align};
          font-size: 3rem;
        }
      </style>
      <h5>${this.title}</h5>
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
        width: 100%;
        display: block;
      }
      h5 {
        padding: 0 1rem;
      }
    `
  ];
}
