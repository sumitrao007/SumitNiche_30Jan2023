"use strict";
exports.__esModule = true;
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var circleObj = new circle_1.Circle(2);
circleObj.myArea();
circleObj.display();
var RectObj = new rectangle_1.Rectangle(2, 3);
RectObj.myArea();
RectObj.display();
