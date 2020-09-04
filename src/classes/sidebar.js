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
      blockCulomn('text column'),
    ].join('');
  }

  addBlock(event) {
    event.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
    let styleImage;

    let Constructor;
    switch (type) {
      case 'text':
        Constructor = TextBlock;
        break;
      case 'title':
        Constructor = TitleBlock;
        break;
      case 'text column':
        Constructor = TextColumnsBlock;
        break;
      case 'image':
        Constructor = ImageBlock;
        styleImage = event.target.stylesImage.value;
        break;
      default:
        break;
    }
    
    const newBlock = new Constructor(value, {styles}, styleImage);
    this.update(newBlock);
    event.target.value.value = '';
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
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="vtn btn-primary btn-sm">Добавить</button>
    </form>
    <hr/>
  `
}

function blockCulomn(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
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