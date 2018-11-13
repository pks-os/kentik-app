define(["lodash","app/plugins/sdk","angular"],function(e,t,i){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([function(t,i){t.exports=e},function(e,i){e.exports=t},function(e,t){e.exports=i},function(e,t){e.exports='<h3 class="page-heading">Enter your Kentik Credentials</h3>\n<div class="gf-form-group">\n  <div class="gf-form" ng-if="ctrl.apiError && ctrl.appModel.enabled">\n    <span>Invalid API credentials. This app wont work until the credentials are updated.</span>\n  </div>\n  <div class="gf-form">\n    <label class="gf-form-label width-10">Email</label>\n    \x3c!-- Hidden input to stop chrome from autofilling --\x3e\n    <input style="display:none;" type="text" name="somefakename" />\n    <input type="text" class="gf-form-input max-width-20" ng-model=\'ctrl.appModel.jsonData.email\' placeholder="email" />\n  </div>\n  <div class="gf-form-inline">\n    <div class="gf-form kentik-inline-field-margin--right">\n      <label class="gf-form-label width-10">Api Token</label>\n      \x3c!-- Hidden input to stop chrome from autofilling --\x3e\n      <input style="display:none;" type="password" name="anotherfakename" />\n      <input type="password" class="gf-form-input max-width-20" ng-model="ctrl.appModel.secureJsonData.token" ng-if="!ctrl.appModel.jsonData.tokenSet"\n        placeholder="api token" />\n      <div ng-if="ctrl.appModel.jsonData.tokenSet" class="gf-form">\n        <input type="text" class="gf-form-input max-width-20" disabled="disabled" value="saved" />\n        <div ng-if="ctrl.appModel.enabled">\n          <i class="fa fa-exclamation-triangle" ng-if="!ctrl.apiValidated" alt="Could not validate api Token."></i>\n        </div>\n      </div>\n    </div>\n    <div class="gf-form">\n      <a class="btn btn-danger btn-small" href="#" ng-click="ctrl.reset()" ng-if="ctrl.appModel.jsonData.tokenSet">reset</a>\n    </div>\n  </div>\n</div>\n\n<div ng-if="ctrl.appModel.jsonData.tokenSet" class="kentik-enabled-box">\n  <i class="icon-gf icon-gf-check icon-gf-check kentik-icon-success"></i> Successfully enabled. <strong>Next up:\n  </strong><a href="dashboard/db/kentik-home" class="external-link">Go to Kentik Home Dashboard</a>\n</div>\n'},function(e,t,i){"use strict";i.r(t),i.d(t,"ConfigCtrl",function(){return r});var n=i(3),a=i.n(n),o=i(0),r=function(){function e(e,t,i){this.backendSrv=i,this.appEditCtrl.setPreUpdateHook(this.preUpdate.bind(this)),this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this)),this.appModel.jsonData||(this.appModel.jsonData={}),this.appModel.secureJsonData||(this.appModel.secureJsonData={}),this.apiValidated=!1,this.apiError=!1,this.appModel.enabled&&this.appModel.jsonData.tokenSet&&this.validateApiConnection()}return e.$inject=["$scope","$injector","backendSrv"],e.prototype.preUpdate=function(){return this.appModel.secureJsonData.token&&(this.appModel.jsonData.tokenSet=!0),this.initDatasource()},e.prototype.postUpdate=function(){if(!this.appModel.enabled)return Promise.resolve();var e=this;return this.validateApiConnection().then(function(){return e.appEditCtrl.importDashboards().then(function(){return{url:"dashboard/db/kentik-home",message:"Kentik Connect Pro app installed!"}})})},e.prototype.validateApiConnection=function(){var e=this,t=this.backendSrv.get("/api/plugin-proxy/kentik-app/api/v5/users");return t.then(function(){e.apiValidated=!0},function(){e.apiValidated=!1,e.apiError=!0}),t},e.prototype.reset=function(){this.appModel.jsonData.email="",this.appModel.jsonData.tokenSet=!1,this.appModel.secureJsonData={},this.apiValidated=!1},e.prototype.initDatasource=function(){var e=this;return e.backendSrv.get("/api/datasources").then(function(t){var i=!1;o.forEach(t,function(e){i||"kentik"===e.name&&(i=!0)});var n=[];if(!i){n.push(e.backendSrv.post("/api/datasources",{name:"kentik",type:"kentik-ds",access:"direct",jsonData:{}}))}return Promise.all(n)})},e}();r.template=a.a},function(e,t,i){"use strict";i.r(t),i.d(t,"DeviceListCtrl",function(){return n});var n=function(){function e(e,t,i,n){this.$location=i,this.backendSrv=n,this.devices=[],this.pageReady=!1,this.getDevices()}return e.$inject=["$scope","$injector","$location","backendSrv"],e.prototype.getDevices=function(){var e=this;this.backendSrv.get("/api/plugin-proxy/kentik-app/api/v5/devices").then(function(t){e.devices=t.devices,e.pageReady=!0})},e.prototype.refresh=function(){this.getDevices()},e.prototype.gotoDashboard=function(e){this.$location.path("/dashboard/db/kentik-top-talkers").search({"var-device":e.device_name})},e.prototype.gotoDeviceDetail=function(e){this.$location.url("/plugins/kentik-app/page/device-details?device="+e.id)},e}();n.templateUrl="components/device_list.html"},function(e,t,i){"use strict";i.r(t),i.d(t,"DeviceDetailsCtrl",function(){return n});var n=function(){function e(e,t,i,n,a){this.$location=i,this.backendSrv=n,this.alertSrv=a,this.device={},this.deviceDTO={},this.pageReady=!1,this.getDevice(i.search().device)}return e.$inject=["$scope","$injector","$location","backendSrv","alertSrv"],e.prototype.addIP=function(){this.otherIps.push({ip:""})},e.prototype.removeIP=function(e){this.otherIps.splice(e,1)},e.prototype.getDevice=function(e){var t=this;this.backendSrv.get("/api/plugin-proxy/kentik-app/api/v5/device/"+e).then(function(e){t.device=e.device,t.updateDeviceDTO(),t.pageReady=!0})},e.prototype.gotoDashboard=function(e){this.$location.url("/dashboard/db/kentik-top-talkers?var-device="+e)},e.prototype.updateDeviceDTO=function(){this.deviceDTO={device_id:this.device.id,device_name:this.device.device_name,device_type:this.device.device_type,device_description:this.device.device_description,device_flow_type:this.device.device_flow_type,device_sample_rate:parseInt(this.device.device_sample_rate,10),minimize_snmp:this.device.minimize_snmp,device_snmp_ip:this.device.device_snmp_ip,device_snmp_community:this.device.device_snmp_community,device_bgp_type:this.device.device_bgp_type,device_bgp_password:this.device.device_bgp_password,device_bgp_neighbor_ip:this.device.device_bgp_neighbor_ip,device_bgp_neighbor_asn:parseInt(this.device.device_bgp_neighbor_asn,10)}},e.prototype.update=function(){var e=this;this.deviceDTO.device_snmp_ip||delete this.deviceDTO.device_snmp_ip,this.deviceDTO.device_snmp_community||delete this.deviceDTO.device_snmp_community;var t={device:this.deviceDTO};this.backendSrv.put("/api/plugin-proxy/kentik-app/api/v5/device/"+this.deviceDTO.device_id,t).then(function(t){if(!("err"in t))return e.alertSrv.set("Device Updated.",e.deviceDTO.device_name,"success",3e3),e.getDevice(e.deviceDTO.device_id);e.alertSrv.set("Device Update failed.",t.err,"error")},function(t){"error"in t.data?e.alertSrv.set("Device Update failed.",t.data.error,"error"):e.alertSrv.set("Device Update failed.",t,"error")})},e}();n.templateUrl="components/device_details.html"},function(e,t,i){"use strict";i.r(t),i.d(t,"AddDeviceCtrl",function(){return s});var n=i(0),a=i(2),o=i.n(a),r={device_name:"",device_type:"router",device_description:"",device_flow_type:"sflow",device_sample_rate:5,sending_ips:"",minimize_snmp:!1,device_bgp_type:"none",device_snmp_ip:"",device_snmp_community:""},s=function(){function e(e,t,i,n,a){this.$location=i,this.backendSrv=n,this.alertSrv=a,this.device=o.a.copy(r),this.sendingIps=[{ip:""}]}return e.$inject=["$scope","$injector","$location","backendSrv","alertSrv"],e.prototype.addIP=function(){this.sendingIps.push({ip:""})},e.prototype.removeIP=function(e){this.sendingIps.splice(e,1)},e.prototype.addDevice=function(){var e=this,t=[];n.forEach(this.sendingIps,function(e){t.push(e.ip)}),this.device.sending_ips=t.join(),this.backendSrv.post("/api/plugin-proxy/kentik-app/api/v5/device",this.device).then(function(t){"err"in t?e.alertSrv.set("Device Add failed.",t.err,"error"):e.$location.url("/plugins/kentik-app/page/device-list")})},e}();s.templateUrl="components/add_device.html"},,,function(e,t,i){"use strict";i.r(t);i(14),i(19);var n=i(4);i.d(t,"ConfigCtrl",function(){return n.ConfigCtrl});var a=i(5);i.d(t,"DeviceListCtrl",function(){return a.DeviceListCtrl});var o=i(6);i.d(t,"DeviceDetailsCtrl",function(){return o.DeviceDetailsCtrl});var r=i(7);i.d(t,"AddDeviceCtrl",function(){return r.AddDeviceCtrl});var s=i(1);Object(s.loadPluginCss)({dark:"plugins/kentik-app/css/kentik.dark.css",light:"plugins/kentik-app/css/kentik.light.css"})},,,,function(e,t){},,,,,function(e,t){}])});
//# sourceMappingURL=module.js.map