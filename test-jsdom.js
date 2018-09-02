var JSDOM = require('jsdom').JSDOM;
var dom = new JSDOM(
      '<!DOCTYPE html>',
      Object.assign(
        {
          pretendToBeVisual: true,
          runScripts: 'dangerously',
          url: 'http://localhost',
        },
      ),);

var global = dom.window.document.defaultView;
console.log(Object.getOwnPropertyDescriptor(global, 'localStorage'));
