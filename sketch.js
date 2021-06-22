const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
 getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if (backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImage() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();

    var dateTime = responseJson.datetime;
    var hour = dateTime.slice(11, 13);

    if (hour >= 06 && hour <= 8) {
        bg = "sunrise1.png";

    }
    else if (hour >= 08 && hour <= 10){
        bg = "sunrise2.png"
    }
    else if (hour >= 10 && hour <= 12){
        bg = "sunrise3.png"
    }
    else if (hour >= 12 && hour <= 14){
        bg = "sunrise4.png"
    }
    else if (hour >= 14 && hour <= 16){
        bg = "sunrise5.png"
    }
    else if (hour >= 16 && hour <= 18){
        bg = "sunrise2.png"
    }
    else {
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
}

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here


