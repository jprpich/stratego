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

eval("class Board {\n  constructor(){\n    this.pieces = [1,2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,'F',9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]\n    this.grid = []  \n    this.selected = \"\";\n    this.prevSelected = \"\";\n    this.distributePieces();\n  }\n\n  shuffle(a) {\n    for (let i = a.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        [a[i], a[j]] = [a[j], a[i]];\n    }\n    return a;\n  }\n\n  distributePieces(){\n    this.shuffle(this.pieces)\n    for (let j = 0; j < 4; j++) {\n      let subArr = []\n      for (let i = 0; i < 10; i++) { \n        subArr.push(this.pieces.pop())\n      }\n      this.grid.push(subArr)\n    }\n    for (let j = 0; j < 2; j++) {\n      let subArr = []\n      for (let i = 0; i < 10; i++) { \n        subArr.push(\"\")\n      }\n      this.grid.push(subArr)\n    }\n    this.pieces = [1,2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,'F',9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]\n    this.shuffle(this.pieces)\n    for (let j = 0; j < 4; j++) {\n      let subArr = []\n      for (let i = 0; i < 10; i++) { \n        subArr.push(this.pieces.pop())\n      }\n      this.grid.push(subArr)\n    }\n  }\n\n  selectPiece(row,column){\n    this.selected = this.grid[row][column]\n    this.selectedRow = row; \n    this.selectedColumn = column;\n  }\n\n  validMove(row, column, selectedRow, selectedColumn){\n    if (row != selectedRow && column != selectedColumn){\n      return false \n    }\n    if ((this.grid[row][column] === \"\") && (selectedRow +1 >= row && row +1 >= selectedRow ) && (selectedColumn +1 >= column && column +1 >= selectedColumn )) {\n      return true; \n    } else {\n      return false; \n    }\n  }\n\n\n\n  // have to keep track of newselectedPiece\n  // and oldselectedPiece \n\n  // valid move\n  // new selected has to be empty\n\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class GameView {\n  constructor(board, ctx){\n    this.board = board;\n    this.ctx = ctx;\n  }\n\n  drawTile(x, y){\n    this.ctx.fillStyle = 'brown';\n    this.ctx.fillRect(x, y, 40, 40);\n  }\n\n  drawPieces(offsetX, offsetY, x, y) {\n    \n    let row = ((y-85) / 50);\n    let column = ((x-510) / 50);\n    if (this.board.selectedRow === row && this.board.selectedColumn === column){\n      \n      let nextRow = Math.floor(((offsetY-85) / 50))\n      let nextColumn = Math.floor(((offsetX-510) / 50))\n      if (this.board.validMove(nextRow, nextColumn,row ,column )) {\n        this.board.grid[row][column] = \"\"\n        this.drawPiece('blue', 'white',this.board.grid[row][column], x, y)\n\n      } else {\n        this.drawPiece('blue', 'white',this.board.grid[row][column], x, y)\n        // this.board.selected = \"\"\n      }\n      \n    } else if (offsetX >= x -10  && offsetX < x + 30 && offsetY >= y - 5 && offsetY < y + 35 ) {\n      \n      if (this.board.selected != \"\") {\n        if (this.board.validMove(row, column,this.board.selectedRow, this.board.selectedColumn)){\n          this.drawPiece('blue', 'white',this.board.selected, x, y)\n          this.board.grid[row][column] = this.board.selected;\n          this.board.selected = \"\"\n        } else {\n          this.drawPiece('blue', 'white',this.board.grid[row][column], x, y)\n          this.board.selected = \"\"\n        }\n        \n      } else {\n        this.board.selectPiece(row, column)\n        this.drawPiece('white', 'blue',this.board.grid[row][column], x, y)\n      }   \n    } else {\n      this.drawPiece('blue', 'white', this.board.grid[row][column], x, y)\n    }\n\n  } \n\n  drawPiece(backgroundColor,textColor,val, x, y){\n    this.ctx.fillStyle = backgroundColor;\n    this.ctx.fillRect(x, y, 20, 30);\n    this.ctx.fillStyle = textColor;\n    this.ctx.font = \"20px Comic Sans MS\";\n    this.ctx.fillText(val,x+5,y+22);\n  }\n\n  paintCanvas(offsetX, offsetY){\n    let x = 500;\n    let y = 80;\n    for (let j = 0; j < 10; j++) {\n      for (let i = 0; i < 10; i++) {\n        this.drawTile(x,y);\n        x += 50\n      }\n      x = 500  \n      y += 50\n    } \n\n    x = 510;\n    y = 85;\n    for (let j = 0; j < 10; j++) {\n      for (let i = 0; i < 10; i++) {\n        this.drawPieces(offsetX, offsetY, x, y);\n        x += 50\n      }\n      x = 510  \n      y += 50\n    }\n  }\n\n  start(){\n    this.paintCanvas()\n    const canvas = document.getElementById(\"mycanvas\")\n    canvas.addEventListener(\"click\", (e) => {\n      this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n      this.paintCanvas(e.offsetX, e.offsetY)\n    })\n  }\n\n}\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n  const canvas = document.getElementById(\"mycanvas\")\n  let ctx = canvas.getContext('2d');\n  const board = new Board();\n  new GameView(board, ctx).start();\n\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });