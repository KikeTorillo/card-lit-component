import { LitElement, html, css } from "lit";

export class CardLit extends LitElement {
  static get properties() {
    return {
      img: { type: String },
      title: { type: String },
      subtitle: { type: String },
    };
  }

  constructor() {
    super();
    this.img = "";
    this.title = "";
    this.subtitle = "";
  }

  static styles = css`
    :host {
      --card-color: #00c6ae;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    .card {
      width: 32.7rem;
      height: 18.4rem;
      background: var(--card-color);
      border: 2px solid #18191f;
      border-radius: 16px;
      position: relative;
    }

    .name-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      width: 18.6rem;
      height: 6rem;
      left: 24px;
      top: 24px;
    }

    .title {
      width: 186px;
      height: 28px;
      font-size: 2.4rem;
    }

    .subtitle {
      color: #d6fcf7;
      font-size: 1.7rem;
      margin-top: 0.8rem;
      font-weight: 700;
    }

    .card .img {
      position: absolute;
      width: 10rem;
      heigth: 10rem;
      top: 3rem;
      left: 19rem;
      background: #00c6ae;
      border: 2px solid #18191f;
      border-radius: 25rem;
    }
    .card button {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 16px;
      color: white;
      position: absolute;
      width: 89px;
      height: 36px;
      left: 24px;
      top: 124px;
      background: #18191f;
      border-radius: 12px;
      font-size: 1.2rem;
      font-weight: 800;
    }

    .card button:hover {
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <div class="card">
        <div class="name-container">
          <p class="title">${this.title}</p>
          <p class="subtitle">${this.subtitle}</p>
        </div>
        <img class="img" src=${this.img} />
        <button>See</button>
      </div>
    `;
  }
}
customElements.define("card-lit", CardLit);
