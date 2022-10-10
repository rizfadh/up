class ActivityItem extends HTMLElement {
  set content(content) {
    this._content = content;
    this.render();
  }

  render() {
    this.classList.add('card', 'border-0', 'shadow', 'h-100');
    this.innerHTML = `
      <div class="card-body h-100">
        <h5 class="card-title text-dark-blue">${this._content.title}</h5>
        <p class="card-text"><small class="text-muted">${this._content.date}</small></p>
        <a href="${this._content.link}" class="stretched-link"></a>
      </div>
    `;
  }
}

customElements.define('activity-item', ActivityItem);