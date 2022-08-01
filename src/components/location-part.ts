import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('location-part')
export class LocationPart extends LitElement {

  render() {
    return html`
      <template-init>
        <img slot="left" src="./assets/img/img5.jpg" width="550" />
        <iframe slot="right" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2704.7899644551453!2d-68.16641775352251!3d-16.518490356333356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf2f1c8c968d%3A0x98180985f9157bc5!2sAcapela%20-%20dise%C3%B1o%20y%20moda!5e0!3m2!1ses!2sbo!4v1659382578040!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </template-init>
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
      img {
        border-radius: 1rem;
      }
      iframe {
        border-radius: 1rem;
      }
    `
  ];
}
