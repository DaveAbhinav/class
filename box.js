class Box
  {
  constructor(){
    this.x = 100;
    this.y = 100;
    this.h = 10;
    this.w = 25;
  }

  show(){
    rect(this.x,this.y,this.h,this.w);

  }

  setSpeed(v){
    this.x = this.x+v;
    
  }
  }

  
