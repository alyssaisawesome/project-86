var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var ctx = canvas.getContext("2d");
 imgs = ["BirthdayImage.jpg", "bday2.jpg", "bday3.jpg","bday4.jpg","bday1.jpg"];

function new_image()
{
	
	randomimg = Math.floor (Math.random() * 5);
    console.log("random img"+randomimg);
    backgroundimg = imgs[randomimg];
    bgimg = new Image();
    bgimg.onload = uploadbg;
    bgimg.src = backgroundimg;
    ctx.drawImage(bgimg,0,0,canvas.width,canvas.height);
	
}

function uploadbg() {
    ctx.drawImage(bgimg,0,0,canvas.width,canvas.height)
}

function playSound(){
	x.play;
}
