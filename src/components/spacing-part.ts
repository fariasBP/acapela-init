import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("spacing-part")
export class SpacingPart extends LitElement {

  @property() height: string = "0px";

  render() {
    return html`
      <style>
        :host {
          display: block;
          height: ${this.height};
        }
      </style>
    `;
  }
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];
}
