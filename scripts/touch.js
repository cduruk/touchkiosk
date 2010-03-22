document.write('<div id="touchcursor" style="top: 0px; left: 0px; width: 25px; height: 25px; background-color: #c0c0c0; opacity: 0; position: absolute;"></div>')

// Listen for mouse movement
document.onmousemove = captureMousePosition;
document.onmousedown = captureMouseClick;

// Default values for mouse position
var mouseX = 0;
var mouseY = 0;
var mouseTime = 0;
var lastMouseX = 0;
var lastMouseY = 0;
var lastMouseTime = 0;

var timeThreshold = 30;

var minMoveThreshold = 5;

setInterval('checkMousePosition();', timeThreshold);

// If mouse moves...
function captureMousePosition(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  var date = new Date();
  
  if (Math.abs(mouseX - lastMouseX) > minMoveThreshold || Math.abs(mouseY - lastMouseY) > minMoveThreshold)
    mouseTime = date.getTime();
  else {
    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }
  
  console.log(mouseX + ' ' + mouseY);
}

function captureMouseClick(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  var date = new Date();
  
  lastMouseX = 0;
  lastMouseY = 0;
  lastMouseTime = 0;
  
  console.log(mouseX + ' ' + mouseY);
}

function checkMousePosition() {
  if (mouseX == 0 || mouseY == 0)
    return;
   

  var date = new Date();
    
  if ((date.getTime() - timeThreshold) > mouseTime && (mouseX != lastMouseX || mouseY != lastMouseY)) {
    console.log('new position: ' + mouseX + ' ' + mouseY);
    document.getElementById('touchcursor').style.opacity = '0.9';
    document.getElementById('touchcursor').style.top = mouseY - (parseInt(document.getElementById('touchcursor').style.height) / 2) + 'px';
    document.getElementById('touchcursor').style.left = mouseX - (parseInt(document.getElementById('touchcursor').style.width) / 2) + 'px';
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    lastMouseTime = mouseTime;
    setTimeout("document.getElementById('touchcursor').style.opacity = '0.8';", 100);
    setTimeout("document.getElementById('touchcursor').style.opacity = '0.7';", 200);
    setTimeout("document.getElementById('touchcursor').style.opacity = '0.6';", 300);
    setTimeout("document.getElementById('touchcursor').style.opacity = '0.5';", 400);
    setTimeout("document.getElementById('touchcursor').style.opacity = '0.4';", 500);
    setTimeout("document.getElementById('touchcursor').style.opacity = '0.3';", 600);
    setTimeout("document.getElementById('touchcursor').style.opacity = '0.2';", 700);
    setTimeout("document.getElementById('touchcursor').style.opacity = '0.1';", 800);
    setTimeout("document.getElementById('touchcursor').style.opacity = '0';", 900);
  }
}