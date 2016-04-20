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
//tool populated with option elements for tools defined
//mousedown handles current tool function - passes it event object and drawing context as arguments
//preventDefault so holding and dragging mouse doesn't select parts of the page

var tools = Object.create(null);

controls.tool = function(cx) {
  var select = elt("select");
  for (var name in tools)
    select.appendChild(elt("option", null, name));

  cx.canvas.addEventListener("mousedown", function(event) {
    if (event.which == 1) {
      tools[select.value](event, cx);
      event.preventDefault();
    }
  });

  return elt("span", null, "Tool: ", select);
};
