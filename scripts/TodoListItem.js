class TodoListItem {

  static _template = document.querySelector('#todolist-item-template').content;

  constructor(item, addItem, api) {
    this._text = item.name;
    this._id = item.id;
    this._addItem = addItem;
    this._api = api
  }

  _delClickHandler = () => {
    this._api.deleteItem(this._id).then(res => {
      this._view.remove();
    }).catch(err => {
      console.log(err)
    })
  }

  _copyClickHandler = () => {
    this._api.createItem({ name: this._text }).then(res => {
      this._addItem(res);
    })
  }

  render = (container) => {
    this._view = TodoListItem._template.cloneNode(true).children[0];
    this._view.querySelector('.todolist-item__text').textContent = this._text;
    this._view.querySelector('.todolist-item__del').addEventListener('click', this._delClickHandler);
    this._view.querySelector('.todolist-item__copy').addEventListener('click', this._copyClickHandler);
    container.append(this._view);
  }

}
