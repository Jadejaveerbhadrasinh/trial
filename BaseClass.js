class BaseClass
{
              constructor( x, y,width,height,angle){

               var option = {"restitution": 0.8 , "friction" : 1};//restitution propertty how much will it bounce.Its value ranges from 0 to 1; in 1 it will bounce maximum ; in 0 it will bounce minimum
                            
              this.bodyX = x;//this is refering to ground object
              this.bodyY = y;
              this.bodyW = width;
              this.bodyH = height;
              this.bodyA = angle;             
              
              this.body = Bodies.rectangle(this.bodyX,this.bodyY,this.bodyW,this.bodyH,option);
                            
              World.add(myWorld,this.body);
               this.image = loadImage("sprites/base.png");             
              }
                            
              display()
              {
         
              push();//it will store the previous settings of the canvas from an array

              translate(this.body.position.x,this.body.position.y);//shift the origin of the canvas 
              rotate(this.body.angle);//rotate the canvas by an angle

              imageMode(CENTER);
              image(this.image,0,0,this.bodyW,this.bodyH);
                            
              pop();//it will take out the previous settings of the canvas from an array

              }
}