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

function applyStyles(styleObj, node) {
  Object.keys(styleObj).forEach(styleName => {
    const val = styleObj[styleName];
    node.style[styleName] = typeof val === 'string' ? val : `${val}px`
  });
}

// draw box to canvas
const canvas = document.getElementsByClassName('canvas')[0];
const box = document.createElement('div')
box.classList.add('box');

applyStyles(DEFAULTS, box);
applyStyles(CONTAINER_DEFAULTS, canvas);

canvas.append(box);
