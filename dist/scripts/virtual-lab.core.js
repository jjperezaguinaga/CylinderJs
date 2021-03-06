//'use strict';

var VirtualLab = VirtualLab || {};
VirtualLab.VERSION = '0.1';

VirtualLab.Core = (function(vl, r, undefined){
  var Core = function(x, y) {
    var X = x || 0;
    var Y = y || 0;

    this.components = [];
    this.paper = null;

    this.draw = function() {
      var self = this;
      this.components.forEach(function(e) {
        self.paper.set(e.path);
      });
    };
    this.construct = function() {
      if(!this.load) {
        throw new Error("No load function specified");
      }
      this.load();
      this.draw.call(this);
      return this.paper;
    };
    this.getX = function() {
      return X;
    };
    this.getY = function() {
      return Y;
    };
  };
  return Core;
})(VirtualLab, Raphael);