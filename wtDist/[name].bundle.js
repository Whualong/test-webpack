(function(graph){
          function require(module){
            function localRequire(relativePath){
              return require(graph[module].dependecies[relativePath])
            }
            var exports = {};
            (function(require,exports,code){
              eval(code)
            })(localRequire,exports,graph[module].code);
            return exports;
          }
          require('/Users/zuoyikeji/myRepo/test-webpack/src/wt.js')
        })({"/Users/zuoyikeji/myRepo/test-webpack/src/wt.js":{"dependencies":{"./wt/add.js":"/Users/zuoyikeji/myRepo/test-webpack/src/wt/add.js"},"code":"\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"./wt/add.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _add[\"default\"])(3, 5);\ndocument.write('hahha');"},"/Users/zuoyikeji/myRepo/test-webpack/src/wt/add.js":{"dependencies":{"./flow.js":"/Users/zuoyikeji/myRepo/test-webpack/src/wt/flow.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = add;\n\nvar _flow = _interopRequireDefault(require(\"./flow.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction add(a, b) {\n  (0, _flow[\"default\"])();\n  return a + b;\n}"}})