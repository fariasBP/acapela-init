import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

import '@vaadin/icon'
import '@vaadin/icons'

@customElement('footer-part')
export class FooterPart extends LitElement {
  render() {
    return html`
      <span>www.acapela.shop</span>
      <span><a href="https://www.facebook.com/Acapela-Dise%C3%B1o-y-Moda-117114304308121"><vaadin-icon icon="vaadin:facebook-square"></vaadin-icon> Facebook</a></span>
    `;
  }
  static styles = [
    css`
      * {
        box-sizing: border-box;
      }
      :host {
        display: block;
        background-color: var(--lumo-primary-color);
        height: 50px;
        padding: 0 1rem !important;
        margin-top: 1rem !important;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      a {
        color: white;
        text-decoration: none;
      }
    `
  ];
}
