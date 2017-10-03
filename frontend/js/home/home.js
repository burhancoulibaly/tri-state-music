var myArray = new Array(25);

function setup(){
  canvas = createCanvas(document.body.clientWidth, document.documentElement.scrollHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  bg = loadImage("./images/pexels-photo-249797.png");
  for (var i = 0; i < this.myArray.length; i++) {
    myArray[i] = new MyLine();
  }
}

function draw(){
  background(bg);
  for (var i = 0; i < this.myArray.length; i++) {
    myArray[i].update();
    myArray[i].show();
  }
}
