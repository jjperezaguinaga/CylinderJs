var orthographic = Raphael('orthographic', '690', '160');
var withContent = Raphael('cylinder-with-content', '690', '160');
var basic = Raphael('basic', '690', '160');
var draggable = Raphael('draggable', '690', '160');
var color = Raphael('color', '690', '160');
var percentage = Raphael('percentage', '690', '160');
var animatePercentage = Raphael('animate-percentage', '690', '160');
var animateColor = Raphael('animate-color', '690', '160');
var animateSpeed = Raphael('animate-speed', '690', '160');
var volumen = Raphael('volumen', '690', '160');
var transferable = Raphael('transferable', '690', '160');
var transferableMultiple = Raphael('transferable-multiple', '690', '160');
var join = Raphael('join', '690', '260');
var joinMultiple = Raphael('join-multiple', '690', '340');

var x = 0;
var y = 0;

(function(x,y,rsr){
x +=170
y +=10
var topRx = 20;
var topRy = 20;
var baseRx = 30;
var baseRy = 30;
var containerHeight = 100;
var topWidth = topRx*2;
var bottomWidth = baseRx*2;
var yRotation = 10;

var getTopRy = topWidth*yRotation/bottomWidth;
var getBaseRy = bottomWidth*yRotation/topWidth;

// Container
rsr.ellipse(x,y,topWidth,getTopRy);
rsr.path([
    ["M", x-topWidth, y],
    ["A", topWidth, getTopRy, 0, 0, 0, x+topWidth, y],
    ["L", x+bottomWidth, y+containerHeight],
    ["A", bottomWidth, getBaseRy, 0, 0, 0, x-bottomWidth, y+containerHeight],
    ["L", x-topWidth, y]
    ]);
rsr.ellipse(x, y+containerHeight, bottomWidth, getBaseRy);

rsr.text(x+120, y, "A 3D orthographic cylinder");

x+=250
rsr.ellipse(x,y,topWidth,getTopRy);
y+=5
rsr.path([
    ["M", x-topWidth, y],
    ["A", topWidth, getTopRy, 0, 0, 0, x+topWidth, y],
    ["L", x+bottomWidth, y+containerHeight],
    ["A", bottomWidth, getBaseRy, 0, 0, 0, x-bottomWidth, y+containerHeight],
    ["L", x-topWidth, y]
    ]);
y+=5
rsr.ellipse(x, y+containerHeight, bottomWidth, getBaseRy);

rsr.text(x+120, y-10, "Made of an ellipse");
rsr.text(x+120, y+40, "a composite path ");
rsr.text(x+120, y+100, "and other ellipse");
})(x,y,orthographic);

(function(x,y,rsr){
	x+=200
	y+=30
	rsr.cylinder(x, y, 10, 40, 80, 90, true, 60);
	rsr.cylinder(x+200, y, 40, 40, 80, 40, true, 30);
})(x,y,withContent);

(function(x,y,rsr){
    x+=200
    y+=30
    var c1 = rsr.cylinder(x, y, 10, 40, 80, 90, true, 60);
    var c2 = rsr.cylinder(x+200, y, 40, 40, 80, 40, true, 30);
})(x,y,basic);

(function(x,y,rsr){
    x+=200
    y+=30
    var c1 = rsr.cylinder(x, y, 10, 40, 80, 90, true, 60);
    var c2 = rsr.cylinder(x+200, y, 40, 40, 80, 40, true, 30);
    c1.attr({content: {fill: "rgba(15, 55, 86, .5)"}});
    c2.attr({content: {fill: "rgba(229, 130, 0, .5)"}});
    c1.draggable();
    c2.draggable();
})(x,y,draggable);

(function(x,y,rsr){
    x+=200
    y+=30
    var c1 = rsr.cylinder(x, y, 10, 40, 80, 90, true, 60);
    var c2 = rsr.cylinder(x+200, y, 40, 40, 80, 40, true, 30);
    c1.attr({content: {fill: "rgba(15, 55, 86, .5)"}});
    c2.attr({content: {fill: "rgba(229, 130, 0, .5)"}});
    c1.displayVolumen();
    c2.displayVolumen();
})(x,y,volumen);

(function(x,y,rsr){
    x+=200
    y+=30
    var c1 = rsr.cylinder(x, y, 10, 40, 80, 90, true, 60);
    var c2 = rsr.cylinder(x+200, y, 40, 40, 80, 40, true, 30);
    c1.attr({content: {fill: "rgba(15, 55, 86, .5)"}});
    c2.attr({content: {fill: "rgba(229, 130, 0, .5)"}});
    c1.displayVolumen();
    c2.displayVolumen();
    c1.transferable();
    c2.transferable();
})(x,y,transferable);

(function(x,y,rsr){
    x+=80
    y+=30
    var c1 = rsr.cylinder(x-10, y, 10, 40, 80, 90, true, 20);
    var c2 = rsr.cylinder(x+120, y, 30, 40, 80, 40, true, 70);
    var c3 = rsr.cylinder(x+240, y, 10, 10, 90, 30, true, 10);
    var c4 = rsr.cylinder(x+340, y+5, 30, 20, 80, 60, true, 90);
    var c5 = rsr.cylinder(x+460, y, 20, 20, 80, 40, true, 30);
    c1.attr({content: {fill: "rgba(15, 55, 86, .5)"}});
    c2.attr({content: {fill: "rgba(229, 130, 0, .5)"}});
    c3.attr({content: {fill: "rgba(217, 200, 154, .5)"}});
    c4.attr({content: {fill: "rgba(217, 48, 48, .5)"}});
    c5.attr({content: {fill: "rgba(53, 59, 22, .5)"}});
    c1.displayVolumen();
    c2.displayVolumen();
    c3.displayVolumen();
    c4.displayVolumen();
    c5.displayVolumen();
    c1.transferable();
    c2.transferable();
    c3.transferable();
    c4.transferable();
    c5.transferable();
})(x,y,transferableMultiple);

(function(x,y,rsr){
    x+=200
    y+=30
    var c1 = rsr.cylinder(x, y, 10, 40, 80, 90, true, 60);
    var c2 = rsr.cylinder(x+200, y, 40, 40, 80, 40, true, 30);
    c1.attr({content: {fill: "rgba(15, 55, 86, .5)"}});
    c2.attr({content: {fill: "rgba(229, 130, 0, .5)"}});
})(x,y,color);

(function(x,y,rsr){
    x+=200
    y+=30
    var c1 = rsr.cylinder(x, y, 10, 40, 80, 90, true, 60);
    var c2 = rsr.cylinder(x+200, y, 40, 40, 80, 40, true, 30);
    c1.attr({content: {fill: "rgba(15, 55, 86, .5)", percentage: 10}});
    c2.attr({content: {fill: "rgba(229, 130, 0, .5)", percentage: 80}});
})(x,y,percentage);

(function(x,y,rsr){
    x+=300
    y+=30
    var c1 = rsr.cylinder(x, y, 10, 40, 80, 90, true, 60);
    var c2 = rsr.cylinder(x+200, y, 40, 40, 80, 40, true, 30);
    c1.attr({content: {fill: "rgba(15, 55, 86, .5)", percentage: 10}});
    c2.attr({content: {fill: "rgba(229, 130, 0, .5)", percentage: 80}});
    c1.joinBottom(c2)
})(x,y,join);

(function(x,y,rsr){
    x+=80
    y+=30
    //Tubo de Ensayo
var tubo = rsr.cylinder(x, y, 10, 10, 80, 30, true, 40);

tubo.transferable();
tubo.draggable();
tubo.attr({content: {fill: "rgba(40, 100, 159, 1)"}});
tubo.displayVolumen();

//Matraz
var matrazTop = rsr.cylinder(x+100, y, 10, 10, 30, 30, true, 40);
var matrazBottom = rsr.cylinder(x+100, y, 10, 40, 60, 90, true, 40);

matrazTop.joinBottom(matrazBottom);
matrazTop.displayVolumen();

matrazTop.transferable();
matrazTop.draggable();
matrazTop.attr({    content: {fill: "rgba(20, 160, 59, 1)"}});
matrazBottom.transferable();
matrazBottom.draggable();
matrazBottom.attr({ content: {fill: "rgba(20, 160, 59, 1)"}});


var tuboBig = rsr.cylinder(x+220, y+10, 40, 40, 80, 40, true, 40);
tuboBig.displayVolumen();

tuboBig.transferable();
tuboBig.draggable();
tuboBig.attr({  content: {fill: "rgba(90, 20, 230, 1)"}});


var pipetaTop = rsr.cylinder(x, y+120, 10, 10, 80, 30, true, 90);
var pipetaMain = rsr.cylinder(x, y+120, 6, 6, 40, 30, true, 90);
var pipetaBottom = rsr.cylinder(x, y+120, 6, 6, 40, 40, true, 90);

pipetaTop.joinBottom(pipetaMain);
pipetaMain.joinBottom(pipetaBottom);
pipetaTop.displayVolumen();

pipetaTop.transferable();
pipetaTop.draggable();
pipetaTop.attr({    content: {fill: "rgba(200, 100, 9, 1)"}});

pipetaMain.transferable();
pipetaMain.draggable();
pipetaMain.attr({   content: {fill: "rgba(200, 100, 9, 1)"}});

pipetaBottom.transferable();
pipetaBottom.draggable();
pipetaBottom.attr({ content: {fill: "rgba(200, 100, 9, 1)"}});

var largeTube = rsr.cylinder(x+100, y+120, 10, 10, 170, 20, true, 60, .30);
largeTube.transferable();
largeTube.draggable();
largeTube.attr({    content: {fill: "rgba(99, 0, 99, 1)"}});
largeTube.displayVolumen();


//Matraz
var matraz2Bottom = rsr.cylinder(x+200, y+200, 10, 40, 60, 90, true, 40);
var matraz2Top = rsr.cylinder(x+200, y+140, 10, 30, 30, 60, true, 40);


matraz2Top.joinBottom(matraz2Bottom);
matraz2Top.displayVolumen();

matraz2Top.transferable();
matraz2Top.draggable();
matraz2Top.attr({   content: {fill: "rgba(0, 0, 59, 1)"}});
matraz2Bottom.transferable();
matraz2Bottom.draggable();
matraz2Bottom.attr({    content: {fill: "rgba(0, 0, 59, 1)"}});
})(x,y,joinMultiple);

function AnimatePercentage(){
    var c1, c2, toggle;
    (function(x,y,rsr){
    x+=200
    y+=30
    c1 = rsr.cylinder(x, y, 10, 40, 80, 90, true, 60);
    c2 = rsr.cylinder(x+200, y, 40, 40, 80, 40, true, 30);
    c1.attr({content: {fill: "rgba(15, 55, 86, .5)"}});
    c2.attr({content: {fill: "rgba(229, 130, 0, .5)"}});
    })(x,y,animatePercentage);

    return function() {
        toggle = toggle ? false : true;        
        c1.animate({content: {fill: "rgba(15, 55, 86, .5)", percentage: toggle ? 10 : 60}});
        c2.animate({content: {fill: "rgba(229, 130, 0, .5)", percentage: toggle ? 80 : 30}});
    }    

}
var ap = AnimatePercentage();

function AnimateContent(){
    var c1, c2, toggle;
    (function(x,y,rsr){
    x+=200
    y+=30
    c1 = rsr.cylinder(x, y, 10, 40, 80, 90, true, 60);
    c2 = rsr.cylinder(x+200, y, 40, 40, 80, 40, true, 30);
    c1.attr({content: {fill: "rgba(15, 55, 86, .5)"}});
    c2.attr({content: {fill: "rgba(229, 130, 0, .5)"}});
    })(x,y,animateColor);

    return function() {
        toggle = toggle ? false : true;        
        c1.animate({content: {fill: toggle ? "rgba(242, 203, 185, .5)" : "rgba(15, 55, 86, .5)", percentage: toggle ? 10 : 60}});
        c2.animate({content: {fill: toggle ? "rgba(64, 191, 1, .5)" : "rgba(229, 130, 0, .5)", percentage: toggle ? 80 : 30}});
    }    

}
var ac = AnimateContent();

function AnimateSpeed(){
    var c1, c2, toggle;
    (function(x,y,rsr){
    x+=200
    y+=30
    c1 = rsr.cylinder(x, y, 10, 40, 80, 90, true, 60);
    c2 = rsr.cylinder(x+200, y, 40, 40, 80, 40, true, 30);
    c1.attr({content: {fill: "rgba(15, 55, 86, .5)"}});
    c2.attr({content: {fill: "rgba(229, 130, 0, .5)"}});
    })(x,y,animateSpeed);

    return function() {
        toggle = toggle ? false : true;        
        c1.animate({content: {fill: toggle ? "rgba(242, 203, 185, .5)" : "rgba(15, 55, 86, .5)", percentage: toggle ? 10 : 60, ms:2000}});
        c2.animate({content: {fill: toggle ? "rgba(64, 191, 1, .5)" : "rgba(229, 130, 0, .5)", percentage: toggle ? 80 : 30, ms: 100}});
    }    

}
var as = AnimateSpeed();

document.querySelector("#animate-percentage-button").addEventListener('click', ap);
document.querySelector("#animate-color-button").addEventListener('click', ac);
document.querySelector("#animate-speed-button").addEventListener('click', as);
