"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n//import { data } from '../../../SpeakerData';\n\n\nconst { promisify  } = __webpack_require__(/*! util */ \"util\");\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst delay = (ms)=>new Promise((resolve)=>{\n        setTimeout(resolve, ms);\n    })\n;\nasync function handler(req, res) {\n    //res.status(200).send(JSON.stringify(data, null, 2));\n    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n    try {\n        const readFileData = await readFile(jsonFile);\n        await delay(1000);\n        const speakers = JSON.parse(readFileData).speakers;\n        if (speakers) {\n            res.setHeader(\"Content-Type\", \"application/json\");\n            res.status(200).send(JSON.stringify(speakers, null, 2));\n            console.log(\"GET /api/speakers status: 200\");\n        }\n    } catch (e) {\n        console.log(\"/api/speakers error\", e);\n        res.status(404).send(\"File Not Found on server\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4Q0FBOEM7QUFDdEI7QUFDSjtBQUVwQixNQUFNLEVBQUVFLFNBQVMsR0FBRSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFNLENBQUM7QUFDckMsTUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNELG9EQUFXLENBQUM7QUFDdkMsTUFBTUksS0FBSyxHQUFHLENBQUNDLEVBQUUsR0FDZixJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxHQUFLO1FBQ3ZCQyxVQUFVLENBQUNELE9BQU8sRUFBRUYsRUFBRSxDQUFDLENBQUM7S0FDekIsQ0FBQztBQUFDO0FBRVUsZUFBZUksT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxzREFBc0Q7SUFFdEQsTUFBTUMsUUFBUSxHQUFHYixtREFBWSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUM7SUFDOUMsSUFBSTtRQUNGLE1BQU1jLFlBQVksR0FBRyxNQUFNVixRQUFRLENBQUNTLFFBQVEsQ0FBQztRQUM3QyxNQUFNUixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsTUFBTVUsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsWUFBWSxDQUFDLENBQUNDLFFBQVE7UUFDbEQsSUFBSUEsUUFBUSxFQUFFO1lBQ1pILEdBQUcsQ0FBQ00sU0FBUyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xETixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixJQUFJLENBQUNLLFNBQVMsQ0FBQ04sUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hETyxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQzlDO0tBQ0YsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7UUFDVkYsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLEVBQUVDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDWixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7S0FDbEQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwLXJlYWN0Ly4vcGFnZXMvYXBpL3NwZWFrZXJzL2luZGV4LmpzPzdkOWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vLi4vLi4vU3BlYWtlckRhdGEnO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5jb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZShcInV0aWxcIik7XHJcbmNvbnN0IHJlYWRGaWxlID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcclxuY29uc3QgZGVsYXkgPSAobXMpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIC8vcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpO1xyXG5cclxuICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZShcIi4vXCIsIFwiZGIuanNvblwiKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgYXdhaXQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zdCBzcGVha2VycyA9IEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKS5zcGVha2VycztcclxuICAgIGlmIChzcGVha2Vycykge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoc3BlYWtlcnMsIG51bGwsIDIpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJHRVQgL2FwaS9zcGVha2VycyBzdGF0dXM6IDIwMFwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIi9hcGkvc3BlYWtlcnMgZXJyb3JcIiwgZSk7XHJcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIkZpbGUgTm90IEZvdW5kIG9uIHNlcnZlclwiKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsicGF0aCIsImZzIiwicHJvbWlzaWZ5IiwicmVxdWlyZSIsInJlYWRGaWxlIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uRmlsZSIsInJlYWRGaWxlRGF0YSIsInNwZWFrZXJzIiwiSlNPTiIsInBhcnNlIiwic2V0SGVhZGVyIiwic3RhdHVzIiwic2VuZCIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/speakers/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();