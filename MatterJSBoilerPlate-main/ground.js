class Ground
{
   constructor(x,y,w,h)
   {
      let ground_options={
           isStatic:true
       };

       this.body = Bodies.rectangle(x,y,w,h,ground_options);
       this.width = w;
       this.height = h;

       World.add(world,this.body);
   }
    
   show()
   {
       var pos = this.body.position;
       push();
       rectMode(CENTER);
       stroke(255);
       fill(127);
       rect(pos.x,pos.y,this.width,this.height);
       pop();
   }
}

