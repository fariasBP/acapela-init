import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

import './components/template-init'
import './components/nav-bar'
import './components/title-part'
import './components/imgtitle-part'
import './components/products-part'
import './components/location-part'
import './components/spacing-part'
import './components/footer-part'

export class App extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <template-init left="500px" right="1fr">
        <title-part slot="left" title="Acapela.Shop" align="center" details="Somos una tienda de ropa, en donde ofrecemos abrigos, camisas, pantalones y mas. Con una experiencia del cliente inigualable."></title-part>
        <imgtitle-part slot="right" height=${600}></imgtitle-part>
      </template-init>
      <template-init left="1fr" right="600px">
        <products-part slot="left"></products-part>
        <title-part slot="right" title="Nuestros Productos" details="Modelos de abrigos coreanos unicos y con la mejor experiencia en el cliente, ya con mas de 300 clientes concurrente y mas 1000 clientes satisfechos."></title-part>
      </template-init>
      <spacing-part height="2rem"></spacing-part>
      <title-comp title="¿Donde Estamos?" align="center"></title-comp>
      <spacing-part height="1.5rem"></spacing-part>
      <location-part></location-part>
      <spacing-part height="2rem"></spacing-part>
      <title-comp title="¿Por qué preferirnos?" align="center"></title-comp>
      <spacing-part height="1.5rem"></spacing-part>
      <template-init left="1fr" right="600px">
        <products-part slot="left" .srcs=${["./assets/img/mob1.jpg", "./assets/img/mob2.jpg","./assets/img/mob3.jpg"]}></products-part>
        <ul slot="right">
          <li>Los clientes son lo mas importante para nosostros.</li>
          <li>Enviamos notificaciones via Whatsapp, sin molestar.</li>
          <li>Tenemos pagina de Facebook para que no se pierda de nuestros mejores productos</li>
          <li>App para una mejor experiencia (por ahora solo para administradores).</li>
        </ul>
      </template-init>
      <footer-part></footer-part>

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
        min-width: 900px;
        display: block;
        height: 1500px;
        z-index: 3000;
        margin-top: 50px;
      }
      /* :host >div {
        margin: 0 auto;
        max-width: 1200px;
      } */
      p {
        font-size: 5rem;
        z-index: 3000;
      }
      ul {
        padding: 0 1rem;
        display: flex;
        flex-flow: column;
        justify-content: center;
      }
      li {
        font-size: 1.5rem;
        /* font-weight: bold; */
      }
    `
  ];
}
