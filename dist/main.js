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

eval("const Piece = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n\nclass Board {\n  constructor(ctx, canvas){\n    this.ctx = ctx;\n    this.canvas = canvas;\n\n    this.tiles = []\n    this.pieces = [\"F\",2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,1,'S','B','B','B','B','B','B',9,9,9,9,9,9,9,9,9,9,9]\n    this.createPieces()\n\n    this.tileWidth = 70;\n    this.tileHeight = 70;\n    this.tilePadding = 0;\n    this.tileOffsetTop = 0;\n    this.tileOffsetLeft = 0;\n\n    this.previousPiece = null;\n    this.previosRow = null;\n    this.previousColumn = null;\n    this.currentPiece = null;\n    this.currentRow = null;\n    this.currentColumn = null;\n    this.previousClick = true; \n    this.currentPlayer = \"Player 1\";\n  }\n\n  shuffle(a) {\n    var j, x, i;\n    for (i = a.length - 1; i > 0; i--) {\n        j = Math.floor(Math.random() * (i + 1));\n        x = a[i];\n        a[i] = a[j];\n        a[j] = x;\n    }\n    return a;\n  }\n  \n  createPieces(){\n    let piece;\n    this.shuffle(this.pieces);\n    for(var r=0; r<4; r++) {\n      this.tiles[r] = [];\n      for(var c=0; c<10; c++) {\n        piece = new Piece(\"Player 1\", this.pieces.pop(), \"white\", false)\n        this.tiles[r][c] = piece\n      }\n    }\n\n    for(var r=4; r<6; r++) {\n      this.tiles[r] = [];\n      for(var c=0; c<10; c++) {\n        this.tiles[r][c] = null\n      }\n    }\n\n    this.pieces = [9,2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,9,'S','B','B','B','B','B','B',9,9,9,9,9,9,9,9,9,\"F\",1]\n    this.shuffle(this.pieces)\n    for(var r=6; r<10; r++) {\n      this.tiles[r] = [];\n      for(var c=0; c<10; c++) {\n        piece = new Piece(\"Player 2\", this.pieces.pop(), \"#401b0f\", false)\n        this.tiles[r][c] = piece\n      }\n    }\n  }\n\n  validMove(currentRow, currentColumn, previousRow, previousColumn){\n\n    if ( this.previousPiece.player != this.currentPlayer){\n      return false;\n    }\n\n    if(previousColumn != currentColumn && previousRow != currentRow){\n      return false;\n    }\n\n    return (\n      (this.currentPiece == null || this.currentPiece.player !== this.currentPlayer) && \n      currentRow <= previousRow + 1 && \n      currentRow >= previousRow -1 && \n      currentColumn <= this.previousColumn + 1 && \n      currentColumn >= this.previousColumn - 1\n    )\n\n  }\n\n  render(){\n    \n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    var grd = this.ctx.createLinearGradient(0, 0, 890, 0);\n    grd.addColorStop(0, \"#ccb16b\");\n    grd.addColorStop(1, \"#8a9d52\");\n    this.ctx.fillStyle = grd;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.drawTiles();\n    this.drawCurrentPlayer();\n  }\n\n  drawTiles(){\n    for(var r=0; r<10; r++) {\n      for(var c=0; c<10; c++) {\n        var tileX = (c*(this.tileHeight+this.tilePadding))+this.tileOffsetTop;\n        var tileY = (r*(this.tileWidth+this.tilePadding))+this.tileOffsetLeft;\n        this.ctx.beginPath();\n        this.ctx.rect(tileX, tileY, this.tileWidth, this.tileHeight);\n          \n        if(this.tiles[r][c] && this.tiles[r][c].selected){\n          this.ctx.fillStyle = \"#c9af74\"\n        } else {\n          this.ctx.fillStyle = \"#c7433d\"\n        }\n                 \n        this.ctx.fill();\n        this.ctx.strokeStyle = \"#401b0f\";\n        this.ctx.stroke();\n        if (this.tiles[r][c]){\n          this.ctx.fillStyle = this.tiles[r][c].color;\n          this.ctx.font = \"26px Arial\";\n          this.ctx.fillText(this.tiles[r][c].val, tileX+25, tileY+45);\n        }\n        this.ctx.closePath();        \n      }\n    }\n  }\n\n  drawCurrentPlayer(){\n    document.getElementsByClassName(\"player-turn\")[0].innerText = this.currentPlayer\n  }\n\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Game {\n  constructor(board){\n    this.board = board;\n    this.play();\n    this.board.render();\n  }\n\n  play(){\n    document.addEventListener(\"click\", (e) => {\n      let row = Math.floor(((e.offsetY) / 70))\n      let column = Math.floor(((e.offsetX) / 70))\n      this.board.currentPiece = this.board.tiles[row][column]\n\n      if(this.board.currentPiece && this.board.previousClick){\n        this.selectPiece(row, column);\n      } else {\n        if (this.board.validMove(row, column, this.board.previousRow, this.board.previousColumn )){\n          if (this.board.currentPiece) {\n            if(this.board.currentPiece.rank === \"F\"){\n              alert(`${this.board.previousPiece.player} wins!`)\n              document.location.reload();\n            }           \n            if (this.board.previousPiece.rank < this.board.currentPiece.rank){\n              this.showWin(row,column,this.board.previousRow, this.board.previousColumn);\n            } else if(this.board.previousPiece.rank === this.board.currentPiece.rank){\n              this.showTie(row,column,this.board.previousRow, this.board.previousColumn)\n            } \n            else {\n              this.showLose(this.board.previousRow, this.board.previousColumn);\n            }\n          } else {\n            this.showWin(row,column,this.board.previousRow, this.board.previousColumn);\n          }\n        } else {\n          this.board.previousPiece.selected =  false;\n          alert(\"invalid move\")\n        }\n\n        this.board.previousClick = true;\n      }\n\n      this.board.render();\n    })\n  }\n\n  showTie(row, column, previousRow, previousColumn){\n    this.board.tiles[previousRow][previousColumn] = null;\n    this.board.tiles[row][column] = null;\n    this.board.currentPiece.selected = false;\n    this.board.currentPlayer = this.board.currentPlayer === \"Player 1\" ? \"Player 2\" : \"Player 1\"\n  }\n\n  showWin(row, column, previousRow, previousColumn){\n    this.board.tiles[row][column] = this.board.previousPiece;\n    this.board.previousPiece.selected = false;\n    this.board.tiles[previousRow][previousColumn] = null;\n    this.board.currentPlayer = this.board.currentPlayer === \"Player 1\" ? \"Player 2\" : \"Player 1\"\n  }\n\n  showLose(previousRow, previousColumn){\n    this.board.tiles[previousRow][previousColumn] = null;\n    this.board.currentPiece.selected = false;\n    this.board.currentPlayer = this.board.currentPlayer === \"Player 1\" ? \"Player 2\" : \"Player 1\"\n  }\n\n  selectPiece(row, column){\n    this.board.currentPiece.selected = true;\n    this.board.previousPiece = this.board.currentPiece;\n    this.board.previousRow = row;\n    this.board.previousColumn = column;\n    this.board.previousClick = false;\n  }\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

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

eval("class Piece{\n  constructor(player, val, color, selected){\n    this.player = player;\n    this.val = val;\n    this.rank = 0;\n    this.color = color;\n    this.selected = selected;\n\n    this.asignRank(val)\n  }\n\n  asignRank(val){\n    if(val >= 0 && val <= 9){\n      this.rank = val;\n    }\n    if(val === \"S\"){\n      this.rank = 10\n    }\n  }\n\n\n}\n\nmodule.exports = Piece;\n\n//# sourceURL=webpack:///./src/piece.js?");

/***/ })

/******/ });