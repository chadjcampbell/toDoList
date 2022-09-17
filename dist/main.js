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
            renderContent()
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



const projectList = document.querySelector('#projectList')
const projectForm = document.querySelector('#projectForm')
const projectInput = document.querySelector('#projectInput')

const LOCAL_STORAGE_KEY = 'todo.projects'
const LOCAL_STORAGE_PROJECT_ID = 'todo.projectId'

let projects =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || 
[{id: 0, name: 'Home', tasks: []}, 
{id: 1, name: 'General', tasks: [{pId: 2, id: 4, title: 'Test Task', description: 'This is a test', dueDate: '10/31/2022', priority: 'Low' }, {pId: 3, id: 5, title: 'Test Num 2', description: 'This is another test', dueDate: '10/25/2022', priority: 'Medium' }]}]

let projectId = localStorage.getItem(LOCAL_STORAGE_PROJECT_ID) || 0

function setProjectId(value) {
    projectId = value
}

projectList.addEventListener('click', event => {
    if (event.target.tagName.toLowerCase() == 'li') {
        projectId = event.target.dataset.projectId
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
;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderContent)()



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQWE7Ozs7Ozs7O1VDNUViO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzg0NmEiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTWFpbiBzZWN0aW9ucyAqL1xcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0JlcmtzaGlyZSBTd2FzaCcsIGN1cnNpdmU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWY2ZTQ7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJkM2RkO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHotaW5kZXg6IDE7XFxufSBcXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJkM2RkOyAgICBcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XFxufVxcblxcbi8qIFRoZSBzaWRlIG5hdmlnYXRpb24gbWVudSAqL1xcbi5zaWRlYmFyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2MxZDU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDNweCAwcHggMTdweCAycHggcmdiYSgwLDAsMCwwLjc1KTtcXG4gIH1cXG4gIFxcbi5zaWRlYmFyIGxpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnNpZGViYXIgbGkuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTNiYzU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyIGxpOmhvdmVyOm5vdCguYWN0aXZlKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAxMTEsIDI1NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmRpdi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHggNDBweDsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5jb250ZW50ID4gKiB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuaW5wdXQsIHNlbGVjdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOGJkM2RkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuXFxuLyogT24gc2NyZWVucyB0aGF0IGFyZSBsZXNzIHRoYW4gNzAwcHggd2lkZSwgbWFrZSB0aGUgc2lkZWJhciBpbnRvIGEgdG9wYmFyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4gIG1haW4ge2Rpc3BsYXk6IGlubGluZTt9XFxuICAuc2lkZWJhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG4gIC5zaWRlYmFyIGxpIHtmbG9hdDogbGVmdDt9XFxuICBkaXYuY29udGVudCB7bWFyZ2luLWxlZnQ6IDA7IG1pbi1oZWlnaHQ6IDUwMHB4O31cXG4gIGRpdi5jb250ZW50IGg2IHsgZGlzcGxheTogbm9uZTsgfVxcbn1cXG5cXG4vKiBPbiBzY3JlZW5zIHRoYXQgYXJlIGxlc3MgdGhhbiA0MDBweCwgZGlzcGxheSB0aGUgYmFyIHZlcnRpY2FsbHksIGluc3RlYWQgb2YgaG9yaXpvbnRhbGx5ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC5zaWRlYmFyIGxpIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gIH1cXG59XFxuXFxuLyogTmV3IHByb2plY3QgZm9ybSAqL1xcbiNwcm9qZWN0Rm9ybSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBtYXJnaW46IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmU0O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI3Byb2plY3RGb3JtIGlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogM3B4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jcHJvamVjdEZvcm0gYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhM2JjNTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4vKiBNYWluIENvbnRlbnQgQXJlYSAqL1xcblxcbiNkZWxldGVQcm9qZWN0QnV0dG9uLCAuZGVsZXRlVGFza0J1dHRvbiwgI3Rhc2tGb3JtQ2FuY2VsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWxldGVUYXNrQnV0dG9uIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4jdGFza0Zvcm1DYW5jZWwge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI2FkZFRhc2tCdXR0b24sIC5lZGl0VGFza0J1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTNiYzU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5lZGl0VGFza0J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJkM2RkO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29udGVudCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcblxcblxcbi8qIFRhc2sgRm9ybSAqL1xcblxcbiN0YXNrRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZWFiZTtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMTdweCAycHggcmdiYSgwLDAsMCwwLjc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jdGFza0Zvcm0gaW5wdXQsIHNlbGVjdCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4jdGFza0Zvcm1TdWJtaXQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEzYmM1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQSw2QkFBNkI7QUFDN0I7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCw2Q0FBNkM7RUFDL0M7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQSw2RUFBNkU7QUFDN0U7RUFDRSxNQUFNLGVBQWUsQ0FBQztFQUN0QjtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBLGFBQWEsV0FBVyxDQUFDO0VBQ3pCLGFBQWEsY0FBYyxFQUFFLGlCQUFpQixDQUFDO0VBQy9DLGlCQUFpQixhQUFhLEVBQUU7QUFDbEM7O0FBRUEsNkZBQTZGO0FBQzdGO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0FBQ0Y7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLHNCQUFzQjs7QUFFdEI7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOzs7O0FBSUEsY0FBYzs7QUFFZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3QyxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE1haW4gc2VjdGlvbnMgKi9cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdCZXJrc2hpcmUgU3dhc2gnLCBjdXJzaXZlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmNmU0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiZDNkZDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB6LWluZGV4OiAxO1xcbn0gXFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiZDNkZDsgICAgXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcbn1cXG5cXG4vKiBUaGUgc2lkZSBuYXZpZ2F0aW9uIG1lbnUgKi9cXG4uc2lkZWJhciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdjMWQ1O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBib3gtc2hhZG93OiAzcHggMHB4IDE3cHggMnB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICB9XFxuICBcXG4uc2lkZWJhciBsaSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyIGxpLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEzYmM1O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhciBsaTpob3Zlcjpub3QoLmFjdGl2ZSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMTExLCAyNTUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5kaXYuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYuY29udGVudCA+ICoge1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbmlucHV0LCBzZWxlY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzhiZDNkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgbGVzcyB0aGFuIDcwMHB4IHdpZGUsIG1ha2UgdGhlIHNpZGViYXIgaW50byBhIHRvcGJhciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICBtYWluIHtkaXNwbGF5OiBpbmxpbmU7fVxcbiAgLnNpZGViYXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuICAuc2lkZWJhciBsaSB7ZmxvYXQ6IGxlZnQ7fVxcbiAgZGl2LmNvbnRlbnQge21hcmdpbi1sZWZ0OiAwOyBtaW4taGVpZ2h0OiA1MDBweDt9XFxuICBkaXYuY29udGVudCBoNiB7IGRpc3BsYXk6IG5vbmU7IH1cXG59XFxuXFxuLyogT24gc2NyZWVucyB0aGF0IGFyZSBsZXNzIHRoYW4gNDAwcHgsIGRpc3BsYXkgdGhlIGJhciB2ZXJ0aWNhbGx5LCBpbnN0ZWFkIG9mIGhvcml6b250YWxseSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICAuc2lkZWJhciBsaSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICB9XFxufVxcblxcbi8qIE5ldyBwcm9qZWN0IGZvcm0gKi9cXG4jcHJvamVjdEZvcm0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgbWFyZ2luOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjZlNDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSBpbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDNweDtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI3Byb2plY3RGb3JtIGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTNiYzU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLyogTWFpbiBDb250ZW50IEFyZWEgKi9cXG5cXG4jZGVsZXRlUHJvamVjdEJ1dHRvbiwgLmRlbGV0ZVRhc2tCdXR0b24sICN0YXNrRm9ybUNhbmNlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwcHg7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlVGFza0J1dHRvbiB7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuI3Rhc2tGb3JtQ2FuY2VsIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbiNhZGRUYXNrQnV0dG9uLCAuZWRpdFRhc2tCdXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEzYmM1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4uZWRpdFRhc2tCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiZDNkZDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNvbnRlbnQgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG5cXG4vKiBUYXNrIEZvcm0gKi9cXG5cXG4jdGFza0Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGVhYmU7XFxuICBib3gtc2hhZG93OiAzcHggMHB4IDE3cHggMnB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI3Rhc2tGb3JtIGlucHV0LCBzZWxlY3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxuI3Rhc2tGb3JtU3VibWl0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhM2JjNTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNsZWFyRWxlbWVudCwgc2F2ZVByb2plY3RzLCByZW5kZXJQcm9qZWN0cywgY3JlYXRlVGFzaywgcHJvamVjdHMsIHByb2plY3RJZCwgc2V0UHJvamVjdElkIH0gZnJvbSAnLi9pbmRleCc7XG5cbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnQgKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgY2xlYXJFbGVtZW50KGNvbnRlbnQpXG5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0LmlkID09IHByb2plY3RJZCBcbiAgICB9KVxuXG4gICAgY29uc3QgY3VycmVudFByb2plY3RIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjdXJyZW50UHJvamVjdEgyLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QubmFtZVxuICAgIGNvbnRlbnQuYXBwZW5kKGN1cnJlbnRQcm9qZWN0SDIpXG5cbiAgICBpZiAoY3VycmVudFByb2plY3QuaWQgPiAxKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0J1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmlkID0gJ2RlbGV0ZVByb2plY3RCdXR0b24nXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGRlbGV0ZVByb2plY3RCdXR0b24pXG5cbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBjdXJyZW50UHJvamVjdC5pZCksIDEpXG4gICAgICAgICAgICBzZXRQcm9qZWN0SWQoMClcbiAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpXG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpXG4gICAgICAgICAgICByZW5kZXJDb250ZW50KClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVuZGVyVGFza3MgKCkge1xuXG4gICAgICAgIGNvbnN0IGhlYWRUYXNrTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGhlYWRUYXNrTGkuaWQgPSAnaGVhZFRhc2tMaSdcbiAgICAgICAgY29udGVudC5hcHBlbmQoaGVhZFRhc2tMaSlcbiAgICAgICAgY29uc3QgaGVhZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBoZWFkVGl0bGUudGV4dENvbnRlbnQgPSAnTmFtZSdcbiAgICAgICAgY29uc3QgaGVhZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKVxuICAgICAgICBoZWFkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nXG4gICAgICAgIGNvbnN0IGhlYWREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKVxuICAgICAgICBoZWFkRHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSdcbiAgICAgICAgY29uc3QgaGVhZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKVxuICAgICAgICBoZWFkUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknXG4gICAgICAgIGNvbnN0IHBsYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JylcbiAgICAgICAgcGxhY2VyLnRleHRDb250ZW50ID0gJ3RoaXMgaXMgYSBwbGFjZWhvbGRlciBzcGFjZSwgc2hvdWxkIGhhdmUgdXNlZCBhIHRhYmxlIDotUCdcbiAgICAgICAgcGxhY2VyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgICBoZWFkVGFza0xpLmFwcGVuZChoZWFkVGl0bGUsIGhlYWREZXNjcmlwdGlvbiwgaGVhZER1ZURhdGUsIGhlYWRQcmlvcml0eSwgcGxhY2VyKVxuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZCh0YXNrTGkpXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZVxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpXG4gICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JylcbiAgICAgICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eVxuICAgICAgICAgICAgdGFza0xpLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuXG4gICAgICAgICAgICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBlZGl0VGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdWaWV3L0VkaXQnXG4gICAgICAgICAgICBlZGl0VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0VGFza0J1dHRvbicpXG4gICAgICAgICAgICBlZGl0VGFza0J1dHRvbi5pZCA9ICdlJyArIHRhc2suaWRcbiAgICAgICAgICAgIHRhc2tMaS5hcHBlbmQoZWRpdFRhc2tCdXR0b24pXG5cbiAgICAgICAgICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT57XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRhc2tJZCA9IGV2ZW50LnRhcmdldC5pZC5zdWJzdHJpbmcoMSlcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFza09iaiA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZpbmQodGFza3MgPT4gdGFza3MuaWQgPT0gY3VycmVudFRhc2tJZClcbiAgICAgICAgICAgICAgICBvcGVuVGFza0Zvcm0oY3VycmVudFRhc2tPYmopXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGRlbGV0ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIFRhc2snXG4gICAgICAgICAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRhc2tCdXR0b24nKVxuICAgICAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5pZCA9IHRhc2suaWRcbiAgICAgICAgICAgIHRhc2tMaS5hcHBlbmQoZGVsZXRlVGFza0J1dHRvbilcblxuICAgICAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrcy5zcGxpY2UoY3VycmVudFByb2plY3QudGFza3MuZmluZEluZGV4KHRhc2tzID0+IHRhc2tzLmlkID09IGV2ZW50LnRhcmdldC5pZCksIDEpXG4gICAgICAgICAgICAgICAgc2F2ZVByb2plY3RzKClcbiAgICAgICAgICAgICAgICByZW5kZXJDb250ZW50KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGlmIChjdXJyZW50UHJvamVjdC5pZCA+IDApIHsgcmVuZGVyVGFza3MoKSB9XG5cbiAgICAvLyBJZiBjdXJyZW50VGFza09iaiBpcyBwYXNzZWQgdG8gdGhpcywgaXQgd2lsbCBhY3QgYXMgYW4gZWRpdCB3aW5kb3dcbiAgICBmdW5jdGlvbiBvcGVuVGFza0Zvcm0gKGN1cnJlbnRUYXNrT2JqKSB7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIHRhc2tGb3JtLmlkID0gJ3Rhc2tGb3JtJ1xuICAgICAgICB0YXNrRm9ybS5yZXNldCgpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKHRhc2tGb3JtKVxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBoZWFkLnRleHRDb250ZW50ID0gJ0FkZCBOZXcgVGFzaydcblxuICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIG5hbWVMYWJlbC5mb3IgPSAndGFza05hbWUnXG4gICAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lJ1xuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgICAgIG5hbWVJbnB1dC5pZCA9ICd0YXNrTmFtZSdcbiAgICAgICAgbmFtZUlucHV0Lm5hbWUgPSAndGFza05hbWUnXG4gICAgICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWVcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmZvciA9ICd0YXNrRGVzY3JpcHRpb24nXG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ3Rhc2tEZXNjcmlwdGlvbidcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ3Rhc2tEZXNjcmlwdGlvbidcblxuICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGR1ZURhdGVMYWJlbC5mb3IgPSAndGFza0R1ZURhdGUnXG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSdcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJ1xuICAgICAgICBkdWVEYXRlSW5wdXQuaWQgPSAndGFza0R1ZURhdGUnXG4gICAgICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ3Rhc2tEdWVEYXRlJ1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5J1xuICAgICAgICBwcmlvcml0eUxhYmVsLmlkID0gJ3Rhc2tQcmlvcml0eSdcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5uYW1lID0gJ3Rhc2tQcmlvcml0eSdcblxuICAgICAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBsb3cuc2VsZWN0ZWQgPSB0cnVlXG4gICAgICAgIGxvdy52YWx1ZSA9ICdMb3cnXG4gICAgICAgIGxvdy50ZXh0Q29udGVudCA9ICdMb3cnXG4gICAgICAgIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIG1lZGl1bS52YWx1ZSA9ICdNZWRpdW0nXG4gICAgICAgIG1lZGl1bS50ZXh0Q29udGVudCA9ICdNZWRpdW0nXG4gICAgICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBoaWdoLnZhbHVlID0gJ0hpZ2gnXG4gICAgICAgIGhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCdcblxuICAgICAgICBjb25zdCB0YXNrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgdGFza1N1Ym1pdC5pZCA9ICd0YXNrRm9ybVN1Ym1pdCdcbiAgICAgICAgdGFza1N1Ym1pdC50eXBlID0gJ3N1Ym1pdCdcbiAgICAgICAgdGFza1N1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnXG5cbiAgICAgICAgY29uc3QgdGFza0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHRhc2tDYW5jZWwuaWQgPSAndGFza0Zvcm1DYW5jZWwnXG4gICAgICAgIHRhc2tDYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xuXG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZChoZWFkLCBuYW1lTGFiZWwsIG5hbWVJbnB1dCwgZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQsIHByaW9yaXR5TGFiZWwsIHRhc2tTdWJtaXQsIHRhc2tDYW5jZWwpXG4gICAgICAgIHByaW9yaXR5TGFiZWwuYXBwZW5kKGxvdywgbWVkaXVtLCBoaWdoKVxuXG4gICAgICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGlmIChuYW1lSW5wdXQudmFsdWUgPT0gJycgfHwgbmFtZUlucHV0LnZhbHVlID09IG51bGwpIHJldHVybiBcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFza09iai50aXRsZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrcy5zcGxpY2UoY3VycmVudFByb2plY3QudGFza3MuZmluZEluZGV4KHRhc2tzID0+IHRhc2tzLmlkID09IGN1cnJlbnRUYXNrT2JqLmlkKSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKG5hbWVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUxhYmVsLnZhbHVlKVxuICAgICAgICAgICAgY3VycmVudFByb2plY3QudGFza3MucHVzaChuZXdUYXNrKVxuICAgICAgICAgICAgc2F2ZVByb2plY3RzKClcbiAgICAgICAgICAgIHJlbmRlckNvbnRlbnQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIH0pXG4gICAgICAgIC8vIFRoaXMgZmlsbHMgdGhlIGZpZWxkcyB0byB2aWV3L2VkaXRcbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrT2JqLnRpdGxlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZC50ZXh0Q29udGVudCA9ICdWaWV3L0VkaXQgVGFzaydcbiAgICAgICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9IGN1cnJlbnRUYXNrT2JqLnRpdGxlXG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gY3VycmVudFRhc2tPYmouZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGN1cnJlbnRUYXNrT2JqLmR1ZURhdGVcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwudmFsdWUgPSBjdXJyZW50VGFza09iai5wcmlvcml0eVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGFzayAoKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBhZGRUYXNrQnV0dG9uLmlkID0gJ2FkZFRhc2tCdXR0b24nXG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnKyBOZXcgVGFzaydcbiAgICAgICAgY29udGVudC5hcHBlbmQoYWRkVGFza0J1dHRvbilcblxuICAgICAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblRhc2tGb3JtKVxuICAgIH1cbiAgICBpZiAoY3VycmVudFByb2plY3QuaWQgPiAwKSB7IGFkZFRhc2soKSB9XG59XG5cbmV4cG9ydCB7IHJlbmRlckNvbnRlbnQgfSIsImltcG9ydCAnLi4vc3JjL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgcmVuZGVyQ29udGVudCB9IGZyb20gJy4vZG9tJztcblxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKVxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEZvcm0nKVxuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpXG5cbmNvbnN0IExPQ0FMX1NUT1JBR0VfS0VZID0gJ3RvZG8ucHJvamVjdHMnXG5jb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfSUQgPSAndG9kby5wcm9qZWN0SWQnXG5cbmxldCBwcm9qZWN0cyA9ICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfS0VZKSkgfHwgXG5be2lkOiAwLCBuYW1lOiAnSG9tZScsIHRhc2tzOiBbXX0sIFxue2lkOiAxLCBuYW1lOiAnR2VuZXJhbCcsIHRhc2tzOiBbe3BJZDogMiwgaWQ6IDQsIHRpdGxlOiAnVGVzdCBUYXNrJywgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgdGVzdCcsIGR1ZURhdGU6ICcxMC8zMS8yMDIyJywgcHJpb3JpdHk6ICdMb3cnIH0sIHtwSWQ6IDMsIGlkOiA1LCB0aXRsZTogJ1Rlc3QgTnVtIDInLCBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYW5vdGhlciB0ZXN0JywgZHVlRGF0ZTogJzEwLzI1LzIwMjInLCBwcmlvcml0eTogJ01lZGl1bScgfV19XVxuXG5sZXQgcHJvamVjdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0lEKSB8fCAwXG5cbmZ1bmN0aW9uIHNldFByb2plY3RJZCh2YWx1ZSkge1xuICAgIHByb2plY3RJZCA9IHZhbHVlXG59XG5cbnByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdsaScpIHtcbiAgICAgICAgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkXG4gICAgICAgIHNhdmVQcm9qZWN0cygpXG4gICAgICAgIHJlbmRlclByb2plY3RzKClcbiAgICAgICAgcmVuZGVyQ29udGVudCgpXG4gICAgfVxufSlcblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RJbnB1dC52YWx1ZVxuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJycgfHwgcHJvamVjdE5hbWUgPT09IG51bGwpIHJldHVyblxuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IG51bGxcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgc2F2ZVByb2plY3RzKClcbiAgICByZW5kZXJQcm9qZWN0cygpXG59KVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSAsIHByaW9yaXR5KSB7XG4gICAgaWYgKGRlc2NyaXB0aW9uID09ICcnKSBkZXNjcmlwdGlvbiA9ICdObyBkZXNjcmlwdGlvbidcbiAgICBpZiAoZHVlRGF0ZSA9PSAnJykgZHVlRGF0ZSA9ICdObyBkdWUgZGF0ZSdcbiAgICByZXR1cm4ge3BJZDogcHJvamVjdElkLCBpZDogRGF0ZS5ub3coKSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIHtpZDogRGF0ZS5ub3coKSwgbmFtZTogbmFtZSwgdGFza3M6IFtdfVxufVxuXG5mdW5jdGlvbiBzYXZlUHJvamVjdHMoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfSUQsIHByb2plY3RJZClcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMgKCkge1xuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0TGlzdClcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBuZXdQcm9qZWN0LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZFxuICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lXG4gICAgICAgIGlmIChwcm9qZWN0LmlkID09IHByb2plY3RJZCkge1xuICAgICAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChuZXdQcm9qZWN0KVxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbn1cblxucmVuZGVyUHJvamVjdHMoKVxucmVuZGVyQ29udGVudCgpXG5cbmV4cG9ydCB7IHByb2plY3RzLCBwcm9qZWN0SWQsIHNldFByb2plY3RJZCAsY2xlYXJFbGVtZW50LCBzYXZlUHJvamVjdHMsIHJlbmRlclByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUYXNrfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9