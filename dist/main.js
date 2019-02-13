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
/***/ (function(module, exports, __webpack_require__) {

eval("const Piece = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n\nclass Board {\n  constructor(ctx, canvas){\n    this.ctx = ctx;\n    this.canvas = canvas;\n\n    this.tiles = []\n    this.pieces = [1,2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,'F','S','B','B','B','B','B','B',9,9,9,9,9,9,9,9,9,9,9]\n    this.createPieces()\n\n    this.tileWidth = 45;\n    this.tileHeight = 45;\n    this.tilePadding = 10;\n    this.tileOffsetTop = 50;\n    this.tileOffsetLeft = 50;\n    this.previousPiece = null;\n    this.previosRow = null;\n    this.previousColumn = null;\n    this.previousClick = true; \n\n    this.currentPlayer = \"Player 1\";\n  }\n  \n  createPieces(){\n    let piece;\n\n    for(var r=0; r<4; r++) {\n      this.tiles[r] = [];\n      for(var c=0; c<10; c++) {\n        piece = new Piece(\"Player 1\", this.pieces.pop(), \"white\", false)\n        this.tiles[r][c] = piece\n      }\n    }\n\n    for(var r=4; r<6; r++) {\n      this.tiles[r] = [];\n      for(var c=0; c<10; c++) {\n        this.tiles[r][c] = null\n      }\n    }\n\n    this.pieces = [9,2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,'F','S','B','B','B','B','B','B',9,9,9,9,9,9,9,9,9,9,1]\n    for(var r=6; r<10; r++) {\n      this.tiles[r] = [];\n      for(var c=0; c<10; c++) {\n        piece = new Piece(\"Player 2\", this.pieces.pop(), \"black\", false)\n        this.tiles[r][c] = piece\n      }\n    }\n  }\n\n  validMove(currentColumn,currentRow, previousRow,previousColumn){\n\n    const previousPlayer = this.tiles[previousRow][previousColumn].player\n    let nextPlayer;\n\n    if (this.tiles[currentRow][currentColumn]){\n      nextPlayer = this.tiles[currentRow][currentColumn].player\n    }\n    \n    if ( previousPlayer != this.currentPlayer){\n      return false;\n    }\n\n    if(previousColumn != currentColumn && previousRow != currentRow){\n      return false;\n    }\n\n    if((this.tiles[currentRow][currentColumn] == null || nextPlayer !== this.currentPlayer) && currentRow <= previousRow + 1 && currentRow >= previousRow -1 && currentColumn <= this.previousColumn + 1 && currentColumn >= this.previousColumn - 1){\n      return true \n    } else {\n      return false;\n    }\n  }\n\n  render(){\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.drawTiles();\n    this.drawCurrentPlayer();\n  }\n\n  drawTiles(){\n    for(var r=0; r<10; r++) {\n      for(var c=0; c<10; c++) {\n        var tileX = (c*(this.tileHeight+this.tilePadding))+this.tileOffsetTop;\n        var tileY = (r*(this.tileWidth+this.tilePadding))+this.tileOffsetLeft;\n        this.ctx.beginPath();\n        this.ctx.rect(tileX, tileY, this.tileWidth, this.tileHeight);\n          \n        if(this.tiles[r][c] && this.tiles[r][c].selected){\n          this.ctx.fillStyle = \"blue\"\n        } else {\n          this.ctx.fillStyle = \"red\"\n        }\n                 \n        this.ctx.fill();\n        if (this.tiles[r][c]){\n          this.ctx.fillStyle = this.tiles[r][c].color;\n          this.ctx.font = \"26px Arial\";\n          this.ctx.fillText(this.tiles[r][c].rank, tileX+15, tileY+30);\n        }\n        this.ctx.closePath();        \n      }\n    }\n  }\n\n  drawCurrentPlayer(){\n    this.ctx.font = \"30px Arial\";\n    this.ctx.fillText(this.currentPlayer + \"'s Turn!\", 20, 30);\n  }\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Game {\n  constructor(board){\n    this.board = board;\n    this.play();\n    this.board.render();\n  }\n\n  play(){\n    document.addEventListener(\"click\", (e) => {\n      let row = Math.floor(((e.offsetY-50) / 55))\n      let column = Math.floor(((e.offsetX-50) / 55))\n      if(this.board.tiles[row][column] && this.board.previousClick){\n        this.board.tiles[row][column].selected = true;\n        this.board.previousPiece = this.board.tiles[row][column];\n        this.board.previousRow = row;\n        this.board.previousColumn = column;\n        this.board.previousClick = false;\n      } else {\n        if (this.board.validMove(column, row, this.board.previousRow, this.board.previousColumn )){\n          let printMove = () => {\n            this.board.tiles[row][column] = this.board.previousPiece;\n            this.board.tiles[row][column].selected = false;\n            this.board.tiles[this.board.previousRow][this.board.previousColumn] = null;\n            this.board.currentPlayer = this.board.currentPlayer === \"Player 1\" ? \"Player 2\" : \"Player 1\"\n          }\n\n          // check to see who wins the attack \n          if (this.board.tiles[row][column]) {\n            // alert(\"attacking!\")\n            if (this.board.tiles[this.board.previousRow][this.board.previousColumn].rank < this.board.tiles[row][column].rank){\n              // alert(`${this.board.tiles[this.board.previousRow][this.board.previousColumn].player} wins!`)\n              printMove();\n            } else {\n              // alert(`${this.board.tiles[row][column].player} wins!`)\n              this.board.tiles[this.board.previousRow][this.board.previousColumn] = null;\n              this.board.tiles[row][column].selected = false;\n              this.board.currentPlayer = this.board.currentPlayer === \"Player 1\" ? \"Player 2\" : \"Player 1\"\n            }\n\n\n          } else {\n            printMove();\n          }\n\n          \n        } else {\n          this.board.tiles[this.board.previousRow][this.board.previousColumn].selected =  false;\n          alert(\"invalid move\")\n        }\n        this.board.previousClick = true;\n      }\n\n      this.board.render();\n    })\n  }\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n  var canvas = document.getElementById(\"myCanvas\");\n  var ctx = canvas.getContext(\"2d\");\n  const board = new Board(ctx, canvas)\n  new Game(board)\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/piece.js":
/*!**********************!*\
  !*** ./src/piece.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Piece{\n  constructor(player, rank, color, selected){\n    this.player = player;\n    this.rank = rank;\n    this.color = color;\n    this.selected = selected;\n  }\n}\n\nmodule.exports = Piece;\n\n//# sourceURL=webpack:///./src/piece.js?");

/***/ })

/******/ });