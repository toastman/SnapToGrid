/**
 * Created by JetBrains WebStorm.
 * User: Khrystyna Skvarok
 * Date: 24.02.12
 * Time: 10:39
 */
var Grid = function(container, settings){
  var self = this;
  var _container = container;

  function drawBoard(){
    var x;
    var canvas = $('<canvas/>').attr({width: self.width, height: self.height}).appendTo(_container);
    var context = canvas.get(0).getContext("2d");

    for (x = 0; x <= self.width; x += self.step) {
        context.moveTo(0.5 + x, 0);
        context.lineTo(0.5 + x, self.height);
    }

    for (x = 0; x <= self.height; x += self.step) {
        context.moveTo(0, 0.5 + x);
        context.lineTo(self.width, 0.5 + x);
    }

    context.strokeStyle = "#6495ed";
    context.stroke();
  }

  this.snap = function(value){
    return self.step * Math.round(value / self.step);
  };

  var _init = function(){
    for (var item in settings) self[item] = settings[item];
    console.log(Grid.step, this.step, self.step);
    drawBoard();
  };

  _init();
};

Grid.prototype = {
  step: 10,
  width: 600,
  height: 400
};