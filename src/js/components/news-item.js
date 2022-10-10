class NewsItem extends HTMLElement {
  set content(content) {
    this._content = content;
    this.render();
  }
  render() {
    this.classList.add('card', 'border-0', 'shadow', 'h-100');
    this.innerHTML = `
      <img src="${this._content.img}" class="card-img-top" alt="${this._content.title}">
      <div class="card-body">
        <h5 class="card-title text-dark-blue">
          ${this._content.title}
        </h5>
        <p class="card-text">
          <small class="text-muted">
            ${this._content.date}
          </small>
        </p>
        <a href="${this._content.link}" class="stretched-link"></a>
      </div>
    `
  }
}

customElements.define('news-item', NewsItem);