
// style objects

const DEFAULTS = {
  // background
  'backgroundColor': '#aaa',
  // size
  'width': 300,
  'height': 300,
  'boxSizing': 'border-box',
  // spacing
  'padding': 0,
  'margin': 0,
  // border
  'size': 2,
  'borderColor': '#000',
  'borderRadius': 0,
  // shadow
  'boxShadow': 'none'
};

const CONTAINER_DEFAULTS = {
  'alignItems': 'center',
  'justifyContent': 'center',
}

let boxStyles = { ...DEFAULTS };
let containerStyles = { ...CONTAINER_DEFAULTS };

// global refs


const container = document.getElementsByClassName('canvas')[0];
const box = document.createElement('div');

// helpers

function applyStyles(styleObj, node) {
  Object.keys(styleObj).forEach(styleName => {
    const val = styleObj[styleName];
    node.style[styleName] = typeof val === 'string' ? val : `${val}px`;
  });
}

function attachClickHandler(id, cb) {
  document.getElementById(id).addEventListener('click', e => {
    cb();
    render();
  });
}

function render() {
  box.remove();
  applyStyles(boxStyles, box);
  applyStyles(containerStyles, container);
  container.append(box);
}

// draw box in container
render();

// bind event handlers
attachClickHandler('h-pos-l', () => containerStyles.justifyContent = 'flex-start');
attachClickHandler('h-pos-c', () => containerStyles.justifyContent = 'center');
attachClickHandler('h-pos-r', () => containerStyles.justifyContent = 'flex-end');

attachClickHandler('v-pos-t', () => containerStyles.alignItems = 'flex-start');
attachClickHandler('v-pos-c', () => containerStyles.alignItems = 'center');
attachClickHandler('v-pos-b', () => containerStyles.alignItems = 'flex-end');
