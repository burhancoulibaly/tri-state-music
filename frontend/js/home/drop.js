function MyLine(){
  img = loadImage("./images/menzcouli-logo.png");
  this.x = random(document.body.clientWidth);
  this.y = random(document.body.clientHeight);
  this.degrees = random(360);
  this.imgSize = random(32)+4;
  this.xspeed = random(1)+.1;

  this.update = function(){
    this.x = this.x + this.xspeed;
    this.degrees = this.degrees+.001

    if (this.degrees > 360) {
      this.degrees = 0;
    }
    if(this.x > innerWidth){
      this.x = -10;
    }
  }

  this.show = function(){
    image(img,this.x,this.y,img.width/this.imgSize,img.height/this.imgSize);
    rotate(radians(this.degrees));
  }
}
