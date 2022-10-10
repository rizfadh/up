import './activity-item.js';

class ActivityList extends HTMLElement {
  set contents(contents) {
    this._contents = contents;
    this.render();
  }

  render() {
    this.classList.add('row', 'mt-5', 'row-cols-1', 'row-cols-md-2', 'row-cols-lg-3', 'g-3');
    this._contents.forEach(content => {
      const div = document.createElement('div');
      div.classList.add('col');
      const item = document.createElement('activity-item');
      item.content = content;
      div.appendChild(item);
      this.appendChild(div);
    });
  }
}

customElements.define('activity-list', ActivityList);