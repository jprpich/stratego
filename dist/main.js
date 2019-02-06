/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Game {\n  constructor(){\n    console.log('from game constructor')\n  }\n\n  sayHello(){\n    console.log(\"hello from game sayHello\")\n  }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class GameView {\n  constructor(game, ctx){\n    this.ctx = ctx;\n    this.game = game;\n  }\n\n  drawTile(x, y){\n    this.ctx.fillStyle = 'brown';\n    this.ctx.fillRect(x, y, 40, 40);\n  }\n\n  drawCircle(clientX, clientY, x, y) {\n    if (clientX >= x - 25 && clientX < x + 25 && clientY >= y - 20 && clientY < y + 20 ) {\n      this.ctx.beginPath();\n      this.ctx.arc(x,y,15,0,2 * Math.PI);\n      this.ctx.stroke();\n      this.ctx.fillStyle = 'white';\n      this.ctx.fill();\n    } else {\n      this.ctx.beginPath();\n      this.ctx.arc(x,y,15,0,2 * Math.PI);\n      this.ctx.stroke();\n      this.ctx.fillStyle = 'blue';\n      this.ctx.fill();\n    }\n  }\n\n  paintCanvas(clientX, clientY){\n    // create 100 tiles \n    let x = 500;\n    let y = 80;\n    for (let j = 0; j < 10; j++) {\n      for (let i = 0; i < 10; i++) {\n        this.drawTile(x,y);\n        x += 50\n      }\n      x = 500  \n      y += 50\n    } \n\n    // create 40 circles \n    x = 520;\n    y = 100;\n    for (let j = 0; j < 4; j++) {\n      for (let i = 0; i < 10; i++) {\n        this.drawCircle(clientX, clientY, x, y);\n        x += 50\n      }\n      x = 520  \n      y += 50\n    }\n  }\n\n  start(){\n    // paint the starting canvas\n    this.game.sayHello()\n    this.paintCanvas()\n    const canvas = document.getElementById(\"mycanvas\")\n    canvas.addEventListener(\"click\", (e) => {\n      this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n      // repaint the canvas\n      this.paintCanvas(e.clientX, e.clientY)\n    })\n  }\n\n}\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n  const canvas = document.getElementById(\"mycanvas\")\n  let ctx = canvas.getContext('2d');\n  const game = new Game();\n  new GameView(game, ctx).start();\n\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });