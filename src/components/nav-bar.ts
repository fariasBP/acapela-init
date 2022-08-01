import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('nav-bar')
export class NavBar extends LitElement {
  render() {
    return html`
      <div>
        <img src="./assets/img/logo.svg" />
      </div>
      <div>
        <!-- <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>¿Donde Estamos?</li>
          <li>Inicio</li>
        </ul> -->
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
        display: block;
        background-color: white;
        width: 100%;
        height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        padding-left: .5rem !important;
      }
      li {
        list-style: none;
      }
      /* DIV ICON TITLE */
      :host > div:nth-child(1) {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      /* img icon */
      :host > div:nth-child(1) > img {
        height: 35px;
      }
      /* DIV NAV */
      :host > div:nth-child(2) {
        height: 100%;
      }
      /* ul */
      :host > div:nth-child(2) ul {
        height: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 1rem;
      }
      
    `
  ];

}
