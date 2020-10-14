var canvas = new fabric.Canvas ("myCanvas");

var playerX = 10;
var playerY = 10;

var block_image_width = 30;
var block_image_height = 30;

var player_objects = "";
var block_image_objects = "";

function player_update(){

fabric.Image.fromURL("player.png", function(Img) {

player_objects = Img;
player_objects.scaleToWidth(150);
player_objects.scaleToHeight(140);
player_objects.set({

top:playerY,
left:playerX

});

canvas.add(player_objects);

});

}

function new_image(get_image){

fabric.Image.fromURL(get_image , function(Img){
    
block_image_objects = Img;
block_image_objects.scaleToWidth(block_image_width);
block_image_objects.scaleToHeight(block_image_height);
block_image_objects.set({

top:playerY,
left:playerX

});

canvas.add(block_image_objects);

});

}

window.addEventListener("keydown",myKeydown);

function myKeydown(e){

var keypress = e.keyCode;
console.log(keypress);

if(e.shiftKey == true && keypress == '80'){

     console.log("P And Shift Pressed ToGether");
     block_image_height = block_image_height + 10;
     block_image_width = block_image_width + 10;
     document.getElementById("current_width").innerHTML = block_image_width;
     document.getElementById("current_height").innerHTML = block_image_height;

}

if(e.shiftKey == true && keypress == '77'){

console.log("M And Shift Pressed ToGether");
block_image_height = block_image_height - 10;
block_image_width = block_image_width - 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;

}

if(keypress == '38'){

    up();
    console.log("Pressed Up");

}

if(keypress == '40'){

down();
console.log("Pressed Down");

}

if(keypress == '37'){

    left();
    console.log("Pressed Left");

}

if(keypress == '39'){

   right();
   console.log("Pressed Right");

}

if(keypress == '87'){

  new_image('wall.jpg');
  console.log("Pressed W");

}

if(keypress == '71'){

   new_image('ground.png');
   console.log("Pressed G");

}

if(keypress == '76'){

   new_image('light_green.png');
   console.log("Pressed L");

}

if(keypress == '84'){

   new_image('trunk.jpg');
   console.log("Pressed T");

}

if(keypress == '82'){

new_image('roof.jpg');
console.log("Pressed R");

}

if(keypress == '89'){

   new_image('yellow_wall.png');
   console.log("Pressed Y");

}

if(keypress == '68'){

   new_image('dark_green.png')
   console.log("Pressed D");

}

if(keypress == '85'){

  new_image('unique.png');
  console.log("Pressed U");

}

if(keypress == '67'){

   new_image('cloud.jpg');
   console.log("Pressed C");

}

if(keypress == '77'){

    new_image('mud.jpg');
    console.log("Pressed M");
 
 }

}

function up(){

   if(playerY >= 0){

     playerY = playerY - block_image_height;
     console.log("Block Image Height = " + block_image_height);
     console.log("When Up Is pressed, X= "+playerX + ", Y =" + playerY);
     canvas.remove(player_objects);
     player_update();

   }

}

function down(){

  if(playerY <= 500){

     playerY = playerY + block_image_height;
     console.log("Block Image Height = " + block_image_height);
     console.log("When Down Is Pressed, X= " + playerX + ", Y = " + playerY);
     canvas.remove(player_objects);
     player_update()

  }

}

function left(){

   if (playerX >= 0){

     playerX = playerX - block_image_width;
     console.log("Block Image Width = " + block_image_width);
     console.log("When Left Is Pressed, X= "  + playerX + ", Y = " + playerY);
     canvas.remove(player_objects);
     player_update();

   }

}

function right(){

   if(playerX <= 850){

     playerX = playerX + block_image_width;
     console.log("Block Image Width = " + block_image_width);
     console.log("When Right Is Pressed, X= " + playerX + ", Y= " + playerY);
     canvas.remove(player_objects);
     player_update();

   }

}