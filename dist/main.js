/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.scss":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.scss ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Main sections */\nbody {\n    font-family: 'Berkshire Swash', cursive;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nmain {\n    display: flex;\n    overflow: auto;\n    height: 100%;\n    background-color: #fef6e4;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    height: 60px;\n    background-color: #8bd3dd;\n    padding: 10px;\n    border-bottom: 3px solid black;\n    z-index: 1;\n} \n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80px;\n    background-color: #8bd3dd;    \n    padding: 10px;\n    border-top: 1px solid black;\n}\n\nbutton:hover {\n  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\n}\n\n/* The side navigation menu */\n.sidebar {\n    margin: 0;\n    padding: 0;\n    width: 200px;\n    background-color: #f7c1d5;\n    height: 100%;\n    overflow: auto;\n    box-shadow: 3px 0px 17px 2px rgba(0,0,0,0.75);\n  }\n  \n.sidebar li {\n  display: block;\n  color: black;\n  padding: 16px;\n  text-decoration: none;\n  cursor: pointer;\n  margin: 3px;\n  border-radius: 20px;\n}\n\n.sidebar li.active {\n  background-color: #aa3bc5;\n  color: white;\n}\n\n.sidebar li:hover:not(.active) {\n  background-color: rgb(205, 111, 255);\n  color: white;\n}\n\ndiv.content {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 10px 40px; \n  position: relative;\n}\n\ndiv.content > * {\n  margin: 5px;\n}\n\ninput, select {\n  border: 1px solid #8bd3dd;\n  border-radius: 10px;\n  padding: 3px;\n}\n\n/* On screens that are less than 700px wide, make the sidebar into a topbar */\n@media screen and (max-width: 850px) {\n  main {display: inline;}\n  .sidebar {\n    width: 100%;\n    height: auto;\n    position: relative;\n    box-shadow: none;\n  }\n  .sidebar li {float: left;}\n  div.content {margin-left: 0; min-height: 500px;}\n  div.content h6 { display: none; }\n}\n\n/* On screens that are less than 400px, display the bar vertically, instead of horizontally */\n@media screen and (max-width: 450px) {\n  .sidebar li {\n    text-align: center;\n    float: none;\n  }\n}\n\n/* New project form */\n#projectForm {\n  display: block;\n  color: black;\n  padding: 16px;\n  margin: 3px;\n  border-radius: 20px;\n  background-color: #fef6e4;\n  border-radius: 20px;\n}\n\n#projectForm input {\n  border-radius: 5px;\n  margin: 3px;\n  width: 150px;\n}\n\n#projectForm button {\n  font-family: inherit;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  background-color: #aa3bc5;\n  cursor: pointer;\n  width: 60px;\n  height: 30px;\n}\n\n/* Main Content Area */\n\n#deleteProjectButton, .deleteTaskButton, #taskFormCancel {\n  color: white;\n  font-family: inherit;\n  border-radius: 5px;\n  background-color: #ff0000;\n  cursor: pointer;\n  width: 100px;\n  min-height: 30px;\n  border: none;\n}\n\n.deleteTaskButton {\n  width: 80px;\n}\n\n#taskFormCancel {\n  margin-top: 20px;\n}\n\n#addTaskButton, .editTaskButton {\n  font-family: inherit;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  background-color: #aa3bc5;\n  cursor: pointer;\n  min-height: 30px;\n  width: 80px;\n}\n\n.editTaskButton {\n  background-color: #8bd3dd;\n  color: black;\n}\n\n.content li {\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid black;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n\n\n/* Task Form */\n\n#taskForm {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  height: 80%;\n  max-width: 400px;\n  max-height: 400px;\n  background-color: #fdeabe;\n  box-shadow: 3px 0px 17px 2px rgba(0,0,0,0.75);\n  border-radius: 15px;\n  z-index: 1;\n}\n\n#taskForm input, select {\n  margin-bottom: 20px;\n  margin-top: 3px;\n}\n\n#taskFormSubmit {\n  color: white;\n  font-family: inherit;\n  border: none;\n  border-radius: 5px;\n  background-color: #aa3bc5;\n  cursor: pointer;\n  height: 30px;\n  width: 100px;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;IACI,uCAAuC;IACvC,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,cAAc;IACd,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,2BAA2B;AAC/B;;AAEA;EACE,4CAA4C;AAC9C;;AAEA,6BAA6B;AAC7B;IACI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,cAAc;IACd,6CAA6C;EAC/C;;AAEF;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,eAAe;EACf,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;AACd;;AAEA,6EAA6E;AAC7E;EACE,MAAM,eAAe,CAAC;EACtB;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;EAClB;EACA,aAAa,WAAW,CAAC;EACzB,aAAa,cAAc,EAAE,iBAAiB,CAAC;EAC/C,iBAAiB,aAAa,EAAE;AAClC;;AAEA,6FAA6F;AAC7F;EACE;IACE,kBAAkB;IAClB,WAAW;EACb;AACF;;AAEA,qBAAqB;AACrB;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA,sBAAsB;;AAEtB;EACE,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,8BAA8B;EAC9B,8BAA8B;EAC9B,qBAAqB;AACvB;;;;AAIA,cAAc;;AAEd;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;EACzB,6CAA6C;EAC7C,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,YAAY;AACd","sourcesContent":["/* Main sections */\nbody {\n    font-family: 'Berkshire Swash', cursive;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nmain {\n    display: flex;\n    overflow: auto;\n    height: 100%;\n    background-color: #fef6e4;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    height: 60px;\n    background-color: #8bd3dd;\n    padding: 10px;\n    border-bottom: 3px solid black;\n    z-index: 1;\n} \n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80px;\n    background-color: #8bd3dd;    \n    padding: 10px;\n    border-top: 1px solid black;\n}\n\nbutton:hover {\n  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\n}\n\n/* The side navigation menu */\n.sidebar {\n    margin: 0;\n    padding: 0;\n    width: 200px;\n    background-color: #f7c1d5;\n    height: 100%;\n    overflow: auto;\n    box-shadow: 3px 0px 17px 2px rgba(0,0,0,0.75);\n  }\n  \n.sidebar li {\n  display: block;\n  color: black;\n  padding: 16px;\n  text-decoration: none;\n  cursor: pointer;\n  margin: 3px;\n  border-radius: 20px;\n}\n\n.sidebar li.active {\n  background-color: #aa3bc5;\n  color: white;\n}\n\n.sidebar li:hover:not(.active) {\n  background-color: rgb(205, 111, 255);\n  color: white;\n}\n\ndiv.content {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 10px 40px; \n  position: relative;\n}\n\ndiv.content > * {\n  margin: 5px;\n}\n\ninput, select {\n  border: 1px solid #8bd3dd;\n  border-radius: 10px;\n  padding: 3px;\n}\n\n/* On screens that are less than 700px wide, make the sidebar into a topbar */\n@media screen and (max-width: 850px) {\n  main {display: inline;}\n  .sidebar {\n    width: 100%;\n    height: auto;\n    position: relative;\n    box-shadow: none;\n  }\n  .sidebar li {float: left;}\n  div.content {margin-left: 0; min-height: 500px;}\n  div.content h6 { display: none; }\n}\n\n/* On screens that are less than 400px, display the bar vertically, instead of horizontally */\n@media screen and (max-width: 450px) {\n  .sidebar li {\n    text-align: center;\n    float: none;\n  }\n}\n\n/* New project form */\n#projectForm {\n  display: block;\n  color: black;\n  padding: 16px;\n  margin: 3px;\n  border-radius: 20px;\n  background-color: #fef6e4;\n  border-radius: 20px;\n}\n\n#projectForm input {\n  border-radius: 5px;\n  margin: 3px;\n  width: 150px;\n}\n\n#projectForm button {\n  font-family: inherit;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  background-color: #aa3bc5;\n  cursor: pointer;\n  width: 60px;\n  height: 30px;\n}\n\n/* Main Content Area */\n\n#deleteProjectButton, .deleteTaskButton, #taskFormCancel {\n  color: white;\n  font-family: inherit;\n  border-radius: 5px;\n  background-color: #ff0000;\n  cursor: pointer;\n  width: 100px;\n  min-height: 30px;\n  border: none;\n}\n\n.deleteTaskButton {\n  width: 80px;\n}\n\n#taskFormCancel {\n  margin-top: 20px;\n}\n\n#addTaskButton, .editTaskButton {\n  font-family: inherit;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  background-color: #aa3bc5;\n  cursor: pointer;\n  min-height: 30px;\n  width: 80px;\n}\n\n.editTaskButton {\n  background-color: #8bd3dd;\n  color: black;\n}\n\n.content li {\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid black;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n\n\n/* Task Form */\n\n#taskForm {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  height: 80%;\n  max-width: 400px;\n  max-height: 400px;\n  background-color: #fdeabe;\n  box-shadow: 3px 0px 17px 2px rgba(0,0,0,0.75);\n  border-radius: 15px;\n  z-index: 1;\n}\n\n#taskForm input, select {\n  margin-bottom: 20px;\n  margin-top: 3px;\n}\n\n#taskFormSubmit {\n  color: white;\n  font-family: inherit;\n  border: none;\n  border-radius: 5px;\n  background-color: #aa3bc5;\n  cursor: pointer;\n  height: 30px;\n  width: 100px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContent": () => (/* binding */ renderContent)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



function renderContent () {
    const content = document.querySelector('.content')
    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.clearElement)(content)

    const currentProject = _index__WEBPACK_IMPORTED_MODULE_0__.projects.find(project => {
        return project.id == _index__WEBPACK_IMPORTED_MODULE_0__.projectId 
    })

    const currentProjectH2 = document.createElement('h2')
    currentProjectH2.textContent = currentProject.name
    content.append(currentProjectH2)

    if (currentProject.id > 1) {
        const deleteProjectButton = document.createElement('button')
        deleteProjectButton.textContent = 'Delete Project'
        deleteProjectButton.id = 'deleteProjectButton'
        content.append(deleteProjectButton)

        deleteProjectButton.addEventListener('click', () => {
            _index__WEBPACK_IMPORTED_MODULE_0__.projects.splice(_index__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(project => project.id === currentProject.id), 1)
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.setProjectId)(0)
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.saveProjects)()
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.renderProjects)()
            if (_index__WEBPACK_IMPORTED_MODULE_0__.projectId > 0) { renderContent() }
            else { (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)() }
        })
    }
    function renderTasks () {

        const headTaskLi = document.createElement('li')
        headTaskLi.id = 'headTaskLi'
        content.append(headTaskLi)
        const headTitle = document.createElement('h3')
        headTitle.textContent = 'Name'
        const headDescription = document.createElement('h6')
        headDescription.textContent = 'Description'
        const headDueDate = document.createElement('h6')
        headDueDate.textContent = 'Due Date'
        const headPriority = document.createElement('h6')
        headPriority.textContent = 'Priority'
        const placer = document.createElement('h6')
        placer.textContent = 'this is a placeholder space, should have used a table :-P'
        placer.style.visibility = 'hidden'
        headTaskLi.append(headTitle, headDescription, headDueDate, headPriority, placer)

        currentProject.tasks.forEach(task => {
            const taskLi = document.createElement('li')
            content.append(taskLi)
            const title = document.createElement('h3')
            title.textContent = task.title
            const description = document.createElement('h6')
            description.textContent = task.description
            const dueDate = document.createElement('h6')
            dueDate.textContent = task.dueDate
            const priority = document.createElement('h6')
            priority.textContent = task.priority
            taskLi.append(title, description, dueDate, priority)

            const editTaskButton = document.createElement('button')
            editTaskButton.textContent = 'View/Edit'
            editTaskButton.classList.add('editTaskButton')
            editTaskButton.id = 'e' + task.id
            taskLi.append(editTaskButton)

            editTaskButton.addEventListener('click', event =>{
                const currentTaskId = event.target.id.substring(1)
                const currentTaskObj = currentProject.tasks.find(tasks => tasks.id == currentTaskId)
                openTaskForm(currentTaskObj)
            })

            const deleteTaskButton = document.createElement('button')
            deleteTaskButton.textContent = 'Delete Task'
            deleteTaskButton.classList.add('deleteTaskButton')
            deleteTaskButton.id = task.id
            taskLi.append(deleteTaskButton)

            deleteTaskButton.addEventListener('click', event => {
                currentProject.tasks.splice(currentProject.tasks.findIndex(tasks => tasks.id == event.target.id), 1)
                ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.saveProjects)()
                renderContent()
            })
        })
    }
    if (currentProject.id > 0) { renderTasks() }

    // If currentTaskObj is passed to this, it will act as an edit window
    function openTaskForm (currentTaskObj) {
        const taskForm = document.createElement('form')
        taskForm.id = 'taskForm'
        taskForm.reset()
        content.append(taskForm)
        const head = document.createElement('h3')
        head.textContent = 'Add New Task'

        const nameLabel = document.createElement('label')
        nameLabel.for = 'taskName'
        nameLabel.textContent = 'Name'
        const nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.id = 'taskName'
        nameInput.name = 'taskName'
        nameInput.required = true

        const descriptionLabel = document.createElement('label')
        descriptionLabel.for = 'taskDescription'
        descriptionLabel.textContent = 'Description'
        const descriptionInput = document.createElement('input')
        descriptionInput.type = 'text'
        descriptionInput.id = 'taskDescription'
        descriptionInput.name = 'taskDescription'

        const dueDateLabel = document.createElement('label')
        dueDateLabel.for = 'taskDueDate'
        dueDateLabel.textContent = 'Due Date'
        const dueDateInput = document.createElement('input')
        dueDateInput.type = 'date'
        dueDateInput.id = 'taskDueDate'
        dueDateInput.name = 'taskDueDate'

        const priorityLabel = document.createElement('select')
        priorityLabel.textContent = 'Priority'
        priorityLabel.id = 'taskPriority'
        priorityLabel.name = 'taskPriority'

        const low = document.createElement('option')
        low.selected = true
        low.value = 'Low'
        low.textContent = 'Low'
        const medium = document.createElement('option')
        medium.value = 'Medium'
        medium.textContent = 'Medium'
        const high = document.createElement('option')
        high.value = 'High'
        high.textContent = 'High'

        const taskSubmit = document.createElement('button')
        taskSubmit.id = 'taskFormSubmit'
        taskSubmit.type = 'submit'
        taskSubmit.textContent = 'Submit'

        const taskCancel = document.createElement('button')
        taskCancel.id = 'taskFormCancel'
        taskCancel.textContent = 'Cancel'

        taskForm.append(head, nameLabel, nameInput, descriptionLabel, descriptionInput, dueDateLabel, dueDateInput, priorityLabel, taskSubmit, taskCancel)
        priorityLabel.append(low, medium, high)

        taskForm.addEventListener('submit', event => {
            event.preventDefault()
            if (nameInput.value == '' || nameInput.value == null) return 
            if (currentTaskObj.title != undefined) {
                currentProject.tasks.splice(currentProject.tasks.findIndex(tasks => tasks.id == currentTaskObj.id), 1)
            }
            const newTask = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createTask)(nameInput.value, descriptionInput.value, dueDateInput.value, priorityLabel.value)
            currentProject.tasks.push(newTask)
            ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.saveProjects)()
            renderContent()
        })

        taskCancel.addEventListener('click', event => {
            event.preventDefault()
            taskForm.style.display = 'none'
        })
        // This fills the fields to view/edit
        if (currentTaskObj.title != undefined) {
            head.textContent = 'View/Edit Task'
            nameInput.value = currentTaskObj.title
            descriptionInput.value = currentTaskObj.description
            dueDateInput.value = currentTaskObj.dueDate
            priorityLabel.value = currentTaskObj.priority
        }
    }

    function addTask () {
        const addTaskButton = document.createElement('button')
        addTaskButton.id = 'addTaskButton'
        addTaskButton.textContent = '+ New Task'
        content.append(addTaskButton)

        addTaskButton.addEventListener('click', openTaskForm)
    }
    if (currentProject.id > 0) { addTask() }
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function renderHome () {
    const content = document.querySelector('.content')
    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.clearElement)(content)

    const weekH2 = document.createElement('h2')
    weekH2.textContent = 'Due This Week'
    content.append(weekH2)

    const priorityH2 = document.createElement('h2')
    priorityH2.textContent = 'High Priority'
    content.append(priorityH2)
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearElement": () => (/* binding */ clearElement),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "projectId": () => (/* binding */ projectId),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "saveProjects": () => (/* binding */ saveProjects),
/* harmony export */   "setProjectId": () => (/* binding */ setProjectId)
/* harmony export */ });
/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.scss */ "./src/style.scss");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");




const projectList = document.querySelector('#projectList')
const projectForm = document.querySelector('#projectForm')
const projectInput = document.querySelector('#projectInput')

const LOCAL_STORAGE_KEY = 'todo.projects'
const LOCAL_STORAGE_PROJECT_ID = 'todo.projectId'

let projects =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || 
[{id: 0, name: 'Home', task: []}, {id: 1, name: 'General', tasks: [{pId: 2, id: 4, title: 'Test Task', description: 'This is a test', dueDate: '10/31/2022', priority: 'Low' }, {pId: 3, id: 5, title: 'Test Num 2', description: 'This is another test', dueDate: '10/25/2022', priority: 'Medium' }]}]

let projectId = localStorage.getItem(LOCAL_STORAGE_PROJECT_ID) || 0

function setProjectId(value) {
    projectId = value
}

projectList.addEventListener('click', event => {
    if (event.target.tagName.toLowerCase() == 'li') {
        projectId = event.target.dataset.projectId
        if (projectId == 0) {
            saveProjects()
            renderProjects()
            ;(0,_home__WEBPACK_IMPORTED_MODULE_2__.renderHome)()
            return
        }
        saveProjects()
        renderProjects()
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderContent)()
    }
})

projectForm.addEventListener('submit', event => {
    event.preventDefault()
    const projectName = projectInput.value
    if (projectName === '' || projectName === null) return
    const project = createProject(projectName)
    projectInput.value = null
    projects.push(project)
    saveProjects()
    renderProjects()
})

function createTask(title, description, dueDate , priority) {
    if (description == '') description = 'No description'
    if (dueDate == '') dueDate = 'No due date'
    return {pId: projectId, id: Date.now(), title, description, dueDate, priority}
}

function createProject(name) {
    return {id: Date.now(), name: name, tasks: []}
}

function saveProjects() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects))
    localStorage.setItem(LOCAL_STORAGE_PROJECT_ID, projectId)
}

function renderProjects () {
    clearElement(projectList)
    projects.forEach(project => {
        const newProject = document.createElement('li')
        newProject.dataset.projectId = project.id
        newProject.textContent = project.name
        if (project.id == projectId) {
            newProject.classList.add('active')
        }
        projectList.append(newProject)
    })

}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

renderProjects()

if (projectId > 0) { (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderContent)() }
else { (0,_home__WEBPACK_IMPORTED_MODULE_2__.renderHome)() }



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EscUVBQXFFLDhDQUE4QyxvQkFBb0Isb0JBQW9CLDZCQUE2QixxQ0FBcUMsR0FBRyxVQUFVLG9CQUFvQixxQkFBcUIsbUJBQW1CLGdDQUFnQyxHQUFHLFlBQVksb0JBQW9CLDBCQUEwQiw0QkFBNEIsbUJBQW1CLGdDQUFnQyxvQkFBb0IscUNBQXFDLGlCQUFpQixJQUFJLFlBQVksb0JBQW9CLDBCQUEwQiw4QkFBOEIsbUJBQW1CLG9DQUFvQyxvQkFBb0Isa0NBQWtDLEdBQUcsa0JBQWtCLGlEQUFpRCxHQUFHLDhDQUE4QyxnQkFBZ0IsaUJBQWlCLG1CQUFtQixnQ0FBZ0MsbUJBQW1CLHFCQUFxQixvREFBb0QsS0FBSyxtQkFBbUIsbUJBQW1CLGlCQUFpQixrQkFBa0IsMEJBQTBCLG9CQUFvQixnQkFBZ0Isd0JBQXdCLEdBQUcsd0JBQXdCLDhCQUE4QixpQkFBaUIsR0FBRyxvQ0FBb0MseUNBQXlDLGlCQUFpQixHQUFHLGlCQUFpQixrQkFBa0IsWUFBWSwyQkFBMkIsd0JBQXdCLHVCQUF1QixHQUFHLHFCQUFxQixnQkFBZ0IsR0FBRyxtQkFBbUIsOEJBQThCLHdCQUF3QixpQkFBaUIsR0FBRywwSEFBMEgsVUFBVSxpQkFBaUIsY0FBYyxrQkFBa0IsbUJBQW1CLHlCQUF5Qix1QkFBdUIsS0FBSyxpQkFBaUIsYUFBYSxpQkFBaUIsZ0JBQWdCLG1CQUFtQixxQkFBcUIsZ0JBQWdCLEdBQUcsMElBQTBJLGlCQUFpQix5QkFBeUIsa0JBQWtCLEtBQUssR0FBRywwQ0FBMEMsbUJBQW1CLGlCQUFpQixrQkFBa0IsZ0JBQWdCLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLEdBQUcsd0JBQXdCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLEdBQUcseUJBQXlCLHlCQUF5QixpQkFBaUIsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsb0JBQW9CLGdCQUFnQixpQkFBaUIsR0FBRyx5RkFBeUYsaUJBQWlCLHlCQUF5Qix1QkFBdUIsOEJBQThCLG9CQUFvQixpQkFBaUIscUJBQXFCLGlCQUFpQixHQUFHLHVCQUF1QixnQkFBZ0IsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcscUNBQXFDLHlCQUF5QixpQkFBaUIsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsb0JBQW9CLHFCQUFxQixnQkFBZ0IsR0FBRyxxQkFBcUIsOEJBQThCLGlCQUFpQixHQUFHLGlCQUFpQixrQkFBa0IsZ0JBQWdCLG1DQUFtQyxtQ0FBbUMsMEJBQTBCLEdBQUcsc0NBQXNDLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHVCQUF1QixhQUFhLGNBQWMscUNBQXFDLGVBQWUsZ0JBQWdCLHFCQUFxQixzQkFBc0IsOEJBQThCLGtEQUFrRCx3QkFBd0IsZUFBZSxHQUFHLDZCQUE2Qix3QkFBd0Isb0JBQW9CLEdBQUcscUJBQXFCLGlCQUFpQix5QkFBeUIsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsb0JBQW9CLGlCQUFpQixpQkFBaUIsR0FBRyxPQUFPLHdGQUF3RixNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLG9CQUFvQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxvQkFBb0IsaUNBQWlDLHVCQUF1QixPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxvREFBb0QsOENBQThDLG9CQUFvQixvQkFBb0IsNkJBQTZCLHFDQUFxQyxHQUFHLFVBQVUsb0JBQW9CLHFCQUFxQixtQkFBbUIsZ0NBQWdDLEdBQUcsWUFBWSxvQkFBb0IsMEJBQTBCLDRCQUE0QixtQkFBbUIsZ0NBQWdDLG9CQUFvQixxQ0FBcUMsaUJBQWlCLElBQUksWUFBWSxvQkFBb0IsMEJBQTBCLDhCQUE4QixtQkFBbUIsb0NBQW9DLG9CQUFvQixrQ0FBa0MsR0FBRyxrQkFBa0IsaURBQWlELEdBQUcsOENBQThDLGdCQUFnQixpQkFBaUIsbUJBQW1CLGdDQUFnQyxtQkFBbUIscUJBQXFCLG9EQUFvRCxLQUFLLG1CQUFtQixtQkFBbUIsaUJBQWlCLGtCQUFrQiwwQkFBMEIsb0JBQW9CLGdCQUFnQix3QkFBd0IsR0FBRyx3QkFBd0IsOEJBQThCLGlCQUFpQixHQUFHLG9DQUFvQyx5Q0FBeUMsaUJBQWlCLEdBQUcsaUJBQWlCLGtCQUFrQixZQUFZLDJCQUEyQix3QkFBd0IsdUJBQXVCLEdBQUcscUJBQXFCLGdCQUFnQixHQUFHLG1CQUFtQiw4QkFBOEIsd0JBQXdCLGlCQUFpQixHQUFHLDBIQUEwSCxVQUFVLGlCQUFpQixjQUFjLGtCQUFrQixtQkFBbUIseUJBQXlCLHVCQUF1QixLQUFLLGlCQUFpQixhQUFhLGlCQUFpQixnQkFBZ0IsbUJBQW1CLHFCQUFxQixnQkFBZ0IsR0FBRywwSUFBMEksaUJBQWlCLHlCQUF5QixrQkFBa0IsS0FBSyxHQUFHLDBDQUEwQyxtQkFBbUIsaUJBQWlCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLDhCQUE4Qix3QkFBd0IsR0FBRyx3QkFBd0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsR0FBRyx5QkFBeUIseUJBQXlCLGlCQUFpQixpQkFBaUIsdUJBQXVCLDhCQUE4QixvQkFBb0IsZ0JBQWdCLGlCQUFpQixHQUFHLHlGQUF5RixpQkFBaUIseUJBQXlCLHVCQUF1Qiw4QkFBOEIsb0JBQW9CLGlCQUFpQixxQkFBcUIsaUJBQWlCLEdBQUcsdUJBQXVCLGdCQUFnQixHQUFHLHFCQUFxQixxQkFBcUIsR0FBRyxxQ0FBcUMseUJBQXlCLGlCQUFpQixpQkFBaUIsdUJBQXVCLDhCQUE4QixvQkFBb0IscUJBQXFCLGdCQUFnQixHQUFHLHFCQUFxQiw4QkFBOEIsaUJBQWlCLEdBQUcsaUJBQWlCLGtCQUFrQixnQkFBZ0IsbUNBQW1DLG1DQUFtQywwQkFBMEIsR0FBRyxzQ0FBc0Msa0JBQWtCLDJCQUEyQixrQkFBa0IsdUJBQXVCLGFBQWEsY0FBYyxxQ0FBcUMsZUFBZSxnQkFBZ0IscUJBQXFCLHNCQUFzQiw4QkFBOEIsa0RBQWtELHdCQUF3QixlQUFlLEdBQUcsNkJBQTZCLHdCQUF3QixvQkFBb0IsR0FBRyxxQkFBcUIsaUJBQWlCLHlCQUF5QixpQkFBaUIsdUJBQXVCLDhCQUE4QixvQkFBb0IsaUJBQWlCLGlCQUFpQixHQUFHLG1CQUFtQjtBQUN6L1Q7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvSDtBQUNqRjs7QUFFbkM7QUFDQTtBQUNBLElBQUkscURBQVk7O0FBRWhCLDJCQUEyQixpREFBYTtBQUN4Qyw2QkFBNkIsNkNBQVM7QUFDdEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksbURBQWUsQ0FBQyxzREFBa0I7QUFDOUMsWUFBWSxxREFBWTtBQUN4QixZQUFZLHFEQUFZO0FBQ3hCLFlBQVksdURBQWM7QUFDMUIsZ0JBQWdCLDZDQUFTLFFBQVE7QUFDakMsbUJBQW1CLGlEQUFVO0FBQzdCLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHFEQUFZO0FBQzVCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrREFBVTtBQUN0QztBQUNBLFlBQVkscURBQVk7QUFDeEI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pMZ0Q7O0FBRWhEO0FBQ0E7QUFDQSxJQUFJLHFEQUFZOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjJCO0FBQ1c7QUFDRjs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDhCQUE4QixHQUFHLGlDQUFpQywwR0FBMEcsR0FBRyxvSEFBb0gsRUFBRTs7QUFFdlM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFhO0FBQ3JCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsbURBQWE7QUFDbEMsT0FBTyxpREFBVTs7Ozs7Ozs7VUNwRmpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzg0NmEiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNYWluIHNlY3Rpb25zICovXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmVya3NoaXJlIFN3YXNoJywgY3Vyc2l2ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjZlNDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YmQzZGQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gICAgei1pbmRleDogMTtcXG59IFxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YmQzZGQ7ICAgIFxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcXG59XFxuXFxuLyogVGhlIHNpZGUgbmF2aWdhdGlvbiBtZW51ICovXFxuLnNpZGViYXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3YzFkNTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYm94LXNoYWRvdzogM3B4IDBweCAxN3B4IDJweCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgfVxcbiAgXFxuLnNpZGViYXIgbGkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhciBsaS5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhM2JjNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXIgbGk6aG92ZXI6bm90KC5hY3RpdmUpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDExMSwgMjU1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweCA0MHB4OyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2LmNvbnRlbnQgPiAqIHtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4YmQzZGQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4vKiBPbiBzY3JlZW5zIHRoYXQgYXJlIGxlc3MgdGhhbiA3MDBweCB3aWRlLCBtYWtlIHRoZSBzaWRlYmFyIGludG8gYSB0b3BiYXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgbWFpbiB7ZGlzcGxheTogaW5saW5lO31cXG4gIC5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgfVxcbiAgLnNpZGViYXIgbGkge2Zsb2F0OiBsZWZ0O31cXG4gIGRpdi5jb250ZW50IHttYXJnaW4tbGVmdDogMDsgbWluLWhlaWdodDogNTAwcHg7fVxcbiAgZGl2LmNvbnRlbnQgaDYgeyBkaXNwbGF5OiBub25lOyB9XFxufVxcblxcbi8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgbGVzcyB0aGFuIDQwMHB4LCBkaXNwbGF5IHRoZSBiYXIgdmVydGljYWxseSwgaW5zdGVhZCBvZiBob3Jpem9udGFsbHkgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLnNpZGViYXIgbGkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgfVxcbn1cXG5cXG4vKiBOZXcgcHJvamVjdCBmb3JtICovXFxuI3Byb2plY3RGb3JtIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIG1hcmdpbjogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWY2ZTQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4jcHJvamVjdEZvcm0gaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAzcHg7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSBidXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEzYmM1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi8qIE1haW4gQ29udGVudCBBcmVhICovXFxuXFxuI2RlbGV0ZVByb2plY3RCdXR0b24sIC5kZWxldGVUYXNrQnV0dG9uLCAjdGFza0Zvcm1DYW5jZWwge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZVRhc2tCdXR0b24ge1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbiN0YXNrRm9ybUNhbmNlbCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4jYWRkVGFza0J1dHRvbiwgLmVkaXRUYXNrQnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhM2JjNTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuLmVkaXRUYXNrQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmQzZGQ7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb250ZW50IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuXFxuLyogVGFzayBGb3JtICovXFxuXFxuI3Rhc2tGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlYWJlO1xcbiAgYm94LXNoYWRvdzogM3B4IDBweCAxN3B4IDJweCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiN0YXNrRm9ybSBpbnB1dCwgc2VsZWN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbiN0YXNrRm9ybVN1Ym1pdCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTNiYzU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjtBQUNsQjtJQUNJLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBLDZCQUE2QjtBQUM3QjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLDZDQUE2QztFQUMvQzs7QUFFRjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBLDZFQUE2RTtBQUM3RTtFQUNFLE1BQU0sZUFBZSxDQUFDO0VBQ3RCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0EsYUFBYSxXQUFXLENBQUM7RUFDekIsYUFBYSxjQUFjLEVBQUUsaUJBQWlCLENBQUM7RUFDL0MsaUJBQWlCLGFBQWEsRUFBRTtBQUNsQzs7QUFFQSw2RkFBNkY7QUFDN0Y7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7QUFDRjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7Ozs7QUFJQSxjQUFjOztBQUVkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsNkNBQTZDO0VBQzdDLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTWFpbiBzZWN0aW9ucyAqL1xcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0JlcmtzaGlyZSBTd2FzaCcsIGN1cnNpdmU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWY2ZTQ7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJkM2RkO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHotaW5kZXg6IDE7XFxufSBcXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJkM2RkOyAgICBcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XFxufVxcblxcbi8qIFRoZSBzaWRlIG5hdmlnYXRpb24gbWVudSAqL1xcbi5zaWRlYmFyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2MxZDU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDNweCAwcHggMTdweCAycHggcmdiYSgwLDAsMCwwLjc1KTtcXG4gIH1cXG4gIFxcbi5zaWRlYmFyIGxpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnNpZGViYXIgbGkuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTNiYzU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyIGxpOmhvdmVyOm5vdCguYWN0aXZlKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAxMTEsIDI1NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmRpdi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHggNDBweDsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5jb250ZW50ID4gKiB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuaW5wdXQsIHNlbGVjdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOGJkM2RkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuXFxuLyogT24gc2NyZWVucyB0aGF0IGFyZSBsZXNzIHRoYW4gNzAwcHggd2lkZSwgbWFrZSB0aGUgc2lkZWJhciBpbnRvIGEgdG9wYmFyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4gIG1haW4ge2Rpc3BsYXk6IGlubGluZTt9XFxuICAuc2lkZWJhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG4gIC5zaWRlYmFyIGxpIHtmbG9hdDogbGVmdDt9XFxuICBkaXYuY29udGVudCB7bWFyZ2luLWxlZnQ6IDA7IG1pbi1oZWlnaHQ6IDUwMHB4O31cXG4gIGRpdi5jb250ZW50IGg2IHsgZGlzcGxheTogbm9uZTsgfVxcbn1cXG5cXG4vKiBPbiBzY3JlZW5zIHRoYXQgYXJlIGxlc3MgdGhhbiA0MDBweCwgZGlzcGxheSB0aGUgYmFyIHZlcnRpY2FsbHksIGluc3RlYWQgb2YgaG9yaXpvbnRhbGx5ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC5zaWRlYmFyIGxpIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gIH1cXG59XFxuXFxuLyogTmV3IHByb2plY3QgZm9ybSAqL1xcbiNwcm9qZWN0Rm9ybSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBtYXJnaW46IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmU0O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI3Byb2plY3RGb3JtIGlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogM3B4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jcHJvamVjdEZvcm0gYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhM2JjNTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4vKiBNYWluIENvbnRlbnQgQXJlYSAqL1xcblxcbiNkZWxldGVQcm9qZWN0QnV0dG9uLCAuZGVsZXRlVGFza0J1dHRvbiwgI3Rhc2tGb3JtQ2FuY2VsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWxldGVUYXNrQnV0dG9uIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4jdGFza0Zvcm1DYW5jZWwge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b24sIC5lZGl0VGFza0J1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTNiYzU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5lZGl0VGFza0J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJkM2RkO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29udGVudCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcblxcblxcbi8qIFRhc2sgRm9ybSAqL1xcblxcbiN0YXNrRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZWFiZTtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMTdweCAycHggcmdiYSgwLDAsMCwwLjc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jdGFza0Zvcm0gaW5wdXQsIHNlbGVjdCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4jdGFza0Zvcm1TdWJtaXQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEzYmM1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY2xlYXJFbGVtZW50LCBzYXZlUHJvamVjdHMsIHJlbmRlclByb2plY3RzLCBjcmVhdGVUYXNrLCBwcm9qZWN0cywgcHJvamVjdElkLCBzZXRQcm9qZWN0SWQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tICcuL2hvbWUnXG5cbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnQgKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgY2xlYXJFbGVtZW50KGNvbnRlbnQpXG5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0LmlkID09IHByb2plY3RJZCBcbiAgICB9KVxuXG4gICAgY29uc3QgY3VycmVudFByb2plY3RIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjdXJyZW50UHJvamVjdEgyLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QubmFtZVxuICAgIGNvbnRlbnQuYXBwZW5kKGN1cnJlbnRQcm9qZWN0SDIpXG5cbiAgICBpZiAoY3VycmVudFByb2plY3QuaWQgPiAxKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0J1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmlkID0gJ2RlbGV0ZVByb2plY3RCdXR0b24nXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGRlbGV0ZVByb2plY3RCdXR0b24pXG5cbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBjdXJyZW50UHJvamVjdC5pZCksIDEpXG4gICAgICAgICAgICBzZXRQcm9qZWN0SWQoMClcbiAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpXG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpXG4gICAgICAgICAgICBpZiAocHJvamVjdElkID4gMCkgeyByZW5kZXJDb250ZW50KCkgfVxuICAgICAgICAgICAgZWxzZSB7IHJlbmRlckhvbWUoKSB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tzICgpIHtcblxuICAgICAgICBjb25zdCBoZWFkVGFza0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBoZWFkVGFza0xpLmlkID0gJ2hlYWRUYXNrTGknXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRUYXNrTGkpXG4gICAgICAgIGNvbnN0IGhlYWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgaGVhZFRpdGxlLnRleHRDb250ZW50ID0gJ05hbWUnXG4gICAgICAgIGNvbnN0IGhlYWREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JylcbiAgICAgICAgaGVhZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJ1xuICAgICAgICBjb25zdCBoZWFkRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JylcbiAgICAgICAgaGVhZER1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnXG4gICAgICAgIGNvbnN0IGhlYWRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JylcbiAgICAgICAgaGVhZFByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5J1xuICAgICAgICBjb25zdCBwbGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpXG4gICAgICAgIHBsYWNlci50ZXh0Q29udGVudCA9ICd0aGlzIGlzIGEgcGxhY2Vob2xkZXIgc3BhY2UsIHNob3VsZCBoYXZlIHVzZWQgYSB0YWJsZSA6LVAnXG4gICAgICAgIHBsYWNlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICAgICAgaGVhZFRhc2tMaS5hcHBlbmQoaGVhZFRpdGxlLCBoZWFkRGVzY3JpcHRpb24sIGhlYWREdWVEYXRlLCBoZWFkUHJpb3JpdHksIHBsYWNlcilcblxuICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgY29udGVudC5hcHBlbmQodGFza0xpKVxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGVcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKVxuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKVxuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZVxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpXG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHlcbiAgICAgICAgICAgIHRhc2tMaS5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSlcblxuICAgICAgICAgICAgY29uc3QgZWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgZWRpdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnVmlldy9FZGl0J1xuICAgICAgICAgICAgZWRpdFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdFRhc2tCdXR0b24nKVxuICAgICAgICAgICAgZWRpdFRhc2tCdXR0b24uaWQgPSAnZScgKyB0YXNrLmlkXG4gICAgICAgICAgICB0YXNrTGkuYXBwZW5kKGVkaXRUYXNrQnV0dG9uKVxuXG4gICAgICAgICAgICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrSWQgPSBldmVudC50YXJnZXQuaWQuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRhc2tPYmogPSBjdXJyZW50UHJvamVjdC50YXNrcy5maW5kKHRhc2tzID0+IHRhc2tzLmlkID09IGN1cnJlbnRUYXNrSWQpXG4gICAgICAgICAgICAgICAgb3BlblRhc2tGb3JtKGN1cnJlbnRUYXNrT2JqKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBkZWxldGVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBUYXNrJ1xuICAgICAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVUYXNrQnV0dG9uJylcbiAgICAgICAgICAgIGRlbGV0ZVRhc2tCdXR0b24uaWQgPSB0YXNrLmlkXG4gICAgICAgICAgICB0YXNrTGkuYXBwZW5kKGRlbGV0ZVRhc2tCdXR0b24pXG5cbiAgICAgICAgICAgIGRlbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QudGFza3Muc3BsaWNlKGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZpbmRJbmRleCh0YXNrcyA9PiB0YXNrcy5pZCA9PSBldmVudC50YXJnZXQuaWQpLCAxKVxuICAgICAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpXG4gICAgICAgICAgICAgICAgcmVuZGVyQ29udGVudCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBpZiAoY3VycmVudFByb2plY3QuaWQgPiAwKSB7IHJlbmRlclRhc2tzKCkgfVxuXG4gICAgLy8gSWYgY3VycmVudFRhc2tPYmogaXMgcGFzc2VkIHRvIHRoaXMsIGl0IHdpbGwgYWN0IGFzIGFuIGVkaXQgd2luZG93XG4gICAgZnVuY3Rpb24gb3BlblRhc2tGb3JtIChjdXJyZW50VGFza09iaikge1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICB0YXNrRm9ybS5pZCA9ICd0YXNrRm9ybSdcbiAgICAgICAgdGFza0Zvcm0ucmVzZXQoKVxuICAgICAgICBjb250ZW50LmFwcGVuZCh0YXNrRm9ybSlcbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgaGVhZC50ZXh0Q29udGVudCA9ICdBZGQgTmV3IFRhc2snXG5cbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBuYW1lTGFiZWwuZm9yID0gJ3Rhc2tOYW1lJ1xuICAgICAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZSdcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgICAgICBuYW1lSW5wdXQuaWQgPSAndGFza05hbWUnXG4gICAgICAgIG5hbWVJbnB1dC5uYW1lID0gJ3Rhc2tOYW1lJ1xuICAgICAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5mb3IgPSAndGFza0Rlc2NyaXB0aW9uJ1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJ1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCdcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0YXNrRGVzY3JpcHRpb24nXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICd0YXNrRGVzY3JpcHRpb24nXG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBkdWVEYXRlTGFiZWwuZm9yID0gJ3Rhc2tEdWVEYXRlJ1xuICAgICAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnXG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSdcbiAgICAgICAgZHVlRGF0ZUlucHV0LmlkID0gJ3Rhc2tEdWVEYXRlJ1xuICAgICAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICd0YXNrRHVlRGF0ZSdcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSdcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5pZCA9ICd0YXNrUHJpb3JpdHknXG4gICAgICAgIHByaW9yaXR5TGFiZWwubmFtZSA9ICd0YXNrUHJpb3JpdHknXG5cbiAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgbG93LnNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICBsb3cudmFsdWUgPSAnTG93J1xuICAgICAgICBsb3cudGV4dENvbnRlbnQgPSAnTG93J1xuICAgICAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBtZWRpdW0udmFsdWUgPSAnTWVkaXVtJ1xuICAgICAgICBtZWRpdW0udGV4dENvbnRlbnQgPSAnTWVkaXVtJ1xuICAgICAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgaGlnaC52YWx1ZSA9ICdIaWdoJ1xuICAgICAgICBoaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnXG5cbiAgICAgICAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHRhc2tTdWJtaXQuaWQgPSAndGFza0Zvcm1TdWJtaXQnXG4gICAgICAgIHRhc2tTdWJtaXQudHlwZSA9ICdzdWJtaXQnXG4gICAgICAgIHRhc2tTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0J1xuXG4gICAgICAgIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICB0YXNrQ2FuY2VsLmlkID0gJ3Rhc2tGb3JtQ2FuY2VsJ1xuICAgICAgICB0YXNrQ2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcblxuICAgICAgICB0YXNrRm9ybS5hcHBlbmQoaGVhZCwgbmFtZUxhYmVsLCBuYW1lSW5wdXQsIGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0LCBwcmlvcml0eUxhYmVsLCB0YXNrU3VibWl0LCB0YXNrQ2FuY2VsKVxuICAgICAgICBwcmlvcml0eUxhYmVsLmFwcGVuZChsb3csIG1lZGl1bSwgaGlnaClcblxuICAgICAgICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBpZiAobmFtZUlucHV0LnZhbHVlID09ICcnIHx8IG5hbWVJbnB1dC52YWx1ZSA9PSBudWxsKSByZXR1cm4gXG4gICAgICAgICAgICBpZiAoY3VycmVudFRhc2tPYmoudGl0bGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QudGFza3Muc3BsaWNlKGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZpbmRJbmRleCh0YXNrcyA9PiB0YXNrcy5pZCA9PSBjdXJyZW50VGFza09iai5pZCksIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayhuYW1lSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlMYWJlbC52YWx1ZSlcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnB1c2gobmV3VGFzaylcbiAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpXG4gICAgICAgICAgICByZW5kZXJDb250ZW50KClcbiAgICAgICAgfSlcblxuICAgICAgICB0YXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgICAvLyBUaGlzIGZpbGxzIHRoZSBmaWVsZHMgdG8gdmlldy9lZGl0XG4gICAgICAgIGlmIChjdXJyZW50VGFza09iai50aXRsZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWQudGV4dENvbnRlbnQgPSAnVmlldy9FZGl0IFRhc2snXG4gICAgICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSBjdXJyZW50VGFza09iai50aXRsZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGN1cnJlbnRUYXNrT2JqLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBjdXJyZW50VGFza09iai5kdWVEYXRlXG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLnZhbHVlID0gY3VycmVudFRhc2tPYmoucHJpb3JpdHlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRhc2sgKCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYWRkVGFza0J1dHRvbi5pZCA9ICdhZGRUYXNrQnV0dG9uJ1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJysgTmV3IFRhc2snXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGFkZFRhc2tCdXR0b24pXG5cbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5UYXNrRm9ybSlcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0LmlkID4gMCkgeyBhZGRUYXNrKCkgfVxufVxuXG5leHBvcnQgeyByZW5kZXJDb250ZW50IH0iLCJpbXBvcnQgeyBjbGVhckVsZW1lbnQsIHByb2plY3RzIH0gZnJvbSAnLi9pbmRleCdcblxuZnVuY3Rpb24gcmVuZGVySG9tZSAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICBjbGVhckVsZW1lbnQoY29udGVudClcblxuICAgIGNvbnN0IHdlZWtIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB3ZWVrSDIudGV4dENvbnRlbnQgPSAnRHVlIFRoaXMgV2VlaydcbiAgICBjb250ZW50LmFwcGVuZCh3ZWVrSDIpXG5cbiAgICBjb25zdCBwcmlvcml0eUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHByaW9yaXR5SDIudGV4dENvbnRlbnQgPSAnSGlnaCBQcmlvcml0eSdcbiAgICBjb250ZW50LmFwcGVuZChwcmlvcml0eUgyKVxufVxuXG5leHBvcnQgeyByZW5kZXJIb21lIH0iLCJpbXBvcnQgJy4uL3NyYy9zdHlsZS5zY3NzJztcbmltcG9ydCB7IHJlbmRlckNvbnRlbnQgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyByZW5kZXJIb21lIH0gZnJvbSAnLi9ob21lJztcblxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKVxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm0nKVxuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpXG5cbmNvbnN0IExPQ0FMX1NUT1JBR0VfS0VZID0gJ3RvZG8ucHJvamVjdHMnXG5jb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfSUQgPSAndG9kby5wcm9qZWN0SWQnXG5cbmxldCBwcm9qZWN0cyA9ICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfS0VZKSkgfHwgXG5be2lkOiAwLCBuYW1lOiAnSG9tZScsIHRhc2s6IFtdfSwge2lkOiAxLCBuYW1lOiAnR2VuZXJhbCcsIHRhc2tzOiBbe3BJZDogMiwgaWQ6IDQsIHRpdGxlOiAnVGVzdCBUYXNrJywgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgdGVzdCcsIGR1ZURhdGU6ICcxMC8zMS8yMDIyJywgcHJpb3JpdHk6ICdMb3cnIH0sIHtwSWQ6IDMsIGlkOiA1LCB0aXRsZTogJ1Rlc3QgTnVtIDInLCBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYW5vdGhlciB0ZXN0JywgZHVlRGF0ZTogJzEwLzI1LzIwMjInLCBwcmlvcml0eTogJ01lZGl1bScgfV19XVxuXG5sZXQgcHJvamVjdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0lEKSB8fCAwXG5cbmZ1bmN0aW9uIHNldFByb2plY3RJZCh2YWx1ZSkge1xuICAgIHByb2plY3RJZCA9IHZhbHVlXG59XG5cbnByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdsaScpIHtcbiAgICAgICAgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkXG4gICAgICAgIGlmIChwcm9qZWN0SWQgPT0gMCkge1xuICAgICAgICAgICAgc2F2ZVByb2plY3RzKClcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RzKClcbiAgICAgICAgICAgIHJlbmRlckhvbWUoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2F2ZVByb2plY3RzKClcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKVxuICAgICAgICByZW5kZXJDb250ZW50KClcbiAgICB9XG59KVxuXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdElucHV0LnZhbHVlXG4gICAgaWYgKHByb2plY3ROYW1lID09PSAnJyB8fCBwcm9qZWN0TmFtZSA9PT0gbnVsbCkgcmV0dXJuXG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpXG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gbnVsbFxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICBzYXZlUHJvamVjdHMoKVxuICAgIHJlbmRlclByb2plY3RzKClcbn0pXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlICwgcHJpb3JpdHkpIHtcbiAgICBpZiAoZGVzY3JpcHRpb24gPT0gJycpIGRlc2NyaXB0aW9uID0gJ05vIGRlc2NyaXB0aW9uJ1xuICAgIGlmIChkdWVEYXRlID09ICcnKSBkdWVEYXRlID0gJ05vIGR1ZSBkYXRlJ1xuICAgIHJldHVybiB7cElkOiBwcm9qZWN0SWQsIGlkOiBEYXRlLm5vdygpLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICByZXR1cm4ge2lkOiBEYXRlLm5vdygpLCBuYW1lOiBuYW1lLCB0YXNrczogW119XG59XG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0cygpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9JRCwgcHJvamVjdElkKVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyAoKSB7XG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RMaXN0KVxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIG5ld1Byb2plY3QuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWVcbiAgICAgICAgaWYgKHByb2plY3QuaWQgPT0gcHJvamVjdElkKSB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKG5ld1Byb2plY3QpXG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuXG5yZW5kZXJQcm9qZWN0cygpXG5cbmlmIChwcm9qZWN0SWQgPiAwKSB7IHJlbmRlckNvbnRlbnQoKSB9XG5lbHNlIHsgcmVuZGVySG9tZSgpIH1cblxuZXhwb3J0IHsgcHJvamVjdHMsIHByb2plY3RJZCwgc2V0UHJvamVjdElkICxjbGVhckVsZW1lbnQsIHNhdmVQcm9qZWN0cywgcmVuZGVyUHJvamVjdHMsIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRhc2t9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=