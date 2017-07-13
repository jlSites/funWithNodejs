"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age_service_1 = require("./age-service");
var HelloTs = (function () {
    function HelloTs() {
    }
    HelloTs.prototype.sayHi = function () {
        console.log('say hi, ' + this.blahAge());
        return 1;
    };
    HelloTs.prototype.blahAge = function () {
        return age_service_1.isOld(34) ? 'very old' : 'young man';
    };
    return HelloTs;
}());
new HelloTs().sayHi();
//# sourceMappingURL=hello.js.map