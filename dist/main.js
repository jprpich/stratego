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

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Board {\n  constructor(){\n    this.pieces = [1,2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]\n    this.grid = []\n    this.distributePieces()\n  }\n\n  shuffle(a) {\n    for (let i = a.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        [a[i], a[j]] = [a[j], a[i]];\n    }\n    return a;\n  }\n\n  distributePieces(){\n    \n    this.shuffle(this.pieces)\n    for (let j = 0; j < 4; j++) {\n      let subArr = []\n      for (let i = 0; i < 10; i++) { \n        subArr.push(this.pieces.pop())\n      }\n      this.grid.push(subArr)\n    }\n  }\n\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

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

eval("class GameView {\n  constructor(game,board, ctx){\n    this.ctx = ctx;\n    this.game = game;\n    this.board = board;\n  }\n\n  drawTile(x, y){\n    // debugger\n    this.ctx.fillStyle = 'brown';\n    this.ctx.fillRect(x, y, 40, 40);\n  }\n\n  drawPiece(clientX, clientY, x, y) {\n    if (clientX >= x -10  && clientX < x + 30 && clientY >= y - 5 && clientY < y + 35 ) {\n      // base on x and y pos figure out index of board.grid \n      // figure out how to print test inside that rectangle \n      this.ctx.fillStyle = 'white';\n      this.ctx.fillRect(x, y, 20, 30);\n      this.ctx.fillStyle = \"blue\";\n      this.ctx.font = \"20px Comic Sans MS\";\n      this.ctx.fillText(this.board.grid[3][2],x+5,y+25);\n    } else {\n      this.ctx.fillStyle = 'blue';\n      this.ctx.fillRect(x, y, 20, 30);\n      this.ctx.fillStyle = \"white\";\n      this.ctx.font = \"20px Comic Sans MS\";\n      this.ctx.fillText(this.board.grid[3][2],x+5,y+25);\n    }\n  }\n\n  paintCanvas(clientX, clientY){\n    // create 100 tiles \n    let x = 500;\n    let y = 80;\n    for (let j = 0; j < 10; j++) {\n      for (let i = 0; i < 10; i++) {\n        this.drawTile(x,y);\n        x += 50\n      }\n      x = 500  \n      y += 50\n    } \n\n    // create 40 pieces \n    x = 510;\n    y = 85;\n    for (let j = 0; j < 4; j++) {\n      for (let i = 0; i < 10; i++) {\n        this.drawPiece(clientX, clientY, x, y);\n        x += 50\n      }\n      x = 510  \n      y += 50\n    }\n  }\n\n  start(){\n    // paint the starting canvas\n    this.game.sayHello()\n    this.paintCanvas()\n    const canvas = document.getElementById(\"mycanvas\")\n    canvas.addEventListener(\"click\", (e) => {\n      // debugger\n      this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n      // repaint the canvas\n      this.paintCanvas(e.offsetX, e.offsetY)\n    })\n  }\n\n}\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n  const canvas = document.getElementById(\"mycanvas\")\n  let ctx = canvas.getContext('2d');\n  const game = new Game();\n  const board = new Board();\n  new GameView(game,board, ctx).start();\n\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });