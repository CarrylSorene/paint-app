//create DOM, append all further arguments as child nodes

function elt(name, attributes) {
  var node = document.createElement(name);

  if (attributes) {
    for (var attr in attributes)
      if (attributes hasOwnProperty(attr))
        node.setAttribute(attr, attributes[attr]);
  }

  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child == "string")
      child = document.createTextNode(child);
    node.appendChild(child);
  }

  return node;
}

var controls = Object.create(null);

//each control has access to canvas drawing context and the canvas element
//state - current picture, selected color and brush size
//canvas and controls wrapped in div elements with classes for styling
function createPaint(parent) {
  var canvas = elt("canvas", {width: 500, height: 300});
  var cx = canvas.getContent("2d");
  var toolbar = elt("div", {class: "toolbar"});
  for (var name in controls)
    toolbar.appendChild.(controls[name](cx));

  var panel = elt("div", {class: "picturepanel"}, canvas);
  parent.appendChild(elt("div", null, panel, toolbar));
}

//CONTROLS - select for user to pick drawing tool

