import { TextBlock, TitleBlock, TextColumnsBlock, ImageBlock } from './blocks';
export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector);
    this.update = update;
    this.init();
  }

  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this));
    this.$el.innerHTML = this.template;
  }

  get template() {
    return [
      block('title'),
      block('text'),
      blockImage('image'),
      blockColumn('column')
    ].join('');
  }

  addBlock(event) {
    event.preventDefault();
    const type = event.target.name;
    let value;
    const styles = event.target.styles.value;
    let styleImage;
    let valueColumn = [];

    let Constructor;
    switch (type) {
      case 'text':
        value = event.target.value.value;
        Constructor = TextBlock;
        event.target.value.value = '';
        break;
      case 'title':
        value = event.target.value.value;
        Constructor = TitleBlock;
        event.target.value.value = '';
        break;
      case 'column':
        let columnForm = document.forms.column;
        let inputs = Array.from(columnForm.elements.value);
        valueColumn = inputs.map(item => item.value);

        Constructor = TextColumnsBlock;
        break;
      case 'image':
        value = event.target.value.value;
        styleImage = event.target.stylesImage.value;
        Constructor = ImageBlock;
        event.target.value.value = '';
        event.target.stylesImage.value = '';
        break;
      default:
        break;
    }
    
    const newBlock = new Constructor(value || valueColumn, {styles}, styleImage);
    this.update(newBlock);
    
    event.target.styles.value = '';
  }
}


function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="color: red; margin: 20px;">
      </div>
      <button type="submit" class="vtn btn-primary btn-sm">Добавить</button>
    </form>
    <hr/>
  `
}

function blockColumn(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="vtn btn-primary btn-sm">Добавить</button>
    </form>
    <hr/>
  `
}

function blockImage(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="link to image">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="stylesImage" placeholder="styles img">
      </div>
      <button type="submit" class="vtn btn-primary btn-sm">Добавить</button>
    </form>
    <hr/>
  `
}

function blockNumberColumn(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="number of columns">
      </div>
      <button type="submit" class="vtn btn-primary btn-sm">Добавить</button>
    </form>
    <hr/>
  `
}

class NumberColomns {
  constructor(value) {
    this.value = value;
  }

  addBlockCulumn() {
    for (this.value; this.value >= 0; this.value--) {
      return blockCulomn(`${this.value} column`);
    }
  }
}