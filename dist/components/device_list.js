define(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}({5:function(e,t,n){"use strict";n.r(t),n.d(t,"DeviceListCtrl",function(){return r});var r=function(){function e(e,t,n,r){this.$location=n,this.backendSrv=r,this.devices=[],this.pageReady=!1,this.getDevices()}return e.$inject=["$scope","$injector","$location","backendSrv"],e.prototype.getDevices=function(){var e=this;this.backendSrv.get("/api/plugin-proxy/kentik-app/api/v5/devices").then(function(t){e.devices=t.devices,e.pageReady=!0})},e.prototype.refresh=function(){this.getDevices()},e.prototype.gotoDashboard=function(e){this.$location.path("/dashboard/db/kentik-top-talkers").search({"var-device":e.device_name})},e.prototype.gotoDeviceDetail=function(e){this.$location.url("/plugins/kentik-app/page/device-details?device="+e.id)},e}();r.templateUrl="components/device_list.html"}})});
//# sourceMappingURL=device_list.js.map